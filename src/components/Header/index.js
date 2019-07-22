import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {find, get, isEmpty} from 'lodash';

import {requestFetchToken} from '../../actions/session';
import {CONFIRM_LOGOUT_MESSAGE, modalTypes} from '../../constants';
import SessionService from '../../services/session';
import stylePropType from '../../util/stylePropType';
import routePropType from '../../util/routePropType';
import ConfirmModal from '../ConfirmModal';
import AlertModal from '../AlertModal';
import Brand from './Brand';
import Routes from './Routes';

const getLogoutMessage = routes => get(
    find(routes, route => route.logoutMessage), 'logoutMessage'
) || CONFIRM_LOGOUT_MESSAGE;

const brandImageDefault = require('../../images/brand.png');

class Header extends PureComponent {
    static propTypes = {
        brandImage: PropTypes.string,
        rightImage: PropTypes.string,
        style: stylePropType,
        text: PropTypes.string,
        routes: PropTypes.arrayOf(routePropType),
        version: PropTypes.string,
        requestFetchToken: PropTypes.func.isRequired,
        running: PropTypes.bool
    };

    static defaultProps = {
        brandImage: brandImageDefault,
        style: {},
        routes: [],
        text: null,
        rightImage: null,
        version: null,
        running: false
    };

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalType: null
        };
    }

    handleShowModal(modalType) {
        this.setState(() => ({showModal: true, modalType}));
    }

    handleShowDisableModal(modalType) {
        this.handleShowModal(modalType);
    }

    handleShowLogoutModal(modalType, route) {
        if (route.closeSession) {
            this.handleShowModal(modalType);
        }
    }

    async signOut() {
        this.setState(() => ({showModal: false}));
        await SessionService.clearSession();
        this.props.requestFetchToken();
    }

    handleCloseModal() {
        this.setState(() => ({showModal: false}));
    }

    render() {
        const {
            routes, text, brandImage, style, rightImage, version, running
        } = this.props;
        const {showModal, modalType} = this.state;
        return (
            <Fragment>
                <Brand
                    {...{
                        text, version, rightImage, brandImage, style
                    }}
                />
                {!isEmpty(routes) && (
                    <Routes
                        onDisable={() => this.handleShowDisableModal(modalTypes.SYNC_ALERT)}
                        onLogout={route => this.handleShowLogoutModal(route, modalTypes.CLOSE_SESSION)}
                        routes={routes}
                        disabled={running}
                    />
                )}
                {showModal && modalType === modalTypes.SYNC_ALERT && (
                    <AlertModal
                        onDismiss={() => this.handleCloseModal()}
                        text="Hasta que no termine este proceso, no puede continuar."
                        title="Sincronización"
                    />
                )}
                {showModal && modalType === modalTypes.CLOSE_SESSION && (
                    <ConfirmModal
                        onDismiss={() => this.handleCloseModal()}
                        onAccept={() => this.signOut()}
                        text={getLogoutMessage(routes)}
                        title="Cerrar Sesión"
                    />
                )}
            </Fragment>
        );
    }
}

export default connect(
    state => ({
        running: state.sync.running
    }),
    dispatch => ({
        requestFetchToken: () => dispatch(requestFetchToken())
    })
)(Header);
