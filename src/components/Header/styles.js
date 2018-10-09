import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    brandContainer: {
        height: 45,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e32439'
    },
    brandImage: {
        width: 100,
        height: 38
    },
    rightImageStyle: {
        width: 331,
        height: 76
    },
    text: {
        fontSize: 30,
        color: '#fff'
    },
    navContainer: {
        height: 35,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#333'
    },
    navItem: {
        alignItems: 'center'
    },
    navText: {
        marginRight: 10,
        fontSize: 12,
        color: '#fff'
    },
    navIcon: {
        marginRight: 5,
        marginLeft: 10
    }
});
