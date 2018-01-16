import {REHYDRATE} from 'redux-persist/src/constants';

import type {Action} from '../actions/types';
import {ERROR_OCCURRED} from '../actions/common';

function common(state = {}, action: Action) {
    switch (action.type) {
        case ERROR_OCCURRED:
            return {...state, err: action.err.toString()};
        case REHYDRATE:
            return {...state, err: null};
        default:
            return state;
    }
}

export default common;
