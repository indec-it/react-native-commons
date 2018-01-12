import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Link} from 'react-router-native';

import {getFontAwesome, Row} from '../../index';
import styles from './styles';

const brandImageDefault = require('../../images/brand.png');

const Header = ({routes, text, brandImage}) => (
    <Fragment>
        <View style={styles.brandContainer}>
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
                <Row key={route.key}>
                    <Icon {...getFontAwesome(route.icon, styles.navIcon)}/>
                    <Link to={route.path}>
                        <Text style={styles.navText}>
                            {route.text}
                        </Text>
                    </Link>
                </Row>
            ))}
        </View>
    </Fragment>
);

Header.propTypes = {
    brandImage: PropTypes.string,
    text: PropTypes.string.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number,
        icon: PropTypes.string,
        text: PropTypes.string,
        path: PropTypes.string
    })).isRequired
};

Header.defaultProps = {
    brandImage: brandImageDefault
};

export default Header;
