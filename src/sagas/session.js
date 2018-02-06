import {call, put} from 'redux-saga/effects';

import {handleError} from '../actions/common';
import {
    notifyLoginFail,
    notifyTokenReceived,
    notifyLoginSucceeded,
    receiveLastUserLogged,
    requestClearUserData,
    requestToken,
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

export function* changeUser({userProfile}) {
    try {
        yield call(SessionService.removePreviousUserAndSave, userProfile);
        yield put(userChanged());
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* signIn({
    user, authEndpoint, redirectUri, userProfile
}) {
    try {
        const logged = yield call(
            SessionService.signIn,
            user,
            authEndpoint,
            redirectUri
        );
        if (logged) {
            const latUserLogged = yield call(SessionService.getLastUserLogged);
            if (latUserLogged && latUserLogged.username !== user.username) {
                yield call(changeUser, {userProfile});
                yield put(requestClearUserData());
            }
            yield put(requestToken());
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
        yield put(notifyTokenReceived(token));
    } catch (err) {
        yield put(handleError(err));
    }
}
