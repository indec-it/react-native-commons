import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import routePropType from '../../util/routePropType';
import NavItem from './NavItem';
import styles from './styles';

const Routes = ({
    onDisable, onLogout, routes, disabled
}) => (
    <View style={styles.navContainer}>
        {routes.map(route => (
            <NavItem
                key={route.key}
                {...{route, onDisable, onLogout}}
                disabled={disabled}
            />
        ))}
    </View>
);

Routes.propTypes = {
    onDisable: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    routes: PropTypes.arrayOf(routePropType),
    disabled: PropTypes.bool
};

Routes.defaultProps = {
    routes: [],
    disabled: false
};

export default Routes;
