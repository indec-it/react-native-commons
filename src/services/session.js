import {LoginService, TokenService} from '@indec/heimdall/native';
import decode from 'jwt-decode';
import {isEmpty} from 'lodash';

import StorageService from './storage';

const storage = new StorageService('session');

export default class SessionService {
    static async signIn({username, password}, authEndpoint, redirectUri) {
        const loginService = new LoginService(TokenService, authEndpoint);
        const token = await loginService.login(username, password, redirectUri);
        return !!token;
    }

    static async getToken() {
        return TokenService.getToken();
    }

    static async clearSession() {
        return TokenService.clear();
    }

    static async findOne() {
        return storage.findOne();
    }

    static async removeAll() {
        return storage.removeAll();
    }

    static async save(user) {
        return storage.save(user, u => u._id);
    }

    static async changeUser() {
        const currentUser = decode(await TokenService.getToken());
        await SessionService.removeAll();
        return SessionService.save(currentUser);
    }

    static getLastUserLogged() {
        return SessionService.findOne();
    }

    static fetchRefreshToken(authEndpoint, clientId, clientSecret) {
        const loginService = new LoginService(TokenService, authEndpoint);
        return loginService.fetchRefreshToken(clientId, clientSecret);
    }

    static refreshAccessToken(authEndpoint, clientId, clientSecret) {
        const loginService = new LoginService(TokenService, authEndpoint);
        return loginService.refreshAccessToken(clientId, clientSecret);
    }

    static validateUser(username, password, lastUserLogged) {
        if (isEmpty(username) || isEmpty(password)) {
            return {
                incompleteUserOrPassword: true
            };
        }
        if (lastUserLogged && lastUserLogged !== username) {
            return {
                incompleteUserOrPassword: false,
                confirmChangeUser: true
            };
        }
        return {
            isUserValid: true
        };
    }
}
