import {
    CLEAN_USER_VALIDATIONS,
    LAST_USER_LOGGED_REQUESTED,
    LAST_USER_LOGGED_SUCCEEDED,
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUESTED,
    USER_LOGIN_SUCCEEDED,
    USER_FETCH_REFRESH_TOKEN_REQUESTED,
    USER_FETCH_REFRESH_TOKEN_SUCCEEDED,
    USER_FETCH_TOKEN_REQUESTED,
    USER_FETCH_TOKEN_SUCCEEDED,
    USER_VALIDATE
} from '../actions/session';
import {SessionService} from '../services';

const initialState = {
    loading: false, failed: false, incompleteUserOrPassword: false, confirmChangeUser: false, isUserValid: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CLEAN_USER_VALIDATIONS:
            return {...state, ...initialState};
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
            return {
                ...state, loading: false, failed: true, confirmChangeUser: false, isUserValid: false
            };
        case USER_FETCH_REFRESH_TOKEN_REQUESTED:
        case USER_FETCH_TOKEN_REQUESTED:
            return {...state, loading: true};
        case USER_FETCH_TOKEN_SUCCEEDED:
            return {...state, loading: false, token: action.token};
        case USER_FETCH_REFRESH_TOKEN_SUCCEEDED:
            return {...state, loading: false};
        case USER_VALIDATE:
            return {...state, ...SessionService.validateUser(action.username, action.password, action.lastUserLogged)};
        default:
            return state;
    }
}
