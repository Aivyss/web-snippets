export interface IArrs {
    shuffle(array: any[]): any[];
    repeatPop(array: any[], times: number): any[];
    getPropVals(array: any[], propsName: string): any[];
    numericalHeapSort(array: number[]): number[];
}
declare const arrs: IArrs;
export default arrs;
