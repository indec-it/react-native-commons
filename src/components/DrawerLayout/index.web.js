import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import stylePropType from '../../util/stylePropType';
import routePropType from '../../util/routePropType';
import Drawer from './Drawer';

const brandImageDefault = require('../../images/brand.png');

const DrawerLayout = ({
    routes, text, brandImage, style, rightImage, version, children
}) => (
    <Fragment>
        <Drawer {...{
            routes, text, style, brandImage, rightImage, version
        }}
        />
        {children}
    </Fragment>
);

DrawerLayout.propTypes = {
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
    routes: PropTypes.arrayOf(routePropType).isRequired,
    version: PropTypes.string,
    children: PropTypes.shape({})
};

DrawerLayout.defaultProps = {
    brandImage: brandImageDefault,
    style: {
        routesContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flex: 1,
            backgroundColor: 'grey'
        }
    },
    text: null,
    rightImage: null,
    version: null,
    children: {}
};

export default DrawerLayout;
