import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import childrenPropType from '../../util/childrenPropType';
import composeStyles from '../../util/composeStyles';
import stylePropType from '../../util/stylePropType';

import styles from './styles';

const Row = ({children, style, size}) => (
    <View style={composeStyles([{flex: size}, styles.row], style)}>
        {children}
    </View>
);

Row.propTypes = {
    children: childrenPropType,
    style: stylePropType,
    size: PropTypes.number
};

Row.defaultProps = {
    children: undefined,
    size: 1,
    style: null
};

export default Row;
