import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native-elements';

import styles from './styles';

const TextStrong = ({style, children, ...elementProps}) => (
    <Text style={[style, styles.base]} {...elementProps}>
        {children}
    </Text>
);

TextStrong.propTypes = {
    style: PropTypes.shape({}),
    children: PropTypes.string.isRequired
};

TextStrong.defaultProps = {
    style: {}
};

export default TextStrong;
