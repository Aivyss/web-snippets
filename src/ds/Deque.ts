interface IMapCallback<T> {
    (param: T, index?: number, self?: T[]): any;
}

interface IForEachCallback<T> {
    (param: T): void;
}
export {IDeque, IMapCallback, IForEachCallback};

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
    private _deque: T[] = []; // _deque
    capacity = 0; // _deque capacity
    private _isLimited = false; // deck capacity is limited?

    constructor(capacity?: number) {
        if (capacity) {
            this.capacity = capacity;
            this._isLimited = true;
        }
    }

    push(...param: T[]) {
        const capacityCondition =
            this._deque.length < this.capacity && param.length + this._deque.length < this.capacity;
        if (this._isLimited) {
            if (capacityCondition) {
                this._deque.push(...param);
                return true;
            } else {
                throw 'CAPACITY_EXCEED_EXCEPTION';
            }
        } else {
            this._deque.push(...param);
        }
    }
    unshift(...param: T[]) {
        const capacityCondition =
            this._deque.length < this.capacity && param.length + this._deque.length < this.capacity;

        if (this._isLimited) {
            if (capacityCondition) {
                this._deque.unshift(...param.reverse());
                return true;
            } else {
                throw 'CAPACITY_EXCEED_EXCEPTION';
            }
        } else {
            this._deque.unshift(...param.reverse());
        }
    }
    pop() {
        return this._deque.pop();
    }
    shift() {
        return this._deque.shift();
    }
    clear() {
        this._deque = [] as T[];
    }
    slice(start?: number, end?: number) {
        return this._deque.slice(start, end);
    }
    map(callback: IMapCallback<T>) {
        return this._deque.map(callback);
    }
    forEach(callback: IForEachCallback<T>) {
        this._deque.forEach(callback);
    }
    rotation(num: number) {
        const newDeque: T[] = [];

        if (num > 0) {
            // clockwise
            this._deque = newDeque.concat(this.deque.slice(-num), this.deque.slice(0, num));
        } else {
            // counter clockwise
            this._deque = newDeque.concat(this.deque.slice(num), this.deque.slice(0, num + this.deque.length)) as T[];
        }
    }
    get deque() {
        return this._deque;
    }
    get isLimited() {
        return this._isLimited;
    }
}
