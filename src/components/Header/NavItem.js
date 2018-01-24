import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {Link} from 'react-router-native';

import {getFontAwesome, Row, Col} from '../..';
import styles from './styles';

const NavItem = ({route}) => (
    <Col style={styles.navItem}>
        <Row style={styles.navItem}>
            <Icon
                {...getFontAwesome(route.icon)}
                containerStyle={styles.navIcon}
            />
            <Link to={route.path}>
                <Text style={styles.navText}>
                    {route.text}
                </Text>
            </Link>
        </Row>
    </Col>
);

NavItem.propTypes = {
    route: PropTypes.shape({}).isRequired
};

export default NavItem;
