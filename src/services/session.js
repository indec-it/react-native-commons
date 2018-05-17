import {LoginService, TokenService, http} from '@indec/heimdall/native';

import StorageService from './storage';

const storage = new StorageService('session');

export default class SessionService {
    static async signIn({username, password}, authEndpoint, redirectUri, userProfile, changeUser) {
        const loginService = new LoginService(TokenService, authEndpoint);
        const token = await loginService.login(username, password, redirectUri);
        const logged = !(token instanceof Error);
        const currentUser = await http.get(userProfile);
        if (!changeUser) {
            const differentUser = await SessionService.verifyDifferentUser(logged, currentUser);
            return {logged, differentUser};
        }
        await SessionService.removePreviousUserAndSave(currentUser);
        return {logged};
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

    static async verifyDifferentUser(logged, currentUser) {
        const lastUserLogged = await SessionService.findOne();
        const differentUser = logged && lastUserLogged && currentUser.username !== lastUserLogged.username;
        if (!lastUserLogged) {
            await SessionService.save(currentUser);
        }
        return differentUser;
    }

    static async removePreviousUserAndSave(user) {
        await SessionService.removeAll();
        return SessionService.save(user);
    }
}
