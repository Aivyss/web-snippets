export interface IArrays {
    shuffle(array: any[]): any[];
    repeatPop(array: any[], times: number): any[];
    getPropVals(array: any[], propsName: string): any[];
}

const arrays: IArrays = {
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
        for (let i = 0; i < times; i += 1) {
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
        return array.map(curr => {
            return curr[propsName];
        });
    },
};
