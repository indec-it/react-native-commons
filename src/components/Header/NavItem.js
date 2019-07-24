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

const NavItem = ({
    onDisable, onLogout, route, disabled
}) => (
    <Col style={styles.navItem}>
        <Row style={styles.navItem}>
            <Icon
                {...getFontAwesome(route.icon)}
                containerStyle={styles.navIcon}
            />
            {disabled ? (
                <Text style={styles.navText} onPress={() => onDisable(route)}>
                    {route.text}
                </Text>
            ) : (
                <Link to={route.path} onPress={() => onLogout(route)}>
                    <Text style={styles.navText}>
                        {route.text}
                    </Text>
                </Link>
            )}
        </Row>
    </Col>
);

NavItem.propTypes = {
    onDisable: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    route: routePropType.isRequired,
    disabled: PropTypes.bool
};

NavItem.defaultProps = {
    disabled: false
};

export default NavItem;
