import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUESTED,
    USER_LOGIN_SUCCEEDED,
    USER_TOKEN_REQUESTED,
    USER_TOKEN_SUCCEEDED
} from '../actions/session';

export default function (state = {loading: false, failed: false}, action) {
    switch (action.type) {
        case USER_LOGIN_REQUESTED:
            return {
                ...state, loading: true, logged: false, failed: false
            };
        case USER_LOGIN_SUCCEEDED:
            return {...state, loading: false, logged: true};
        case USER_LOGIN_FAILED:
            return {...state, loading: false, failed: true};
        case USER_TOKEN_REQUESTED:
            return {...state, loading: true};
        case USER_TOKEN_SUCCEEDED:
            return {...state, loading: false, token: action.token};
        default:
            return state;
    }
}