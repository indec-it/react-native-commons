import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import childrenPropType from '../../util/childrenPropType';
import stylePropType from '../../util/stylePropType';

import styles from './styles';

const Col = ({children, style, size}) => (
    <View style={[{flex: size}, styles.col, style]}>
        {children}
    </View>
);

Col.propTypes = {
    children: childrenPropType.isRequired,
    style: stylePropType,
    size: PropTypes.number
};

Col.defaultProps = {
    size: 1,
    style: {}
};

export default Col;
