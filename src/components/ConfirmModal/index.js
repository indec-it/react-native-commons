import React from 'react';
import PropTypes from 'prop-types';
import {
    Modal, Text, TouchableHighlight, View
} from 'react-native';

import styles from './styles';

const ConfirmModal = ({
    onAccept, onDismiss, text, title
}) => (
    <Modal animationType="fade" visible transparent>
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>
                        {text}
                    </Text>
                </View>
                <View style={styles.footer}>
                    <TouchableHighlight onPress={onDismiss} style={styles.dismissButton} underlayColor="#DDDDDD">
                        <Text style={styles.dismissButtonText}>
                            Cancelar
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={onAccept} style={styles.acceptButton} underlayColor="#DDDDDD">
                        <Text style={styles.acceptButtonText}>
                            Aceptar
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    </Modal>
);

ConfirmModal.propTypes = {
    onAccept: PropTypes.func.isRequired,
    onDismiss: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default ConfirmModal;
