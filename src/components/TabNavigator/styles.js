import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 12,
        marginLeft: 20
    },
    tab: {
        flex: 0.2,
        backgroundColor: '#e4e4e4',
        padding: 16,
        marginRight: 8,
        marginLeft: -6,
        borderColor: '#cecece',
        borderWidth: 0.5,
        marginTop: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        fontSize: 18
    },
    selectedTab: {
        backgroundColor: '#008bc7',
        color: 'white',
        marginTop: 8
    },
    tabNavigatorFooter: {
        backgroundColor: '#cecece',
        height: 1
    }
});
