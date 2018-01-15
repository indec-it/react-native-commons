import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './styles';

export default class Splash extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired
    };

    componentWillMount() {
        setTimeout(() => {
            this.props.history.push('/signIn');
        }, 3000);
    }

    render() {
        return (
            <View style={[styles.container, styles.splash.container]}>
                <Text style={styles.splash.text}>
                    INDEC
                </Text>
            </View>
        );
    }
}
