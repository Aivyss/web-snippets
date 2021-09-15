import {imageExt, fileUnit} from './enums';

interface IFile {
    imageValid(file: File, limitSize?: string): {isValid: boolean; errMessage: string};
    rescaleSize(size: string, rescaleUnit: string): string;
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
            const limit = parseInt(this.rescaleSize(limitSize, 'byte').split('byte')[0]);
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

        switch (rescaleUnit.toLowerCase()) {
            case fileUnit.TB:
                sizeNum /= Math.pow(1024, 4);
                break;
            case fileUnit.GB:
                sizeNum /= Math.pow(1024, 3);
                break;
            case fileUnit.MB:
                sizeNum /= Math.pow(1024, 2);
                break;
            case fileUnit.KB:
                sizeNum /= 1024;
                break;
            case fileUnit.BYTE:
                sizeNum /= 1;
                break;
            default:
                sizeNum /= 1;
                break;
        }

        return `${sizeNum} ${rescaleUnit.toLowerCase()}`;
    },
};

export default file;
export {IFile};
