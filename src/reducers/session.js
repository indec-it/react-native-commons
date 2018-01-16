import {REHYDRATE} from 'redux-persist/src/constants';

import type {Action} from '../actions/types';
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUESTED,
    USER_LOGIN_SUCCEEDED,
    USER_TOKEN_REQUESTED,
    USER_TOKEN_SUCCEEDED,
    REQUEST_SIGN_OUT,
    REQUEST_SIGN_OUT_SUCCEEDED
} from '../actions/session';

export default function (state = {loading: false}, action: Action) {
    switch (action.type) {
        case USER_LOGIN_FAIL:
            return {...state, loading: false, logged: false};
        case USER_LOGIN_REQUESTED:
            return {...state, loading: true};
        case USER_LOGIN_SUCCEEDED:
            return {...state, loading: false, logged: true};
        case USER_TOKEN_REQUESTED:
            return {...state, loading: true};
        case USER_TOKEN_SUCCEEDED:
            return {...state, loading: false, token: action.token};
        case REQUEST_SIGN_OUT:
            return {...state, loading: true};
        case REQUEST_SIGN_OUT_SUCCEEDED:
            return {...state, loading: false, logged: false, token: null};
        case REHYDRATE:
            return {...state, loading: false, logged: false};
        default:
            return state;
    }
}
