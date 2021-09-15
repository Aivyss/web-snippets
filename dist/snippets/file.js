"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var file = {
    imageValid: function (file, limitSize) {
        var fileName = file.name;
        var regex = /\.[a-zA-Z0-9]+/;
        var ext = regex.exec(fileName)[0];
        var size = file.size;
        var isValid;
        var errorMassage;
        if (limitSize) {
            var limit = parseInt(this.rescaleSize(limitSize, 'byte').split('byte')[0]);
            if (size > limit)
                return { isValid: false, errMassage: 'EXCEED_LIMIT_SIZE' };
        }
        switch (ext) {
            case enums_1.imageExt.GIF:
            case enums_1.imageExt.JFIF:
            case enums_1.imageExt.JPEG:
            case enums_1.imageExt.JPG:
            case enums_1.imageExt.PNG:
                isValid = true;
                errorMassage = '';
                break;
            default:
                isValid = false;
                errorMassage = 'NOT_IMAGE_FILE';
        }
        return { isValid: isValid, errMassage: errorMassage };
    },
    rescaleSize: function (size, rescaleUnit) {
        var numberRegex = /[0-9]+/;
        var unitRegex = /[a-zA-Z]+/;
        var sizeNum = Number(numberRegex.exec(size)[0]);
        var unit = unitRegex.exec(size)[0];
        var offset = 1; // normalize to byte
        switch (unit.toLowerCase()) {
            case enums_1.fileUnit.TB:
                offset *= 1024;
            case enums_1.fileUnit.GB:
                offset *= 1024;
            case enums_1.fileUnit.MB:
                offset *= 1024;
            case enums_1.fileUnit.KB:
                offset *= 1024;
            case enums_1.fileUnit.BYTE:
                offset *= 1;
                break;
            default:
                offset *= 1;
                break;
        }
        sizeNum *= offset;
        switch (rescaleUnit.toLowerCase()) {
            case enums_1.fileUnit.TB:
                sizeNum /= Math.pow(1024, 4);
                break;
            case enums_1.fileUnit.GB:
                sizeNum /= Math.pow(1024, 3);
                break;
            case enums_1.fileUnit.MB:
                sizeNum /= Math.pow(1024, 2);
                break;
            case enums_1.fileUnit.KB:
                sizeNum /= 1024;
                break;
            case enums_1.fileUnit.BYTE:
                sizeNum /= 1;
                break;
            default:
                sizeNum /= 1;
                break;
        }
        return sizeNum + " " + rescaleUnit.toLowerCase();
    },
};
exports.default = file;