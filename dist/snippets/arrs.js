"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrs = {
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
        var poppedArray = [];
        for (var i = 0; i < times; i += 1) {
            poppedArray.push(array.pop());
        }
        return poppedArray;
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
    /**
     *
     * @param array
     * @returns sorted arrayß
     */
    numericalHeapSort: function (array) {
        var _a, _b, _c;
        var length = array.length;
        // make max heap structure
        for (var idx = 1; idx < length; idx += 1) {
            var c = idx;
            do {
                var rootIdx = Math.floor((c - 1) / 2);
                if (array[rootIdx] < array[c]) {
                    _a = [array[c], array[rootIdx]], array[rootIdx] = _a[0], array[c] = _a[1];
                }
                c = rootIdx; // go to parent
            } while (c != 0);
        }
        for (var i = length - 1; i >= 0; i -= 1) {
            // move maximum value to last leaf node.
            _b = [array[i], array[0]], array[0] = _b[0], array[i] = _b[1];
            // repeat to make max heap structure
            var root = 0;
            var c = 1;
            do {
                // find bigger direct children
                c = 2 * root + 1;
                if (array[c] < array[c + 1] && c < i - 1) {
                    c += 1;
                }
                // if it was found, exchange
                if (array[root] < array[c] && c < i) {
                    _c = [array[c], array[root]], array[root] = _c[0], array[c] = _c[1];
                }
                root = c;
            } while (c < i); // do not exceed sorted area
        }
        return array;
    },
};
exports.default = arrs;
