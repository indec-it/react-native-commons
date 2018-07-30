import {LoginService, TokenService} from '@indec/heimdall/native';
import {decode} from 'jsonwebtoken';

import StorageService from './storage';

const storage = new StorageService('session');

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

    static async getLastUserLogged() {
        const lastUserLogged = await SessionService.findOne();
        return lastUserLogged;
    }
}
