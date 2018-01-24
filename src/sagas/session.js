import {call, put} from 'redux-saga/effects';

import {handleError} from '../actions/common';
import {requestToken, notifyLoginFail, notifyLoginSucceeded, notifyTokenReceived} from '../actions/session';

import SessionService from '../services';

export function* signIn({user, authEndpoint, redirectUri}) {
    try {
        const logged = yield call(SessionService.signIn, user, authEndpoint, redirectUri);
        if (logged) {
            yield put(requestToken());
            yield put(notifyLoginSucceeded());
        } else {
            yield put(notifyLoginFail());
        }
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* getToken() {
    try {
        const token = yield call(SessionService.getToken);
        yield put(notifyTokenReceived(token));
    } catch (err) {
        yield put(handleError(err));
    }
}

