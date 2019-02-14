import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import styles from './styles';

const ErrorLoginMessages = ({failed, incompleteUserOrPassword}) => (
    <View>
        {failed && !incompleteUserOrPassword && (
            <Text style={styles.errorText}>
                Usuario y/o contraseña inválidos
            </Text>
        )}
        {incompleteUserOrPassword && (
            <Text style={styles.errorText}>
                Debe completar el usuario y la contraseña
            </Text>
        )}
    </View>
);

ErrorLoginMessages.propTypes = {
    failed: PropTypes.bool,
    incompleteUserOrPassword: PropTypes.bool
};

ErrorLoginMessages.defaultProps = {
    failed: false,
    incompleteUserOrPassword: false
};

export default ErrorLoginMessages;
