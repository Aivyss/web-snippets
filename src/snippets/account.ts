import {strPatt} from './enums';

export type Options =
    | strPatt.SPECIAL
    | strPatt.NUMBER
    | strPatt.CAPITAL
    | strPatt.NO_CAPITAL
    | strPatt.NO_SPECIAL
    | strPatt.NO_NUMBER;

export interface IResult {
    isValid: boolean;
    errMessage: string;
}
export interface Iaccnt {
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
     * @param options : 'capital', 'number', 'special', 'no_capital', 'no_number', 'no_special'
     * @returns {isValid, errStr} : isValid(boolean), errStr(error message)
     */
    cValid: function (str, min, max, ...options) {
        let isValid = true;
        let isValidTemp = true;
        let errMessage = '';

        if (!str) return {isValid: !isValid, errMessage: 'EMPTY_STRING'};

        if (str.length < min || str.length > max) {
            isValid = false;
            errMessage = 'NOT_STRING_LENGTH_BOUNDARY';

            return {isValid, errMessage};
        }

        if (options) {
            options.forEach(curr => {
                let regex!: RegExp;
                switch (curr) {
                    case strPatt.SPECIAL:
                        regex = /[!@#\$%\^&\*]/; //  @, #, $, %, ^, &, *, !
                        isValidTemp = regex.test(str);
                        isValid &&= isValidTemp;
                        errMessage += isValidTemp ? '' : ' NO_SPECIAL_CHARACTER';
                        break;
                    case strPatt.NUMBER:
                        regex = /\d+/; // all of numbers
                        isValidTemp = regex.test(str);
                        isValid &&= isValidTemp;
                        errMessage += isValidTemp ? '' : ' NO_NUMBER';
                        break;
                    case strPatt.CAPITAL:
                        regex = /[A-Z]/; // capitals
                        isValidTemp = regex.test(str);
                        isValid &&= isValidTemp;
                        errMessage += isValidTemp ? '' : ' NO_CAPITAL_CHARACTER';
                        break;
                    case strPatt.NO_CAPITAL:
                        regex = /[A-Z]/;
                        isValidTemp = !regex.test(str);
                        isValid &&= isValidTemp;
                        errMessage += isValidTemp ? '' : ' HAVE_CAPITAL_CHARACTER_ERR';
                        break;
                    case strPatt.NO_SPECIAL:
                        regex = /[!@#\$%\^&\*]/; //  @, #, $, %, ^, &, *, !
                        isValidTemp = !regex.test(str);
                        isValid &&= isValidTemp;
                        errMessage += isValidTemp ? '' : ' NO_SPECIAL_CHARACTER';
                        break;
                    case strPatt.NO_NUMBER:
                        regex = /\d+/; // all of numbers
                        isValidTemp = !regex.test(str);
                        isValid &&= isValidTemp;
                        errMessage += isValidTemp ? '' : ' NO_NUMBER';
                        break;
                    default:
                        break;
                }
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
        const regex =
            /[a-z0-9]+@(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})$/g;
        return regex.test(email);
    },
    rightSideEmailValid: function (domain) {
        const regex =
            /^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})$/g;
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
