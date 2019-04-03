import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Divider} from 'react-native-elements';
import {isEmpty} from 'lodash';

import stylePropType from '../../util/stylePropType';
import routePropType from '../../util/routePropType';

import DrawerImage from './DrawerImage';
import Routes from './Routes';
import User from './User';
import Version from './Version';
import styles from './styles';

const brandImageDefault = require('../../images/brand.png');

const Drawer = ({
    routes, text, brandImage, style, rightImage, version, user
}) => (
    <Fragment>
        <DrawerImage {...{
            rightImage, text, style, brandImage
        }}
        />
        {user && <User {...{user, style}}/>}
        <Divider style={styles.dividerStyle}/>
        {!isEmpty(routes) && <Routes {...{routes, style}}/>}
        <Divider style={styles.dividerStyle}/>
        {version && (
            <Version {...{version, style}}/>
        )}
    </Fragment>
);

Drawer.propTypes = {
    brandImage: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    rightImage: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    style: stylePropType,
    text: PropTypes.string,
    version: PropTypes.string,
    routes: PropTypes.arrayOf(routePropType),
    user: PropTypes.shape({})
};

Drawer.defaultProps = {
    brandImage: brandImageDefault,
    style: {},
    text: null,
    rightImage: null,
    version: null,
    user: null,
    routes: []
};

export default Drawer;
