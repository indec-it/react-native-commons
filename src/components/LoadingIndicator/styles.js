import {Dimensions} from 'react-native';

const getWindowSize = () => ({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
});

export default {
    container: [
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        getWindowSize()
    ]
};
