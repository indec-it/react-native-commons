import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native-elements';

import styles from './styles';

const TextError = ({style, children, ...elementProps}) => (
    <Text style={[...style, styles.base]} {...elementProps}>
        {children}
    </Text>
);

TextError.propTypes = {
    style: PropTypes.shape({}),
    children: PropTypes.string.isRequired
};

TextError.defaultProps = {
    style: {}
};

export default TextError;
