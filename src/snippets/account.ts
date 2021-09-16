import {strPatt} from './enums';

export type Options = strPatt.SPECIAL_CHARACTER | strPatt.NUMBER | strPatt.CAPITAL;

interface IResult {
    isValid: boolean;
    errMessage: string;
}
interface Iaccnt {
    cValid(str: string | undefined, min: number, max: number, ...options: Options[]): IResult;
    confirmPw(pw: string | undefined, pwCf: string | undefined): IResult;
    fullEmailValid(email: string): boolean;
    rightSideEmailValid(domain: string): boolean;
    cValidDashPhoneNum(str: string): boolean;
    cValidPhoneNum(str: string, num: number): boolean;
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
            return {isValid: false, errMessage: 'EMPTY_PASSWORD'};
        }

        if (!pwCf) {
            return {isValid: false, errMessage: 'EMPTY_PASSWORD_CONFIRM'};
        }

        if (pw === pwCf) {
            return {isValid: true, errMessage: ''};
        } else {
            return {isValid: false, errMessage: 'NOT_EXACT_PASSWORD'};
        }
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
    cValidDashPhoneNum: str => {
        const regex = /\d{3,3}-\d{4,4}-\d{4,4}/;
        return regex.test(str);
    },
    cValidPhoneNum: (str, count) => {
        const regex = new RegExp('\\d{' + count + ',' + count + '}');
        return regex.test(str);
    },
};

export default account;
export {Iaccnt};
