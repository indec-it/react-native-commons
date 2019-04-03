import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import stylePropType from '../../util/stylePropType';

import styles from './styles';

const Version = ({version, style}) => (
    <View style={[styles.versionContainer, style.versionContainer]}>
        <Text style={styles.versionText}>
            {version}
        </Text>
    </View>
);

Version.propTypes = {
    version: PropTypes.string,
    style: stylePropType
};

Version.defaultProps = {
    version: null,
    style: {}
};

export default Version;
