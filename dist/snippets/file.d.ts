import { fileUnit } from './enums';
export declare type FileUnit = fileUnit.BYTE | fileUnit.KB | fileUnit.MB | fileUnit.TB | fileUnit.GB;
export interface IFile {
    imageValid(file: File, limitSize?: string): {
        isValid: boolean;
        errMessage: string;
    };
    rescaleSize(size: string, rescaleUnit: FileUnit): string;
}
declare const file: IFile;
export default file;
