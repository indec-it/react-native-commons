import React, {Children} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {some} from 'lodash';

import {childrenPropType, Row} from '../..';
import styles from './styles';

const isRow = children => some(Children.map(children, child => child.type === Row));

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
    children: childrenPropType.isRequired,
    style: PropTypes.shape({})
};

Grid.defaultProps = {
    style: {}
};

export default Grid;
