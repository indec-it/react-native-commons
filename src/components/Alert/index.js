import PropTypes from 'prop-types';
import {Alert as ReactNativeAlert} from 'react-native';

const Alert = ({
    title, subTitle, options
}) => (
    ReactNativeAlert.alert(
        {title},
        {subTitle},
        {options}
    )
);

Alert.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired
    })).isRequired
};

Alert.defaultProps = {
    title: ''
};

export default Alert;
