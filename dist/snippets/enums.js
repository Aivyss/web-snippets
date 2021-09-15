"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUnit = exports.imageExt = exports.eNumbers = exports.strPatt = void 0;
var strPatt;
(function (strPatt) {
    strPatt["SPECIAL_CHARACTER"] = "special";
    strPatt["NUMBER"] = "number";
    strPatt["CAPITAL"] = "capital";
})(strPatt || (strPatt = {}));
exports.strPatt = strPatt;
var imageExt;
(function (imageExt) {
    imageExt["JPEG"] = ".JPEG";
    imageExt["JFIF"] = ".JFIF";
    imageExt["JPG"] = ".JPG";
    imageExt["GIF"] = ".GIF";
    imageExt["PNG"] = ".PNG";
})(imageExt || (imageExt = {}));
exports.imageExt = imageExt;
var fileUnit;
(function (fileUnit) {
    fileUnit["BYTE"] = "byte";
    fileUnit["KB"] = "kb";
    fileUnit["MB"] = "mb";
    fileUnit["GB"] = "gb";
    fileUnit["TB"] = "tb";
})(fileUnit || (fileUnit = {}));
exports.fileUnit = fileUnit;
var eNumbers;
(function (eNumbers) {
    eNumbers["RANDOM_NUM"] = "randomNum";
})(eNumbers || (eNumbers = {}));
exports.eNumbers = eNumbers;
