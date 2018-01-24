export const ERROR_OCCURRED = 'ERROR_OCCURRED';

export const handleError = err => ({
    type: ERROR_OCCURRED,
    err
});
