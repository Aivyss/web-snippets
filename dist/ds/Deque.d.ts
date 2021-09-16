interface IMapCallback<T> {
    (param: T, index?: number, self?: T[]): any;
}
interface IForEachCallback<T> {
    (param: T): void;
}
export { IDeque, IMapCallback, IForEachCallback };
interface IDeque<T> {
    capacity: number;
    push(...param: T[]): void;
    unshift(...param: T[]): void;
    pop(): T | undefined;
    shift(): T | undefined;
    clear(): void;
    slice(start?: number, end?: number): T[];
    map(callback: IMapCallback<T>): any[];
    forEach(callback: IForEachCallback<T>): void;
    rotation(num: number): void;
    get deque(): T[];
    get isLimited(): boolean;
}
export default class Deque<T> implements IDeque<T> {
    private _deque;
    capacity: number;
    private _isLimited;
    constructor(capacity?: number);
    push(...param: T[]): true | undefined;
    unshift(...param: T[]): true | undefined;
    pop(): T | undefined;
    shift(): T | undefined;
    clear(): void;
    slice(start?: number, end?: number): T[];
    map(callback: IMapCallback<T>): any[];
    forEach(callback: IForEachCallback<T>): void;
    rotation(num: number): void;
    get deque(): T[];
    get isLimited(): boolean;
}
