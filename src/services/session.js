import {LoginService, TokenService} from '@indec/heimdall/native';

export default class SessionService {
    static async signIn({username, password}, authEndpoint, redirectUri) {
        const loginService = new LoginService(TokenService, authEndpoint);
        const token = await loginService.login(username, password, redirectUri);
        return !(token instanceof Error);
    }

    static async getToken() {
        return TokenService.getToken();
    }

    static async clearSession() {
        return TokenService.clear();
    }
}
