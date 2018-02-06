import PropTypes from 'prop-types';

export default PropTypes.shape({
    key: PropTypes.number,
    icon: PropTypes.string,
    text: PropTypes.string,
    path: PropTypes.string,
    closeSession: PropTypes.bool
});
