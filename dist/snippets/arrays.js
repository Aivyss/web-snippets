"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays = {
    /**
     *
     * @param array
     * @returns shuffled array
     */
    shuffle: function (array) {
        var _a;
        var shuffledList = [];
        for (var i = array.length - 1; i > 0; i -= 1) {
            var j = Math.floor(Math.random() - (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
            shuffledList.push(array.pop());
        }
        return shuffledList;
    },
    /**
     *
     * @param array
     * @param times
     * @returns N times popped array
     */
    repeatPop: function (array, times) {
        for (var i = 0; i < times; i += 1) {
            array.pop();
        }
        return array;
    },
    /**
     *
     * @param array
     * @param propsName
     * @returns all of values on specific property
     */
    getPropVals: function (array, propsName) {
        return array.map(function (curr) {
            return curr[propsName];
        });
    },
};
