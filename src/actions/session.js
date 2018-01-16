export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGIN_REQUESTED = 'USER_LOGIN_REQUESTED';
export const USER_LOGIN_SUCCEEDED = 'USER_LOGIN_SUCCEEDED';

export function requestLogin(user) {
    return {type: USER_LOGIN_REQUESTED, user};
}

export function notifyLoginFail() {
    return {type: USER_LOGIN_FAIL};
}

export function notifyLoginSucceeded() {
    return {type: USER_LOGIN_SUCCEEDED};
}

export const USER_TOKEN_REQUESTED = 'USER_TOKEN_REQUESTED';
export const USER_TOKEN_SUCCEEDED = 'USER_TOKEN_SUCCEEDED';

export function requestToken() {
    return {type: USER_TOKEN_REQUESTED};
}

export function notifyTokenReceived(token) {
    return {type: USER_TOKEN_SUCCEEDED, token};
}

