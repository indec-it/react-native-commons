import {StyleSheet} from 'react-native';

export default {
    button: StyleSheet.create({
        button: {
            borderRadius: 4,
            minWidth: 250
        },
        buttonDefault: {
            backgroundColor: '#DCDCDC',
            borderWidth: 1,
            borderColor: '#7D7D7D'
        },
        buttonPrimary: {
            backgroundColor: '#0E516E'
        },
        buttonDanger: {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'red'
        }
    }),
    buttonText: StyleSheet.create({
        button: {},
        buttonDefault: {
            color: '#333333'
        },
        buttonPrimary: {},
        buttonDanger: {
            color: 'red'
        }
    }),
    buttonIcon: StyleSheet.create({
        button: {},
        buttonDefault: {
            color: '#333333'
        },
        buttonPrimary: {},
        buttonDanger: {
            color: 'red'
        }
    })
};
