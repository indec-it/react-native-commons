import {StyleSheet} from 'react-native';

export default {
    alert: StyleSheet.create({
        alert: {
            padding: 5,
            backgroundColor: '#fff'
        },
        alertDanger: {
            borderWidth: 1,
            marginTop: 20,
            borderColor: '#e00000'
        },
        alertWarning: {
            borderWidth: 1,
            marginTop: 20,
            borderColor: '#fffb33'
        },
        alertSuccess: {
            borderWidth: 1,
            marginTop: 20,
            borderColor: '#276e0f'
        },
        alertDefault: {
            borderWidth: 1,
            marginTop: 20,
            borderColor: '#004e84'
        }
    }),
    alertText: StyleSheet.create({
        alert: {
            padding: 5,
            backgroundColor: '#fff'
        },
        alertDanger: {
            color: '#e00000'
        },
        alertSuccess: {
            color: '#276e0f'
        },
        alertDefault: {
            color: '#004e84'
        }
    })
};
