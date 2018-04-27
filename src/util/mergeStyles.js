import {mapKeys} from 'lodash';

export default (baseStyles, styles) => {
    if (!styles) {
        return baseStyles;
    }

    const finalStyles = {...baseStyles};

    mapKeys(styles, (value, field) => {
        finalStyles[field] = value || baseStyles[field];
    });

    return finalStyles;
};
