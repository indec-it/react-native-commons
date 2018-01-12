import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './styles';

const Col = ({children, style, size}) => (
    <View style={[{flex: size}, styles.col, style]}>
        {children}
    </View>
);

Col.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.instanceOf(Component),
        PropTypes.func,
        PropTypes.array
    ]).isRequired,
    style: PropTypes.shape({}),
    size: PropTypes.number
};

Col.defaultProps = {
    size: 1,
    style: {}
};

export default Col;
