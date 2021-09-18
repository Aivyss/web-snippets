import {strPatt} from './enums';

export interface Istrings {
    getHashTags(str: string): string[];
    getDashPhoneNum(str: string): string[];
    getPhoneNum(str: string, count: number): string[];
    getHashStr(strList: string[]): string;
    getPartCount(str: string, part: string): number;
}

const strings: Istrings = {
    getHashTags: str => {
        const regex = /#[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣ぁ-ゔァ-ヴー々〆〤一-龥]+/;
        return regex.exec(str) as string[];
    },
    getDashPhoneNum: str => {
        const regex = /\d+-\d+-\d+/;
        return regex.exec(str) as string[];
    },
    getPhoneNum: (str, count) => {
        const regex = new RegExp('\\d{' + count + ',' + count + '}');
        return regex.exec(str) as string[];
    },
    getHashStr: str => {
        return '';
    },
    getPartCount: (str, part) => {
        const regex = new RegExp(part);
        const arr = regex.exec(str);

        if (arr) return arr.length;
        else return 0;
    },
};

export default strings;
