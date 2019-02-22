import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {find, get, isEmpty} from 'lodash';

import {requestFetchToken} from '../../actions/session';
import {CONFIRM_LOGOUT_MESSAGE} from '../../constants';
import SessionService from '../../services/session';
import stylePropType from '../../util/stylePropType';
import routePropType from '../../util/routePropType';
import ConfirmModal from '../ConfirmModal';
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
        requestFetchToken: PropTypes.func.isRequired
    };

    static defaultProps = {
        brandImage: brandImageDefault,
        style: {},
        routes: [],
        text: null,
        rightImage: null,
        version: null
    };

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    handleShowModal(route) {
        if (route.closeSession) {
            this.setState(() => ({showModal: true}));
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
            routes, text, brandImage, style, rightImage, version
        } = this.props;
        const {showModal} = this.state;
        return (
            <Fragment>
                <Brand {...{
                    text, version, rightImage, brandImage, style
                }}
                />
                {!isEmpty(routes) && <Routes onLogout={route => this.handleShowModal(route)} routes={routes}/>}
                {showModal && (
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

export default connect(null,
    dispatch => ({
        requestFetchToken: () => dispatch(requestFetchToken())
    })
)(Header);
