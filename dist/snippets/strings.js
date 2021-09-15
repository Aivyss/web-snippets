"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strings = {
    getHashTags: function (str) {
        var regex = /#[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣ぁ-ゔァ-ヴー々〆〤一-龥]+/;
        return regex.exec(str);
    },
    getPhoneNum: function (str) {
        var regex = /\d+-\d+-\d+/;
        return regex.exec(str);
    },
    getHashStr: function (str) {
        return '';
    },
    getPartCount: function (str, part) {
        var regex = new RegExp(part);
        var arr = regex.exec(str);
        if (arr)
            return arr.length;
        else
            return 0;
    },
};
exports.default = strings;
