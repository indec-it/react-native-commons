import {call, put} from 'redux-saga/effects';

import {handleError} from '../actions/common';
import {
    notifyLoginFail,
    notifyFetchTokenSucceeded,
    notifyLoginSucceeded,
    notifyRefreshAccessToken,
    notifyFetchRefreshTokenSucceeded,
    receiveCurrentUser,
    receiveLastUserLogged,
    requestClearUserData,
    requestFetchToken,
    requestFetchRefreshToken,
    userChanged
} from '../actions/session';
import {SessionService} from '../services';

export function* clearSession() {
    try {
        yield call(SessionService.clearSession);
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* fetchRefreshToken({authEndpoint, clientId, clientSecret}) {
    try {
        const refreshToken = yield call(SessionService.fetchRefreshToken, authEndpoint, clientId, clientSecret);
        yield put(notifyFetchRefreshTokenSucceeded(refreshToken));
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* signIn({
    user, authEndpoint, redirectUri, clientCredentials
}) {
    try {
        const logged = yield call(
            SessionService.signIn,
            user,
            authEndpoint,
            redirectUri
        );
        if (logged) {
            const lastUserLogged = yield call(SessionService.getLastUserLogged);
            if (!lastUserLogged || lastUserLogged.username !== user.username) {
                yield call(SessionService.changeUser);
                yield put(userChanged());
                yield put(requestClearUserData());
            }
            yield put(requestFetchToken());
            if (clientCredentials) {
                const {clientId, clientSecret} = clientCredentials;
                yield put(requestFetchRefreshToken(authEndpoint, clientId, clientSecret));
            }
            yield put(notifyLoginSucceeded());
        } else {
            yield put(notifyLoginFail());
        }
    } catch (err) {
        yield call(clearSession);
        yield put(handleError(err));
    }
}

export function* getLastUserLogged() {
    try {
        const lastUserLogged = yield call(SessionService.getLastUserLogged);
        yield put(receiveLastUserLogged(lastUserLogged ? lastUserLogged.username : null));
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* getToken() {
    try {
        const token = yield call(SessionService.getToken);
        yield call(getLastUserLogged);
        yield put(notifyFetchTokenSucceeded(token));
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* refreshAccessToken({authEndpoint, clientId, clientSecret}) {
    try {
        yield call(SessionService.refreshAccessToken, authEndpoint, clientId, clientSecret);
        yield put(notifyRefreshAccessToken());
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* fetchCurrentUser() {
    try {
        const user = yield call(SessionService.fetchCurrentUser);
        yield put(receiveCurrentUser(user));
    } catch (err) {
        yield put(handleError(err));
    }
}
