import {strPatt} from './enums';

export interface Istrings {
    getHashTags(str: string): string[];
    getDashPhoneNum(str: string): string[];
    getPhoneNum(str: string, count: number): string[];
    getPartCount(str: string, part: string): number;
    parseCookieString(cookie: string): {[idx: string]: string};
}

const strings: Istrings = {
    getHashTags: str => {
        const regex = /#[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣ぁ-ゔァ-ヴー々〆〤一-龥]+/g;
        return str.match(regex) as string[];
    },
    getDashPhoneNum: str => {
        const regex = /\d+-\d+-\d+/g;
        return str.match(regex) as string[];
    },
    getPhoneNum: (str, count) => {
        const regex = new RegExp('\\d{' + count + ',' + count + '}', 'g');
        return str.match(regex) as string[];
    },
    getPartCount: (str, part) => {
        const regex = new RegExp(part, 'g');
        const arr = str.match(regex);

        if (arr) return arr.length;
        else return 0;
    },
    parseCookieString(cookie) {
        const temp = cookie.split(';');
        const strArr = temp.splice(0, temp.length - 1);
        const cookieJson: {[idx: string]: string} = {};
        strArr.forEach(curr => {
            const idx = curr.indexOf('=');
            const key = curr.substring(0, idx);
            const val = curr.substring(idx + 1);
            cookieJson[key] = val;
        });

        return cookieJson;
    },
};

export default strings;
