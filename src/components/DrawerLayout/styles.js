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
        flexDirection: 'row'
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
    version: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'right'
    },
    appData: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    userContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    userText: {
        fontSize: 16
    },
    versionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    versionText: {
        fontSize: 16
    },
    routesContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-around'
    },
    dividerStyle: {
        backgroundColor: '#dee2e3'
    }
});
