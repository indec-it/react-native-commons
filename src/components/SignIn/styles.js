import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    image: {
        marginTop: 10
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
    errorText: {
        color: '#e32439'
    },
    inputWrapper: {
        minWidth: 245,
        paddingBottom: 10,
        flexWrap: 'wrap'
    },
    textStyle: {
        height: 50,
        fontSize: 18
    },
    submitButton: {
        marginTop: 10,
        height: 30,
        backgroundColor: '#e32439'
    },
    changeUserContainer: {
        marginTop: 10,
        padding: 5
    },
    changeUserText: {
        marginTop: -15,
        marginBottom: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
    helpText: {
        fontSize: 12
    }
});
