import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import styles from './styles';

const Title = ({children}) => (
    <Text style={styles.title}>
        {children}
    </Text>
);

Title.propTypes = {
    children: PropTypes.string.isRequired
};

export default Title;
