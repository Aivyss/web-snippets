"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deque = /** @class */ (function () {
    function Deque(capacity) {
        this._deque = []; // _deque
        this.capacity = 0; // _deque capacity
        this._isLimited = false; // deck capacity is limited?
        if (capacity) {
            this.capacity = capacity;
            this._isLimited = true;
        }
    }
    Deque.prototype.push = function () {
        var _a, _b;
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var capacityCondition = this._deque.length < this.capacity && param.length + this._deque.length < this.capacity;
        if (this._isLimited) {
            if (capacityCondition) {
                (_a = this._deque).push.apply(_a, param);
                return true;
            }
            else {
                throw 'CAPACITY_EXCEED_EXCEPTION';
            }
        }
        else {
            (_b = this._deque).push.apply(_b, param);
        }
    };
    Deque.prototype.unshift = function () {
        var _a, _b;
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var capacityCondition = this._deque.length < this.capacity && param.length + this._deque.length < this.capacity;
        if (this._isLimited) {
            if (capacityCondition) {
                (_a = this._deque).unshift.apply(_a, param.reverse());
                return true;
            }
            else {
                throw 'CAPACITY_EXCEED_EXCEPTION';
            }
        }
        else {
            (_b = this._deque).unshift.apply(_b, param.reverse());
        }
    };
    Deque.prototype.pop = function () {
        return this._deque.pop();
    };
    Deque.prototype.shift = function () {
        return this._deque.shift();
    };
    Deque.prototype.clear = function () {
        this._deque = [];
    };
    Deque.prototype.slice = function (start, end) {
        return this._deque.slice(start, end);
    };
    Deque.prototype.map = function (callback) {
        return this._deque.map(callback);
    };
    Deque.prototype.forEach = function (callback) {
        this._deque.forEach(callback);
    };
    Deque.prototype.rotation = function (num) {
        var newDeque = [];
        if (num > 0) {
            // clockwise
            this._deque = newDeque.concat(this.deque.slice(-num), this.deque.slice(0, num));
        }
        else {
            // counter clockwise
            this._deque = newDeque.concat(this.deque.slice(num), this.deque.slice(0, num + this.deque.length));
        }
    };
    Object.defineProperty(Deque.prototype, "deque", {
        get: function () {
            return this._deque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Deque.prototype, "isLimited", {
        get: function () {
            return this._isLimited;
        },
        enumerable: false,
        configurable: true
    });
    return Deque;
}());
exports.default = Deque;
