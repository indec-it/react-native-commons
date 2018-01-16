import {all, takeEvery } from 'redux-saga/effects';

import {ERROR_OCCURRED} from '../actions/common';
import {USER_LOGIN_REQUESTED, USER_TOKEN_REQUESTED } from '../actions/session';

import {handleError} from './common';
import {signIn, getToken } from './session';

function* root() {
    yield all([
        takeEvery(ERROR_OCCURRED, handleError),
        takeEvery(USER_LOGIN_REQUESTED, signIn),
        takeEvery(USER_TOKEN_REQUESTED, getToken)
    ]);
}

export default root;
