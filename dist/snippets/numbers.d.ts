export interface INumbers {
    getRandInt(start: number, end: number): number;
    getRandDouble(start: number, end: number): number;
}
declare const numbers: INumbers;
export default numbers;
