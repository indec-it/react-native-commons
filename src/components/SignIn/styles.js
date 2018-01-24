import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        minWidth: 768,
        flexDirection: 'column'
    },
    image: {
        width: 250,
        height: 200
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
        paddingTop: 20
    },
    input: {
        height: 40
    },
    inputWrapper: {
        minWidth: 245
    },
    submitButton: {
        marginTop: 50
    }
});
