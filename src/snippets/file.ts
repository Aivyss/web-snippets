import {imageExt, fileUnit} from './enums';

export type FileUnit = fileUnit.BYTE | fileUnit.KB | fileUnit.MB | fileUnit.TB | fileUnit.GB;

export interface IFile {
    imageValid(file: File, limitSize?: string): {isValid: boolean; errMessage: string};
    rescaleSize(size: string, rescaleUnit: FileUnit): string;
}
const file: IFile = {
    imageValid(file, limitSize?) {
        const fileName = file.name;
        const regex = /\.[a-zA-Z0-9]+/;
        const ext = regex.exec(fileName)![0];
        const size = file.size;
        let isValid: boolean;
        let errorMessage: string;

        if (limitSize) {
            const limit = parseInt(this.rescaleSize(limitSize, fileUnit.BYTE).split('byte')[0]);
            if (size > limit) return {isValid: false, errMessage: 'EXCEED_LIMIT_SIZE'};
        }

        switch (ext.toUpperCase()) {
            case imageExt.GIF:
            case imageExt.JFIF:
            case imageExt.JPEG:
            case imageExt.JPG:
            case imageExt.PNG:
                isValid = true;
                errorMessage = '';
                break;
            default:
                isValid = false;
                errorMessage = 'NOT_IMAGE_FILE';
        }

        return {isValid: isValid, errMessage: errorMessage!};
    },

    rescaleSize(size, rescaleUnit) {
        const numberRegex = /[0-9]+/;
        const unitRegex = /[a-zA-Z]+/;
        let sizeNum = Number(numberRegex.exec(size)![0]);
        const unit = unitRegex.exec(size)![0];
        let offset = 1; // normalize to byte

        // any unit -> byte unit
        switch (unit.toLowerCase()) {
            case fileUnit.TB:
                offset *= 1024;
            case fileUnit.GB:
                offset *= 1024;
            case fileUnit.MB:
                offset *= 1024;
            case fileUnit.KB:
                offset *= 1024;
            case fileUnit.BYTE:
                offset *= 1;
                break;
            default:
                offset *= 1;
                break;
        }

        sizeNum *= offset;

        // byte unit -> target unit
        switch (rescaleUnit.toLowerCase()) {
            case fileUnit.TB:
                sizeNum /= 1024;
            case fileUnit.GB:
                sizeNum /= 1024;
            case fileUnit.MB:
                sizeNum /= 1024;
            case fileUnit.KB:
                sizeNum /= 1024;
            case fileUnit.BYTE:
                sizeNum /= 1;
            default:
                sizeNum /= 1;
                break;
        }

        return `${sizeNum} ${rescaleUnit.toLowerCase()}`;
    },
};

export default file;
