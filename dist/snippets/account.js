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
     * @param options : 'capital', 'number', 'special'
     * @returns {isValid, errStr} : isValid(boolean), errStr(error message)
     */
    cValid: function (str, min, max) {
        var options = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            options[_i - 3] = arguments[_i];
        }
        var isValid = true;
        var errMessage = '';
        if (!str)
            return { isValid: !isValid, errMessage: 'EMPTY_STRING' };
        if (str.length < min || str.length > max) {
            isValid = false;
            errMessage = 'NOT_STRING_LENGTH_BOUNDARY';
            return { isValid: isValid, errMessage: errMessage };
        }
        if (options) {
            options.some(function (curr) {
                var regex;
                switch (curr) {
                    case enums_1.strPatt.SPECIAL_CHARACTER:
                        regex = /[!@#\$%\^&\*]/; //  @, #, $, %, ^, &, *, !
                        isValid = regex.test(str);
                        errMessage = isValid ? '' : 'NO_SPECIAL_CHARACTER';
                        break;
                    case enums_1.strPatt.NUMBER:
                        regex = /\d+/; // all of numbers
                        isValid = regex.test(str);
                        errMessage = isValid ? '' : 'NO_NUMBER';
                        break;
                    case enums_1.strPatt.CAPITAL:
                        regex = /[A-Z]/; // capitals
                        isValid = regex.test(str);
                        errMessage = isValid ? '' : 'NO_CAPITAL_CHARACTER';
                        break;
                    default:
                        break;
                }
                if (!isValid) {
                    return true;
                }
                return false;
            });
        }
        return { isValid: isValid, errMessage: errMessage };
    },
    /**
     * check password validation
     */
    confirmPw: function (pw, pwCf) {
        if (!pw) {
            return { isValid: false, errStr: 'EMPTY_PASSWORD' };
        }
        if (!pwCf) {
            return { isValid: false, errStr: 'EMPTY_PASSWORD_CONFIRM' };
        }
        if (pw === pwCf) {
            return { isValid: false, errStr: 'NOT_EXACT_PASSWORD' };
        }
        return { isValid: true, errStr: '' };
    },
    /**
     * check email validation
     */
    fullEmailValid: function (email) {
        var regex = /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/;
        return regex.test(email);
    },
    rightSideEmailValid: function (domain) {
        var regex = /[a-z0-9]+\.[a-z09]/;
        return regex.test(domain);
    },
};
exports.default = account;
