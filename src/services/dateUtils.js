import {isDate} from 'lodash';

export default class DateUtilsService {
    static LOCALE = 'es-AR';

    static TIME_OPTIONS = {
        hour: '2-digit',
        minute: '2-digit'
    };

    /**
     * Format a date to a locale date string.
     * @param {string|date} input The time to be formatted.
     * @param {object} options Options for date formatting.
     * @returns {string} Returns the formatted string date.
     */
    static formatDate(input, options) {
        if (!input) {
            return '';
        }
        const date = isDate(input) ? input : new Date(input);
        return date.toLocaleDateString(DateUtilsService.LOCALE, options);
    }

    /**
     * Format a date to a locale time string.
     * @param {string|date} input The time to be formatted.
     * @param {object} options Options for time formatting.
     * @returns {string} Returns the formatted string time.
     */
    static formatTime(input, options = DateUtilsService.TIME_OPTIONS) {
        if (!input) {
            return '';
        }
        const date = isDate(input) ? input : new Date(input);
        return date.toLocaleTimeString(DateUtilsService.LOCALE, options);
    }

    /**
     * Format a date and time to a locale datetime string.
     * @param {string|date} input The datetime to be formatted.
     * @returns {string} Returns the formatted string datetime.
     */
    static formatDateTime(input) {
        return `${DateUtilsService.formatDate(input)} ${DateUtilsService.formatTime(input)}`;
    }
}
