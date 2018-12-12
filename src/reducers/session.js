import {
    LAST_USER_LOGGED_REQUESTED,
    LAST_USER_LOGGED_SUCCEEDED,
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUESTED,
    USER_LOGIN_SUCCEEDED,
    USER_FETCH_REFRESH_TOKEN_REQUESTED,
    USER_FETCH_REFRESH_TOKEN_SUCCEEDED,
    USER_FETCH_TOKEN_REQUESTED,
    USER_FETCH_TOKEN_SUCCEEDED
} from '../actions/session';

export default function (state = {loading: false, failed: false}, action) {
    switch (action.type) {
        case LAST_USER_LOGGED_REQUESTED:
            return {...state, lastUserLogged: null};
        case LAST_USER_LOGGED_SUCCEEDED:
            return {...state, lastUserLogged: action.lastUserLogged};
        case USER_LOGIN_REQUESTED:
            return {
                ...state, loading: true, logged: false, failed: false
            };
        case USER_LOGIN_SUCCEEDED:
            return {...state, loading: false, logged: true};
        case USER_LOGIN_FAILED:
            return {...state, loading: false, failed: true};
        case USER_FETCH_REFRESH_TOKEN_REQUESTED:
        case USER_FETCH_TOKEN_REQUESTED:
            return {...state, loading: true};
        case USER_FETCH_TOKEN_SUCCEEDED:
            return {...state, loading: false, token: action.token};
        case USER_FETCH_REFRESH_TOKEN_SUCCEEDED:
            return {...state, loading: false};
        default:
            return state;
    }
}
