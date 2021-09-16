interface Istrings {
    getHashTags(str: string): string[];
    getPhoneNum(str: string): string[];
    getHashStr(strList: string[]): string;
    getPartCount(str: string, part: string): number;
}
declare const strings: Istrings;
export default strings;
export { Istrings };
