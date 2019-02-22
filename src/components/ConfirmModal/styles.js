import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    box: {
        flex: 0.20,
        backgroundColor: 'white',
        flexDirection: 'column',
        margin: 10
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    messageContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 20
    },
    message: {
        fontSize: 20
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: 'black',
        borderTopWidth: 1
    },
    dismissButton: {
        flex: 1,
        justifyContent: 'center',
        borderRightWidth: 1,
        padding: 10,
        alignItems: 'center'
    },
    dismissButtonText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    acceptButton: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center'
    },
    acceptButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7b8be3'
    }
});
