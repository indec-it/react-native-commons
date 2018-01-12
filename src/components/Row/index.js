import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './styles';

const Row = ({children, style, size}) => (
    <View style={[{flex: size || 1}, styles.row, style]}>
        {children}
    </View>
);

Row.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.instanceOf(Component),
        PropTypes.func,
        PropTypes.array
    ]).isRequired,
    style: PropTypes.shape({}),
    size: PropTypes.number
};

Row.defaultProps = {
    size: null,
    style: {}
};

export default Row;
