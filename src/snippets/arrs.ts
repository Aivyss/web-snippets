export interface IArrs {
    shuffle(array: any[]): any[];
    repeatPop(array: any[], times: number): any[];
    getPropVals(array: any[], propsName: string): any[];
    numericalHeapSort(array: number[]): number[];
}

const arrs: IArrs = {
    /**
     *
     * @param array
     * @returns shuffled array
     */
    shuffle: function (array) {
        const shuffledList: any[] = [];

        for (let i = array.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() - (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            shuffledList.push(array.pop()!);
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
        let poppedArray: any[] = [];
        for (let i = 0; i < times; i += 1) {
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
        return array.map(curr => {
            return curr[propsName];
        });
    },
    /**
     *
     * @param array
     * @returns sorted arrayß
     */
    numericalHeapSort(array) {
        const length = array.length;

        // make max heap structure
        for (let idx = 1; idx < length; idx += 1) {
            let c = idx;

            do {
                const rootIdx = Math.floor((c - 1) / 2);

                if (array[rootIdx] < array[c]) {
                    [array[rootIdx], array[c]] = [array[c], array[rootIdx]];
                }

                c = rootIdx; // go to parent
            } while (c != 0);
        }

        for (let i = length - 1; i >= 0; i -= 1) {
            // move maximum value to last leaf node.
            [array[0], array[i]] = [array[i], array[0]];

            // repeat to make max heap structure
            let root = 0;
            let c = 1;
            do {
                // find bigger direct children
                c = 2 * root + 1;
                if (array[c] < array[c + 1] && c < i - 1) {
                    c += 1;
                }
                // if it was found, exchange
                if (array[root] < array[c] && c < i) {
                    [array[root], array[c]] = [array[c], array[root]];
                }

                root = c;
            } while (c < i); // do not exceed sorted area
        }

        return array;
    },
};
export default arrs;
