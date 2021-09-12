interface IMapCallback<T> {
    (param: T, index: number, self: T[]): any;
}

interface IForEachCallback<T> {
    (param: T): void;
}
export default class Deque<T> {
    deque: T[] = []; // deque
    capacity = 0; // deque capacity
    isLimited = false; // deck capacity is limited?

    constructor(capacity: number | undefined) {
        if (capacity) {
            this.capacity = capacity;
            this.isLimited = true;
        }
    }

    push(param: T | T[]) {
        if (this.isLimited) {
            if (this.deque.length < this.capacity) {
                if (param instanceof Array) {
                    if (param.length + this.deque.length < this.capacity) {
                        this.deque = [...this.deque, ...param];
                        return true;
                    } else {
                        throw 'CAPACITY_EXCEED_EXCEPTION';
                    }
                } else {
                    this.deque.push(param);
                    return true;
                }
            } else {
                throw 'CAPACITY_EXCEED_EXCEPTION';
            }
        } else {
            if (param instanceof Array) {
                this.deque = [...this.deque, ...param];
                return true;
            } else {
                this.deque.push(param);
                return true;
            }
        }
    }
    pushLeft(param: T | T[]) {
        if (this.isLimited) {
            if (this.deque.length < this.capacity) {
                if (param instanceof Array) {
                    if (param.length + this.deque.length < this.capacity) {
                        this.deque = [...param, ...this.deque];
                        return true;
                    } else {
                        throw 'CAPACITY_EXCEED_EXCEPTION';
                    }
                } else {
                    this.deque = [param, ...this.deque];
                    return true;
                }
            } else {
                throw 'CAPACITY_EXCEED_EXCEPTION';
            }
        } else {
            if (param instanceof Array) {
                this.deque = [...param, ...this.deque];
                return true;
            } else {
                this.deque = [param, ...this.deque];
                return true;
            }
        }
    }
    pop() {
        let returnVal: T;
        returnVal = this.deque.pop();

        return returnVal;
    }
    popLeft() {
        let returnVal: T;
        this.deque.reverse();
        returnVal = this.deque.pop();
        this.deque.reverse();

        return returnVal;
    }
    clear() {
        this.deque = [] as T[];
    }
    slice(start?: number, end?: number) {
        return this.deque.slice(start, end);
    }
    map(callback: IMapCallback<T>) {
        return this.deque.map(callback);
    }
    forEach(callback: IForEachCallback<T>) {
        this.deque.forEach(callback);
    }
    rotation(num: number) {
        if (num > 0) {
            // clockwise
            this.deque = [...this.deque.slice(-num), ...this.deque.slice(0, this.deque.length - num)];
        } else {
            // counter clockwise
            this.deque = [...this.deque.slice(-num), ...this.deque.slice(0, -num)];
        }
    }
}
