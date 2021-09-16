import { strPatt } from './enums';
export declare type Options = strPatt.SPECIAL_CHARACTER | strPatt.NUMBER | strPatt.CAPITAL;
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
declare const account: Iaccnt;
export default account;
export { Iaccnt };
