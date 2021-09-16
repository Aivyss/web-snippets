import { strPatt } from './enums';
export declare type Options = strPatt.SPECIAL_CHARACTER | strPatt.NUMBER | strPatt.CAPITAL;
interface Iaccnt {
    cValid(str: string | undefined, min: number, max: number, ...options: Options[]): {
        isValid: boolean;
        errMessage: string;
    };
    confirmPw(pw: string | undefined, pwCf: string | undefined): {
        isValid: boolean;
        errStr: string;
    };
    fullEmailValid(email: string): boolean;
    rightSideEmailValid(domain: string): boolean;
}
declare const account: Iaccnt;
export default account;
export { Iaccnt };
