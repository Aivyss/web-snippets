export interface IArrays {
    shuffle(array: any[]): any[];
    repeatPop(array: any[], times: number): any[];
    getPropVals(array: any[], propsName: string): any[];
    numericHeapSort(array: number[]): number[];
}
