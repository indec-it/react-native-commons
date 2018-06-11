import {concat, isNil, filter} from 'lodash';

const composeStyles = (baseStyles, ...styles) => concat(
    baseStyles,
    filter(styles, style => !isNil(style))
);

export default composeStyles;
