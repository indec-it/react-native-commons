import {concat, isNil} from 'lodash';

const composeStyles = (baseStyles, styles) => (
    isNil(styles) ? baseStyles : concat(baseStyles, styles)
);

export default composeStyles;
