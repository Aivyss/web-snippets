"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eNumbers = exports.fileUnit = exports.imageExt = exports.strPatt = void 0;
var strPatt;
(function (strPatt) {
    strPatt["SPECIAL"] = "special";
    strPatt["NUMBER"] = "number";
    strPatt["CAPITAL"] = "capital";
    strPatt["NO_CAPITAL"] = "no_capital";
    strPatt["NO_SPECIAL"] = "no_special";
    strPatt["NO_NUMBER"] = "no_number";
})(strPatt = exports.strPatt || (exports.strPatt = {}));
var imageExt;
(function (imageExt) {
    imageExt["JPEG"] = ".JPEG";
    imageExt["JFIF"] = ".JFIF";
    imageExt["JPG"] = ".JPG";
    imageExt["GIF"] = ".GIF";
    imageExt["PNG"] = ".PNG";
})(imageExt = exports.imageExt || (exports.imageExt = {}));
var fileUnit;
(function (fileUnit) {
    fileUnit["BYTE"] = "byte";
    fileUnit["KB"] = "kb";
    fileUnit["MB"] = "mb";
    fileUnit["GB"] = "gb";
    fileUnit["TB"] = "tb";
})(fileUnit = exports.fileUnit || (exports.fileUnit = {}));
var eNumbers;
(function (eNumbers) {
    eNumbers["RANDOM_NUM"] = "randomNum";
})(eNumbers = exports.eNumbers || (exports.eNumbers = {}));
