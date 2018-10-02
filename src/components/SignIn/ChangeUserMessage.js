import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './styles';

const ChangeUserMessage = ({changeUserText}) => (
    <View style={styles.changeUserText}>
        {changeUserText ? (
            <Text>
                {changeUserText}
            </Text>
        ) : (
            <Text>
                Está ingresando con un usuario diferente al último que inició sesión.
                {'\n'}
                De continuar con el login se perderán todas los datos que no hayan sido sincronizados.
                {'\n'}
                Si desea continuar toque el siguiente botón:
            </Text>
        )}
    </View>
);

ChangeUserMessage.propTypes = {
    changeUserText: PropTypes.string
};

ChangeUserMessage.defaultProps = {
    changeUserText: null
};

export default ChangeUserMessage;
