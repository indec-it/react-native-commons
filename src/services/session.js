import {LoginService, TokenService} from '@indec/heimdall/native';
import {AUTH_ENDPOINT, REDIRECT_URI} from '../constants';

export default class SessionService {
    static async signIn({user: {username, password}}) {
        const loginService = new LoginService(TokenService, AUTH_ENDPOINT);
        const token = await loginService.login(username, password, REDIRECT_URI);
        return !(token instanceof Error);
    }

    static async getToken() {
        return TokenService.getToken();
    }

    static async clearSession() {
        return TokenService.clear();
    }
}
