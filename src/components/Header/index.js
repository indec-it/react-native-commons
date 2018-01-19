import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';

import NavItem from './NavItem';
import styles from './styles';

const brandImageDefault = require('../../images/brand.png');

const Header = ({
    routes, text, brandImage, style
}) => (
    <Fragment>
        <View style={[styles.brandContainer, style.brandContainer]}>
            <View>
                <Image source={brandImage} style={styles.brandImage}/>
            </View>
            <View>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
        </View>
        <View style={styles.navContainer}>
            {routes && routes.map(route => (
                <NavItem key={route.key} route={route}/>
            ))}
        </View>
    </Fragment>
);

Header.propTypes = {
    style: PropTypes.shape({}),
    brandImage: PropTypes.number,
    text: PropTypes.string.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number,
        icon: PropTypes.string,
        text: PropTypes.string,
        path: PropTypes.string
    })).isRequired
};

Header.defaultProps = {
    brandImage: brandImageDefault,
    style: {}
};

export default Header;
