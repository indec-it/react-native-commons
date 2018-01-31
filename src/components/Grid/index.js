import React, {Children} from 'react';
import {View} from 'react-native';
import {some} from 'lodash';

import Row from '../Row';
import childrenPropType from '../../util/childrenPropType';
import stylePropType from '../../util/stylePropType';

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
    style: stylePropType
};

Grid.defaultProps = {
    style: {}
};

export default Grid;
