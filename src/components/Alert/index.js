import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import stylePropType from '../../util/stylePropType';

import styles from './styles';

const getStyle = (template, success, danger, style) => {
    let computedStyle;
    if (success) {
        computedStyle = template.alertSuccess;
    } else if (danger) {
        computedStyle = template.alertDanger;
    } else {
        computedStyle = template.alertDefault;
    }
    return [template.alert, computedStyle, style];
};

const Alert = ({
    success, danger, alertStyle, style, children, ...elementProps
}) => (
    <View style={getStyle(styles.alert, success, danger, alertStyle)}>
        <Text style={getStyle(styles.alertText, success, danger, style)} {...elementProps}>
            {children}
        </Text>
    </View>
);

Alert.propTypes = {
    alertStyle: stylePropType,
    style: stylePropType,
    success: PropTypes.bool,
    danger: PropTypes.bool,
    children: PropTypes.string.isRequired
};

Alert.defaultProps = {
    alertStyle: {},
    style: {},
    success: false,
    danger: false
};

export default Alert;
