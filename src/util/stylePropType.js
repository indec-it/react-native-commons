import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({}),
    PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.shape({}),
            PropTypes.bool
        ])
    )
]);
