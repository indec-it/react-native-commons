import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import stylePropType from '../../util/stylePropType';

import styles from './styles';

const User = ({user, style}) => (
    <View style={[styles.userContainer, style.userContainer]}>
        <Text style={styles.userText}>
            {`${user.name}, ${user.surname} (${user.username})`}
        </Text>
    </View>
);

User.propTypes = {
    user: PropTypes.shape({}),
    style: stylePropType
};

User.defaultProps = {
    user: {},
    style: {}
};

export default User;
