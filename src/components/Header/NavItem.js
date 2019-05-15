import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {Link} from 'react-router-native';

import getFontAwesome from '../../util/getFontAwesome';
import routePropType from '../../util/routePropType';
import Col from '../Col';
import Row from '../Row';
import styles from './styles';

const NavItem = ({onLogout, route}) => (
    <Col style={styles.navItem}>
        <Row style={styles.navItem}>
            <Icon
                {...getFontAwesome(route.icon)}
                containerStyle={styles.navIcon}
            />
            <Link to={route.path} onPress={() => onLogout(route)}>
                <Text style={styles.navText}>
                    {route.text}
                </Text>
            </Link>
        </Row>
    </Col>
);

NavItem.propTypes = {
    onLogout: PropTypes.func.isRequired,
    route: routePropType.isRequired
};

export default NavItem;
