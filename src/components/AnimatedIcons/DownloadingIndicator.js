import React, {PureComponent} from 'react';
import {Animated} from 'react-native';
import {Icon} from 'react-native-elements';
import {getFontAwesome} from '../../util';

class DownloadingIndicator extends PureComponent {
    constructor(props) {
        super(props);
        this.animationValue = new Animated.Value(5);
    }

    componentDidMount() {
        this.bounceIcon();
    }

    bounceIcon() {
        Animated.sequence([
            Animated.timing(this.animationValue, {
                toValue: -5,
                duration: 1000
            }),
            Animated.timing(this.animationValue, {
                toValue: 5,
                duration: 1000
            })
        ]).start(() => this.bounceIcon());
    }

    render() {
        return (
            <Animated.View style={{top: this.animationValue}}>
                <Icon {...getFontAwesome('arrow-down', 'black')} size={24}/>
            </Animated.View>
        );
    }
}

export default DownloadingIndicator;
