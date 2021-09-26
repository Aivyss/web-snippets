"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var account = {
    /**
     * options: 'special', 'number', 'capital'
     */
    /**
     *
     * @param str : target string
     * @param min : minimum string length
     * @param max : maximum string length
     * @param options : 'capital', 'number', 'special', 'no_capital', 'no_number', 'no_special'
     * @returns {isValid, errStr} : isValid(boolean), errStr(error message)
     */
    cValid: function (str, min, max) {
        var options = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            options[_i - 3] = arguments[_i];
        }
        var isValid = true;
        var isValidTemp = true;
        var errMessage = '';
        if (!str)
            return { isValid: !isValid, errMessage: 'EMPTY_STRING' };
        if (str.length < min || str.length > max) {
            isValid = false;
            errMessage = 'NOT_STRING_LENGTH_BOUNDARY';
            return { isValid: isValid, errMessage: errMessage };
        }
        if (options) {
            options.forEach(function (curr) {
                var regex;
                switch (curr) {
                    case enums_1.strPatt.SPECIAL:
                        regex = /[!@#\$%\^&\*]/; //  @, #, $, %, ^, &, *, !
                        isValidTemp = regex.test(str);
                        isValid && (isValid = isValidTemp);
                        errMessage += isValidTemp ? '' : ' NO_SPECIAL_CHARACTER';
                        break;
                    case enums_1.strPatt.NUMBER:
                        regex = /\d+/; // all of numbers
                        isValidTemp = regex.test(str);
                        isValid && (isValid = isValidTemp);
                        errMessage += isValidTemp ? '' : ' NO_NUMBER';
                        break;
                    case enums_1.strPatt.CAPITAL:
                        regex = /[A-Z]/; // capitals
                        isValidTemp = regex.test(str);
                        isValid && (isValid = isValidTemp);
                        errMessage += isValidTemp ? '' : ' NO_CAPITAL_CHARACTER';
                        break;
                    case enums_1.strPatt.NO_CAPITAL:
                        regex = /[A-Z]/;
                        isValidTemp = !regex.test(str);
                        isValid && (isValid = isValidTemp);
                        errMessage += isValidTemp ? '' : ' HAVE_CAPITAL_CHARACTER_ERR';
                        break;
                    case enums_1.strPatt.NO_SPECIAL:
                        regex = /[!@#\$%\^&\*]/; //  @, #, $, %, ^, &, *, !
                        isValidTemp = !regex.test(str);
                        isValid && (isValid = isValidTemp);
                        errMessage += isValidTemp ? '' : ' NO_SPECIAL_CHARACTER';
                        break;
                    case enums_1.strPatt.NO_NUMBER:
                        regex = /\d+/; // all of numbers
                        isValidTemp = !regex.test(str);
                        isValid && (isValid = isValidTemp);
                        errMessage += isValidTemp ? '' : ' NO_NUMBER';
                        break;
                    default:
                        break;
                }
            });
        }
        return { isValid: isValid, errMessage: errMessage };
    },
    /**
     * check password validation
     */
    confirmPw: function (pw, pwCf) {
        if (!pw) {
            return { isValid: false, errMessage: 'EMPTY_PASSWORD' };
        }
        if (!pwCf) {
            return { isValid: false, errMessage: 'EMPTY_PASSWORD_CONFIRM' };
        }
        if (pw === pwCf) {
            return { isValid: true, errMessage: '' };
        }
        else {
            return { isValid: false, errMessage: 'NOT_EXACT_PASSWORD' };
        }
    },
    /**
     * check email validation
     */
    fullEmailValid: function (email) {
        var regex = /[a-z0-9]+@(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})$/g;
        return regex.test(email);
    },
    rightSideEmailValid: function (domain) {
        var regex = /^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})$/g;
        return regex.test(domain);
    },
    cValidDashPhoneNum: function (str) {
        var regex = /\d{3,3}-\d{4,4}-\d{4,4}/;
        return regex.test(str);
    },
    cValidPhoneNum: function (str, count) {
        var regex = new RegExp('\\d{' + count + ',' + count + '}');
        return regex.test(str);
    },
};
exports.default = account;
