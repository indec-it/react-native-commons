import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import styles from './styles';

const ErrorLoginMessages = ({failed, showCompleteUserAndPassword}) => (
    <View>
        {failed && !showCompleteUserAndPassword && (
            <Text style={styles.errorText}>
                Usuario y/o contraseña inválidos
            </Text>
        )}
        {showCompleteUserAndPassword && (
            <Text style={styles.errorText}>
                Debe completar el usuario y la contraseña
            </Text>
        )}
    </View>
);

ErrorLoginMessages.propTypes = {
    failed: PropTypes.bool,
    showCompleteUserAndPassword: PropTypes.bool
};

ErrorLoginMessages.defaultProps = {
    failed: false,
    showCompleteUserAndPassword: false
};

export default ErrorLoginMessages;
