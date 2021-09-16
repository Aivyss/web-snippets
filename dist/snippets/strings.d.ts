interface Istrings {
    getHashTags(str: string): string[];
    getDashPhoneNum(str: string): string[];
    getPhoneNum(str: string, count: number): string[];
    getHashStr(strList: string[]): string;
    getPartCount(str: string, part: string): number;
}
declare const strings: Istrings;
export default strings;
export { Istrings };
