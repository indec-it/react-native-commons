export const USER_LOGIN_REQUESTED = 'USER_LOGIN_REQUESTED';
export const USER_LOGIN_SUCCEEDED = 'USER_LOGIN_SUCCEEDED';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const requestLogin = (user, authEndpoint, redirectUri, clientCredentials) => ({
    type: USER_LOGIN_REQUESTED,
    user,
    authEndpoint,
    redirectUri,
    clientCredentials
});

export const notifyLoginFail = () => ({
    type: USER_LOGIN_FAILED
});

export const notifyLoginSucceeded = () => ({
    type: USER_LOGIN_SUCCEEDED
});

export const USER_FETCH_TOKEN_REQUESTED = 'USER_FETCH_TOKEN_REQUESTED';
export const USER_FETCH_TOKEN_SUCCEEDED = 'USER_TOKEN_SUCCEEDED';

export const requestFetchToken = () => ({
    type: USER_FETCH_TOKEN_REQUESTED
});

export const notifyFetchTokenSucceeded = token => ({
    type: USER_FETCH_TOKEN_SUCCEEDED,
    token
});

export const USER_FETCH_REFRESH_TOKEN_REQUESTED = 'USER_FETCH_REFRESH_TOKEN_REQUESTED';
export const USER_FETCH_REFRESH_TOKEN_SUCCEEDED = 'USER_FETCH_REFRESH_TOKEN_SUCCEEDED';

export const requestFetchRefreshToken = (authEndpoint, clientId, clientSecret) => ({
    type: USER_FETCH_REFRESH_TOKEN_REQUESTED,
    authEndpoint,
    clientId,
    clientSecret
});

export const notifyFetchRefreshTokenSucceeded = () => ({
    type: USER_FETCH_REFRESH_TOKEN_SUCCEEDED
});

export const USER_REFRESH_ACCESS_TOKEN_REQUESTED = 'USER_REFRESH_ACCESS_TOKEN_REQUESTED';
export const USER_REFRESH_ACCESS_TOKEN_SUCCEEDED = 'USER_REFRESH_ACCESS_TOKEN_SUCCEEDED';

export const requestFetchRefreshAccessToken = (authEndpoint, clientId, clientSecret) => ({
    type: USER_REFRESH_ACCESS_TOKEN_REQUESTED,
    authEndpoint,
    clientId,
    clientSecret
});

export const notifyRefreshAccessToken = () => ({
    type: USER_REFRESH_ACCESS_TOKEN_SUCCEEDED
});

export const LAST_USER_LOGGED_REQUESTED = 'LAST_USER_LOGGED_REQUESTED';
export const LAST_USER_LOGGED_SUCCEEDED = 'LAST_USER_LOGGED_SUCCEEDED';

export const requestLastUserLogged = () => ({
    type: LAST_USER_LOGGED_REQUESTED
});

export const receiveLastUserLogged = lastUserLogged => ({
    type: LAST_USER_LOGGED_SUCCEEDED,
    lastUserLogged
});

export const CLEAR_USER_DATA_REQUESTED = 'CLEAR_USER_DATA_REQUESTED';
export const CLEAR_USER_DATA_SUCCEEDED = 'CLEAR_USER_DATA_SUCCEEDED';

export const requestClearUserData = () => ({
    type: CLEAR_USER_DATA_REQUESTED
});

export const notifyDataCleared = () => ({
    type: CLEAR_USER_DATA_SUCCEEDED
});

export const CHANGE_USER_REQUESTED = 'CHANGE_USER_REQUESTED';
export const CHANGE_USER_SUCCEEDED = 'CHANGE_USER_SUCCEEDED';

export const requestChangeUser = userProfile => ({
    type: CHANGE_USER_REQUESTED,
    userProfile
});

export const userChanged = () => ({
    type: CHANGE_USER_SUCCEEDED
});
