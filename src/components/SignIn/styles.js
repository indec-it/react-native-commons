import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    wrongPasswordText: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        color: '#d00000'
    },
    inputWrapper: {
        minWidth: 245,
        paddingBottom: 0
    },
    textStyle: {
        height: 40,
        fontSize: 18
    },
    submitButton: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#c7c7c7',
        backgroundColor: '#f7f7f7'
    },
    cleanSurveysText: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        color: '#004e84',
        textAlign: 'center'
    }
});
