import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';

import styles from './styles';

import stylePropType from '../../util/stylePropType';

const brandImageDefault = require('../../images/brand.png');

const DrawerImage = ({
    brandImage, rightImage, text, style
}) => (
    <View style={[styles.brandContainer, style.brandContainer]}>
        <View>
            <Image source={brandImage} style={styles.brandImage}/>
        </View>
        {text && (
            <Text style={styles.text}>
                {text}
            </Text>
        )}
        {rightImage && (
            <View>
                <Image source={rightImage} style={styles.rightImageStyle}/>
            </View>
        )}
    </View>
);

DrawerImage.propTypes = {
    brandImage: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    rightImage: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    style: stylePropType,
    text: PropTypes.string
};

DrawerImage.defaultProps = {
    brandImage: brandImageDefault,
    style: {},
    text: null,
    rightImage: null
};

export default DrawerImage;
