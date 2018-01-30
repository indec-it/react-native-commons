import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import childrenPropType from '../childrenPropType';

import styles from './styles';

const Row = ({children, style, size}) => (
    <View style={[{flex: size}, styles.row, style]}>
        {children}
    </View>
);

Row.propTypes = {
    children: childrenPropType.isRequired,
    style: PropTypes.shape({}),
    size: PropTypes.number
};

Row.defaultProps = {
    size: 1,
    style: {}
};

export default Row;
