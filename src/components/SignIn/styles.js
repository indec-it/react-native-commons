import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    image: {
        marginBottom: 70
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    wrongPasswordText: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        color: '#d00000'
    },
    inputWrapper: {
        minWidth: 245,
        paddingBottom: 0
    },
    textStyle: {
        height: 50,
        fontSize: 18
    },
    submitButton: {
        marginTop: 50
    }
});
