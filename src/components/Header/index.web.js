import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';

import {requestFetchToken} from '../../actions/session';
import stylePropType from '../../util/stylePropType';
import routePropType from '../../util/routePropType';
import SessionService from '../../services/session';
import Brand from './Brand';
import Routes from './Routes';

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

    async signOut(route) {
        if (route.closeSession) {
            await SessionService.clearSession();
            this.props.requestFetchToken();
        }
    }

    render() {
        const {
            routes, text, brandImage, style, rightImage, version
        } = this.props;
        return (
            <Fragment>
                <Brand {...{
                    text, version, rightImage, brandImage, style
                }}
                />
                {!isEmpty(routes) && <Routes onLogout={route => this.signOut(route)} routes={routes}/>}
            </Fragment>
        );
    }
}

export default connect(null,
    dispatch => ({
        requestFetchToken: () => dispatch(requestFetchToken())
    })
)(Header);
