import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const RF = percent => {
    const deviceHeight = height - StatusBar.currentHeight;
    const heightPercent = percent * deviceHeight / 100;
    return Math.round(heightPercent);
};

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 12,
        marginLeft: 20
    },
    tab: {
        flex: 0.3,
        backgroundColor: '#dbdbdb',
        padding: 8,
        marginRight: 8,
        marginLeft: -6,
        marginTop: 8,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 2
    },
    rfFontTab: {
        fontSize: RF(2.2)
    },
    selectedTab: {
        backgroundColor: '#dbdbdb',
        marginTop: 8,
        borderBottomWidth: 3,
        borderBottomColor: '#111'
    },
    tabNavigatorFooter: {
        backgroundColor: '#999',
        height: 1
    }
});
