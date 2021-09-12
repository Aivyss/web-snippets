import {strPatt} from './enums';

interface Iaccnt {
    cValid(str: string | undefined, min: number, max: number, options?: string[]): {isValid: boolean; errStr: string};
    confirmPw(pw: string | undefined, pwCf: string | undefined): {isValid: boolean; errStr: string};
}

const account: Iaccnt = {
    cValid: function (str, min, max, options?) {
        let isValid = true;
        let errStr = '';

        if (!str) return {isValid: !isValid, errStr: 'EMPTY_STRING'};

        if (str.length < min || str.length > max) {
            isValid = true;
        }

        options.some(curr => {
            let regex!: RegExp;
            switch (curr) {
                case strPatt.SPECIAL_CHARACTER:
                    regex = /[!@#\$%\^&\*]/; //  @, #, $, %, ^, &, *, !
                    isValid = regex.test(str);
                    errStr = isValid ? '' : 'NO_SPECIAL_CHARACTER';
                    break;
                case strPatt.NUMBER:
                    regex = /\d+/; // all of numbers
                    isValid = regex.test(str);
                    errStr = isValid ? '' : 'NO_NUMBER';
                    break;
                case strPatt.CAPITAL:
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

        return {isValid, errStr};
    },
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
};

export default account;
export {Iaccnt};
