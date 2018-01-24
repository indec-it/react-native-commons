import {ERROR_OCCURRED} from '../actions/common';

function common(state = {}, action) {
    switch (action.type) {
        case ERROR_OCCURRED:
            return {...state, err: action.err.toString()};
        default:
            return state;
    }
}

export default common;
