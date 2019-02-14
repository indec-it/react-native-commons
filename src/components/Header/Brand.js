import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';

import styles from './styles';
import {stylePropType} from '../../util';
import brandImageDefault from '../../images/brand.png';

const Brand = ({
    text, version, rightImage, brandImage, style
}) => (
    <View style={[styles.brandContainer, style.brandContainer]}>
        <Image source={brandImage} style={styles.brandImage}/>
        {text && (
            <Fragment>
                <Text style={styles.text}>
                    {text}
                </Text>
                {version && (<Text style={styles.version}>{version}</Text>)}
            </Fragment>
        )}
        {rightImage && (
            <Image source={rightImage} style={styles.rightImageStyle}/>
        )}
    </View>
);

Brand.propTypes = {
    text: PropTypes.string,
    version: PropTypes.string,
    brandImage: PropTypes.string,
    rightImage: PropTypes.string,
    style: stylePropType
};

Brand.defaultProps = {
    brandImage: brandImageDefault,
    style: {},
    rightImage: null,
    text: null,
    version: null
};

export default Brand;
