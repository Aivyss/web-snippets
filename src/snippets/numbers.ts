export interface INumbers {
    getRandInt(start: number, end: number): number;
    getRandDouble(start: number, end: number): number;
}

const numbers: INumbers = {
    /**
     *
     * @param start
     * @param end
     * @returns randoum number(integer) [start, end]
     */
    getRandInt: (start, end) => {
        const range = end - start;
        const randOffset = Math.round(Math.random() * range);

        return start + randOffset;
    },
    /**
     *
     * @param start
     * @param end
     * @returns random number(Double) [start, end)
     */
    getRandDouble: (start, end) => {
        const range = end - start;
        const randOffset = Math.random() * range;

        return start + randOffset;
    },
};

export default numbers;
