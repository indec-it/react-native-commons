import React from 'react';
import PropTypes from 'prop-types';
import {find, get} from 'lodash';

import AlertModal from '../AlertModal';
import ConfirmModal from '../ConfirmModal';
import routePropType from '../../util/routePropType';
import {CONFIRM_LOGOUT_MESSAGE, modalTypes} from '../../constants';

const getLogoutMessage = routes => get(
    find(routes, route => route.logoutMessage), 'logoutMessage'
) || CONFIRM_LOGOUT_MESSAGE;

const Modals = ({
    modalType, onAccept, onDismiss, routes
}) => {
    switch (modalType) {
        case modalTypes.SYNC_ALERT:
            return (
                <AlertModal
                    onDismiss={onDismiss}
                    text="Hasta que no termine este proceso, no puede continuar."
                    title="Sincronización"
                />
            );
        case modalTypes.CLOSE_SESSION:
            return (
                <ConfirmModal
                    onDismiss={onDismiss}
                    onAccept={onAccept}
                    text={getLogoutMessage(routes)}
                    title="Cerrar Sesión"
                />
            );
        default:
            return null;
    }
};

Modals.propTypes = {
    modalType: PropTypes.string.isRequired,
    onAccept: PropTypes.func.isRequired,
    onDismiss: PropTypes.func.isRequired,
    routes: PropTypes.arrayOf(routePropType).isRequired
};

export default Modals;
