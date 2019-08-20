import React, {PureComponent} from 'react';
import {Animated, Easing} from 'react-native';
import {Icon} from 'react-native-elements';
import {getFontAwesome} from '../../util';

class ProcessingIndicator extends PureComponent {
    constructor(props) {
        super(props);
        this.animationValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.spinIcon();
    }

    getRotationValue() {
        return this.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 360]
        });
    }

    spinIcon() {
        this.animationValue.setValue(0);
        Animated.timing(this.animationValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear
        }).start(() => this.spinIcon());
    }

    render() {
        return (
            <Animated.View style={{rotation: this.getRotationValue()}}>
                <Icon {...getFontAwesome('refresh', 'black')} size={24}/>
            </Animated.View>
        );
    }
}

export default ProcessingIndicator;
