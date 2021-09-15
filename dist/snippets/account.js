"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var account = {
    /**
     * options: 'special', 'number', 'capital'
     */
    cValid: function (str, min, max, options) {
        var isValid = true;
        var errStr = '';
        if (!str)
            return { isValid: !isValid, errStr: 'EMPTY_STRING' };
        if (str.length < min || str.length > max) {
            isValid = false;
        }
        if (options) {
            options.some(function (curr) {
                var regex;
                switch (curr) {
                    case enums_1.strPatt.SPECIAL_CHARACTER:
                        regex = /[!@#\$%\^&\*]/; //  @, #, $, %, ^, &, *, !
                        isValid = regex.test(str);
                        errStr = isValid ? '' : 'NO_SPECIAL_CHARACTER';
                        break;
                    case enums_1.strPatt.NUMBER:
                        regex = /\d+/; // all of numbers
                        isValid = regex.test(str);
                        errStr = isValid ? '' : 'NO_NUMBER';
                        break;
                    case enums_1.strPatt.CAPITAL:
                        regex = /[A-Z]/; // capitals
                        isValid = regex.test(str);
                        errStr = isValid ? '' : 'NO_CAPITAL_CHARACTER';
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
        return { isValid: isValid, errStr: errStr };
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
    emailValid: function (email) {
        var regex = /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/;
        return regex.test(email);
    },
};
exports.default = account;
