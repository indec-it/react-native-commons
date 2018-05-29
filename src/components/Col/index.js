import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import childrenPropType from '../../util/childrenPropType';
import composeStyles from '../../util/composeStyles';
import stylePropType from '../../util/stylePropType';

import styles from './styles';

const Col = ({children, style, size}) => (
    <View style={composeStyles([{flex: size}, styles.col], style)}>
        {children}
    </View>
);

Col.propTypes = {
    children: childrenPropType,
    style: stylePropType,
    size: PropTypes.number
};

Col.defaultProps = {
    children: undefined,
    size: 1,
    style: null
};

export default Col;
