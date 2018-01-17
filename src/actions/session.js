export const USER_LOGIN_REQUESTED = 'USER_LOGIN_REQUESTED';
export const USER_LOGIN_SUCCEEDED = 'USER_LOGIN_SUCCEEDED';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const requestLogin = (user, authEndpoint, redirectUri) => ({
    type: USER_LOGIN_REQUESTED,
    user,
    authEndpoint,
    redirectUri
});

export const notifyLoginFail = () => ({
    type: USER_LOGIN_FAILED
});

export const notifyLoginSucceeded = () => ({
    type: USER_LOGIN_SUCCEEDED
});

export const USER_TOKEN_REQUESTED = 'USER_TOKEN_REQUESTED';
export const USER_TOKEN_SUCCEEDED = 'USER_TOKEN_SUCCEEDED';

export const requestToken = () => ({
    type: USER_TOKEN_REQUESTED
});

export const notifyTokenReceived = token => ({
    type: USER_TOKEN_SUCCEEDED,
    token
});
