/* global window */
import {
    isEmpty, isFunction, head, last
} from 'lodash';

const triggerPressHandler = button => {
    const {onPress} = button;
    if (isFunction(onPress)) {
        onPress();
    }
};

class Alert {
    static alert(title, text, buttons) {
        if (buttons.length > 2) {
            throw new Error('Alert-web: dismiss button is not supported.');
        }
        if (buttons.length === 2) {
            if (window.confirm(`${title} - ${text}`)) {
                triggerPressHandler(last(buttons));
            } else {
                triggerPressHandler(head(buttons));
            }
            return;
        }
        window.alert(`${title} - ${text}`);
        if (!isEmpty(buttons)) {
            triggerPressHandler(head(buttons));
        }
    }
}

export default Alert;
