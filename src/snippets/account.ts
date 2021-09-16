import {strPatt} from './enums';

export type Options = strPatt.SPECIAL_CHARACTER | strPatt.NUMBER | strPatt.CAPITAL;

interface Iaccnt {
    cValid(
        str: string | undefined,
        min: number,
        max: number,
        ...options: Options[]
    ): {isValid: boolean; errMessage: string};
    confirmPw(pw: string | undefined, pwCf: string | undefined): {isValid: boolean; errStr: string};
    fullEmailValid(email: string): boolean;
    rightSideEmailValid(domain: string): boolean;
}

const account: Iaccnt = {
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
    cValid: function (str, min, max, ...options) {
        let isValid = true;
        let errMessage = '';

        if (!str) return {isValid: !isValid, errMessage: 'EMPTY_STRING'};

        if (str.length < min || str.length > max) {
            isValid = false;
            errMessage = 'NOT_STRING_LENGTH_BOUNDARY';

            return {isValid, errMessage};
        }

        if (options) {
            options.some(curr => {
                let regex!: RegExp;
                switch (curr) {
                    case strPatt.SPECIAL_CHARACTER:
                        regex = /[!@#\$%\^&\*]/; //  @, #, $, %, ^, &, *, !
                        isValid = regex.test(str);
                        errMessage = isValid ? '' : 'NO_SPECIAL_CHARACTER';
                        break;
                    case strPatt.NUMBER:
                        regex = /\d+/; // all of numbers
                        isValid = regex.test(str);
                        errMessage = isValid ? '' : 'NO_NUMBER';
                        break;
                    case strPatt.CAPITAL:
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

        return {isValid, errMessage};
    },
    /**
     * check password validation
     */
    confirmPw: function (pw, pwCf) {
        if (!pw) {
            return {isValid: false, errStr: 'EMPTY_PASSWORD'};
        }

        if (!pwCf) {
            return {isValid: false, errStr: 'EMPTY_PASSWORD_CONFIRM'};
        }

        if (pw === pwCf) {
            return {isValid: false, errStr: 'NOT_EXACT_PASSWORD'};
        }

        return {isValid: true, errStr: ''};
    },
    /**
     * check email validation
     */
    fullEmailValid: function (email) {
        const regex = /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/;
        return regex.test(email);
    },
    rightSideEmailValid: function (domain) {
        const regex = /[a-z0-9]+\.[a-z09]/;
        return regex.test(domain);
    },
};

export default account;
export {Iaccnt};
