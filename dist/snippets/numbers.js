"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numbers = {
    /**
     *
     * @param start
     * @param end
     * @returns randoum number(integer) [start, end]
     */
    getRandInt: function (start, end) {
        var range = end - start;
        var randOffset = Math.round(Math.random() * range);
        return start + randOffset;
    },
    /**
     *
     * @param start
     * @param end
     * @returns random number(Double) [start, end)
     */
    getRandDouble: function (start, end) {
        var range = end - start;
        var randOffset = Math.random() * range;
        return start + randOffset;
    },
};
exports.default = numbers;
