import {Component} from 'react';
import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
    PropTypes.instanceOf(Component),
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.instanceOf(Component),
        PropTypes.func
    ]))
]);
