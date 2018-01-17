/* eslint-disable import/prefer-default-export */
import {call, put} from 'redux-saga/effects';

import {handleError} from '../actions/common';
import {notifyLoginFail, notifyLoginSucceeded, notifyTokenReceived} from '../actions/session';

import {SessionService} from '../services';

export function* signIn(user) {
    try {
        const logged = yield call(SessionService.signIn, user);
        yield logged ? put(notifyLoginSucceeded()) : put(notifyLoginFail());
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

