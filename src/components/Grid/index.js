import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {some} from 'lodash';

import Row from '../Row';
import styles from './styles';

const isRow = children => some(children, child => child.type === Row);

const Grid = ({children, style}) => (
    <View
        style={[
            isRow(children) ? styles.col : styles.row,
            style
        ]}
    >
        {children}
    </View>
);

Grid.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.instanceOf(Component),
        PropTypes.func,
        PropTypes.array
    ]).isRequired,
    style: PropTypes.shape({})
};

Grid.defaultProps = {
    style: {}
};

export default Grid;
