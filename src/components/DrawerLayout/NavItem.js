import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Link} from 'react-router-native';

import {requestFetchToken} from '../../actions/session';
import getFontAwesome from '../../util/getFontAwesome';
import routePropType from '../../util/routePropType';
import SessionService from '../../services/session';

import styles from './styles';

class NavItem extends PureComponent {
    static propTypes = {
        requestFetchToken: PropTypes.func.isRequired,
        route: routePropType.isRequired
    };

    async signOut(closeSession) {
        if (closeSession) {
            await SessionService.clearSession();
            this.props.requestFetchToken();
        }
    }

    render() {
        const {route} = this.props;
        return (
            <View style={styles.navContainer}>
                <Icon {...getFontAwesome(route.icon)} containerStyle={styles.navIcon}/>
                <Link to={route.path} onPress={() => this.signOut(route.closeSession)}>
                    <Text style={styles.navText}>
                        {route.text}
                    </Text>
                </Link>
            </View>
        );
    }
}

export default NavItem;
