import {Dimensions} from 'react-native';

const getWindowSize = () => ({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
});

export default {
    container: [
        {
            flex: 1,
            flexDirection: 'column'
        },
        getWindowSize()
    ],
    singIn: {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
            minWidth: 768
        },
        image: {
            width: 250,
            height: 200
        },
        textTitle: {
            fontSize: 20,
            textAlign: 'center',
            marginTop: 50,
            marginBottom: 50
        },
        incorrectSingInText: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20
        },
        input: {
            field: {
                height: 40
            },
            wrapper: {
                minWidth: 245
            }
        },
        submitButton: {
            marginTop: 50
        }
    }
};
