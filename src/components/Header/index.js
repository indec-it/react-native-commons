import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Image, Text, View} from 'react-native';

import stylePropType from '../../util/stylePropType';

import NavItem from './NavItem';
import styles from './styles';

const brandImageDefault = require('../../images/brand.png');

const Header = ({
    routes, text, brandImage, style, token, rightImage
}) => (
    <Fragment>
        <View style={[styles.brandContainer, style.brandContainer]}>
            <View>
                <Image source={brandImage} style={styles.brandImage}/>
            </View>
            {text &&
            <View>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>}
            {rightImage &&
            <View>
                <Image source={rightImage} style={styles.rightImageStyle}/>
            </View>}
        </View>
        {token &&
        <View style={styles.navContainer}>
            {routes && routes.map(route => (
                <NavItem key={route.key} route={route}/>
            ))}
        </View>}
    </Fragment>
);

Header.propTypes = {
    brandImage: PropTypes.oneOf([
        PropTypes.number,
        PropTypes.string
    ]),
    rightImage: PropTypes.oneOf([
        PropTypes.number,
        PropTypes.string
    ]),
    style: stylePropType,
    text: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number,
        icon: PropTypes.string,
        text: PropTypes.string,
        path: PropTypes.string
    })).isRequired,
    token: PropTypes.string
};

Header.defaultProps = {
    brandImage: brandImageDefault,
    style: {},
    token: null,
    text: null,
    rightImage: null
};

export default connect(
    state => ({token: state.session.token})
)(Header);
