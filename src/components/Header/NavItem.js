import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {Link} from 'react-router-native';

import {requestToken} from '../../actions/session';
import Col from '../Col';
import Row from '../Row';
import getFontAwesome from '../../util/getFontAwesome';
import routePropType from '../../util/routePropType';
import SessionService from '../../services/session';
import styles from './styles';

class NavItem extends Component {
    static propTypes = {
        requestToken: PropTypes.func.isRequired,
        route: routePropType.isRequired
    };

    async signOut(closeSession) {
        if (closeSession) {
            await SessionService.clearSession();
            this.props.requestToken();
        }
    }

    render() {
        const {route} = this.props;
        return (
            <Col style={styles.navItem}>
                <Row style={styles.navItem}>
                    <Icon
                        {...getFontAwesome(route.icon)}
                        containerStyle={styles.navIcon}
                        size={12}
                        color="#fff"
                    />
                    <Link to={route.path} onPress={() => this.signOut(route.closeSession)}>
                        <Text style={styles.navText}>
                            {route.text}
                        </Text>
                    </Link>
                </Row>
            </Col>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        requestToken: () => dispatch(requestToken())
    })
)(NavItem);
