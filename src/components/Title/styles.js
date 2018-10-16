import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const RF = percent => {
    const deviceHeight = height - StatusBar.currentHeight;
    const heightPercent = percent * deviceHeight / 100;
    return Math.round(heightPercent);
};

export default StyleSheet.create({
    title: {
        fontSize: RF(3.5),
        fontWeight: 'bold',
        color: '#e32439',
        marginTop: 10,
        marginLeft: 15
    }
});
