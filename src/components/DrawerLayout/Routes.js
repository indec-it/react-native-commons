import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import routePropType from '../../util/routePropType';
import stylePropType from '../../util/stylePropType';

import NavItem from './NavItem';
import styles from './styles';

const Routes = ({routes, style}) => (
    <View style={[styles.routesContainer, style.routesContainer]}>
        {routes.map(route => (
            <NavItem route={route} key={route.id}/>
        ))}
    </View>
);

Routes.propTypes = {
    routes: PropTypes.arrayOf(routePropType).isRequired,
    style: stylePropType
};

Routes.defaultProps = {
    style: {}
};

export default Routes;
