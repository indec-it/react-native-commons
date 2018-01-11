import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './styles';

const SectionTitle = ({children}) => (
    <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitleText}>
            {children}
        </Text>
    </View>
);

SectionTitle.propTypes = {
    children: PropTypes.string.isRequired
};

export default SectionTitle;
