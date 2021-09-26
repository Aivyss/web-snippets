"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strings = {
    getHashTags: function (str) {
        var regex = /#[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣ぁ-ゔァ-ヴー々〆〤一-龥]+/g;
        return str.match(regex);
    },
    getDashPhoneNum: function (str) {
        var regex = /\d+-\d+-\d+/g;
        return str.match(regex);
    },
    getPhoneNum: function (str, count) {
        var regex = new RegExp('\\d{' + count + ',' + count + '}', 'g');
        return str.match(regex);
    },
    getPartCount: function (str, part) {
        var regex = new RegExp(part, 'g');
        var arr = str.match(regex);
        if (arr)
            return arr.length;
        else
            return 0;
    },
    parseCookieString: function (cookie) {
        var temp = cookie.split(';');
        var strArr = temp.splice(0, temp.length - 1);
        var cookieJson = {};
        strArr.forEach(function (curr) {
            var idx = curr.indexOf('=');
            var key = curr.substring(0, idx);
            var val = curr.substring(idx + 1);
            cookieJson[key] = val;
        });
        return cookieJson;
    },
};
exports.default = strings;
