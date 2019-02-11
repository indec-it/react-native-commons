import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './styles';

const ChangeUserMessage = ({text}) => (
    <View style={styles.changeUserText}>
        {text ? (
            <Text>
                {text}
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
    text: PropTypes.string
};

ChangeUserMessage.defaultProps = {
    text: null
};

export default ChangeUserMessage;
