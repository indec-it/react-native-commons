import {call, put} from 'redux-saga/effects';
import {SurveysService} from '@indec/react-native-survey-commons/services';

import {handleError} from '../actions/common';
import {
    requestToken,
    notifyLoginFail,
    notifyLoginSucceeded,
    notifyTokenReceived,
    notifyLoggedWithDifferentUser
} from '../actions/session';
import {SessionService} from '../services';

export function* signIn({
    user, authEndpoint, redirectUri, userProfile, changeUser
}) {
    try {
        const {logged, differentUser} = yield call(
            SessionService.signIn,
            user,
            authEndpoint,
            redirectUri,
            userProfile,
            changeUser
        );
        if (logged) {
            if (!differentUser && !changeUser) {
                yield put(requestToken());
                yield put(notifyLoginSucceeded());
            }
            if (differentUser && !changeUser) {
                yield put(notifyLoggedWithDifferentUser());
            }
            if (changeUser) {
                yield call(SurveysService.removeAll);
                yield put(requestToken());
                yield put(notifyLoginSucceeded());
            }
        } else {
            yield put(notifyLoginFail());
        }
    } catch (err) {
        yield put(handleError(err));
    }
}

export function* getToken() {
    try {
        const token = yield call(SessionService.getToken);
        yield put(notifyTokenReceived(token));
    } catch (err) {
        yield put(handleError(err));
    }
}
