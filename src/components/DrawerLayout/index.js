import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {DrawerLayoutAndroid} from 'react-native';

import {requestFetchCurrentUser} from '../../actions/session';
import stylePropType from '../../util/stylePropType';
import routePropType from '../../util/routePropType';

import Drawer from './Drawer';

const brandImageDefault = require('../../images/brand.png');

class DrawerLayout extends PureComponent {
    static propTypes = {
        requestFetchCurrentUser: PropTypes.func.isRequired,
        brandImage: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        rightImage: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        style: stylePropType,
        text: PropTypes.string,
        version: PropTypes.string,
        routes: PropTypes.arrayOf(routePropType).isRequired,
        token: PropTypes.string,
        user: PropTypes.shape({}),
        children: PropTypes.shape({}),
        drawerRef: PropTypes.func
    };

    static defaultProps = {
        brandImage: brandImageDefault,
        style: {},
        user: {},
        token: null,
        text: null,
        rightImage: null,
        version: null,
        children: null,
        drawerRef: null
    };

    componentDidMount() {
        this.props.requestFetchCurrentUser();
    }

    render() {
        const {children, drawerRef} = this.props;
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <Drawer {...this.props}/>}
                ref={ref => drawerRef(ref)}
                {...this.props}
            >
                {children}
            </DrawerLayoutAndroid>
        );
    }
}

export default connect(
    state => ({
        token: state.session.token,
        user: state.session.user
    }),
    dispatch => ({
        requestFetchCurrentUser: () => dispatch(requestFetchCurrentUser())
    })
)(DrawerLayout);
