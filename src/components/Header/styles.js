import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    brandContainer: {
        height: 96,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#004e84'
    },
    brandImage: {
        width: 200,
        height: 76
    },
    rightImageStyle: {
        width: 331,
        height: 76
    },
    text: {
        fontWeight: 'bold',
        fontSize: 38,
        color: '#fff'
    },
    navContainer: {
        height: 45,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#dee2e3'
    },
    navItem: {
        alignItems: 'center'
    },
    navText: {
        fontSize: 18,
        marginRight: 10
    },
    navIcon: {
        marginRight: 10
    },
    versionStyle: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'right'
    }
});
