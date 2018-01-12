import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './styles';

const LoadingIndicator = () => (
    <View style={styles.container}>
        <ActivityIndicator animating size="large" color="#008BC7"/>
    </View>
);

export default LoadingIndicator;
