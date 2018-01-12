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
    splash: {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        },
        text: {
            color: '#008BC7',
            fontSize: 26,
            fontWeight: 'bold',
            textAlign: 'center',
            width: 450,
            marginBottom: 50
        },
        image: {
            width: 438,
            height: 361
        },
        enter: {
            fontSize: 20,
            color: '#0e516e',
            textAlign: 'center',
            margin: 50
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5
        }
    }
};
