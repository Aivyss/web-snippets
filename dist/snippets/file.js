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
        var errorMessage;
        if (limitSize) {
            var limit = parseInt(this.rescaleSize(limitSize, enums_1.fileUnit.BYTE).split('byte')[0]);
            if (size > limit)
                return { isValid: false, errMessage: 'EXCEED_LIMIT_SIZE' };
        }
        switch (ext.toUpperCase()) {
            case enums_1.imageExt.GIF:
            case enums_1.imageExt.JFIF:
            case enums_1.imageExt.JPEG:
            case enums_1.imageExt.JPG:
            case enums_1.imageExt.PNG:
                isValid = true;
                errorMessage = '';
                break;
            default:
                isValid = false;
                errorMessage = 'NOT_IMAGE_FILE';
        }
        return { isValid: isValid, errMessage: errorMessage };
    },
    rescaleSize: function (size, rescaleUnit) {
        var numberRegex = /[0-9]+/;
        var unitRegex = /[a-zA-Z]+/;
        var sizeNum = Number(numberRegex.exec(size)[0]);
        var unit = unitRegex.exec(size)[0];
        var offset = 1; // normalize to byte
        // any unit -> byte unit
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
        // byte unit -> target unit
        switch (rescaleUnit.toLowerCase()) {
            case enums_1.fileUnit.TB:
                sizeNum /= 1024;
            case enums_1.fileUnit.GB:
                sizeNum /= 1024;
            case enums_1.fileUnit.MB:
                sizeNum /= 1024;
            case enums_1.fileUnit.KB:
                sizeNum /= 1024;
            case enums_1.fileUnit.BYTE:
                sizeNum /= 1;
            default:
                sizeNum /= 1;
                break;
        }
        return sizeNum + " " + rescaleUnit.toLowerCase();
    },
};
exports.default = file;
