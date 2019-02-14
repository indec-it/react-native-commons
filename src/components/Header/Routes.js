import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import routePropType from '../../util/routePropType';
import NavItem from './NavItem';
import styles from './styles';

const Routes = ({onLogout, routes}) => (
    <View style={styles.navContainer}>
        {routes.map(route => (
            <NavItem
                key={route.key}
                {...{route, onLogout}}
            />
        ))}
    </View>
);

Routes.propTypes = {
    onLogout: PropTypes.func.isRequired,
    routes: PropTypes.arrayOf(routePropType)
};

Routes.defaultProps = {
    routes: []
};

export default Routes;
