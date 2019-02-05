import React from 'react';
import PropTypes from 'prop-types';
import {Modal, View, Text} from 'react-native';

import Button from '../Button';
import styles from './styles';

const ConfirmModal = ({onAccept, onDismiss, text}) => (
    <Modal animationType="fade" visible>
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                <Text style={{fontSize: 20}}>
                    {text}
                </Text>
            </View>
            <View style={styles.footer}>
                <Button
                    onPress={onDismiss}
                    title="Cancelar"
                    danger
                />
                <Button
                    onPress={onAccept}
                    title="Aceptar"
                    primary
                />
            </View>
        </View>
    </Modal>
);

ConfirmModal.propTypes = {
    onAccept: PropTypes.func.isRequired,
    onDismiss: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default ConfirmModal;
