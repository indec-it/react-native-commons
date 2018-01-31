import {assignWith, clone} from 'lodash';

export default (baseStyles, styles) => {
    if (!styles) {
        return baseStyles;
    }
    return assignWith(
        clone(baseStyles),
        styles,
        (baseStyle, style) => [baseStyle, style]
    );
};
