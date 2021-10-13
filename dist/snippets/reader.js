"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writer = exports.reader = void 0;
var fs_1 = __importDefault(require("fs"));
var path = __importStar(require("path"));
function reader(property, file) {
    if (property === void 0) { property = ''; }
    if (file === void 0) { file = 'default.json'; }
    var item = JSON.parse(fs_1.default.readFileSync(path.join(__dirname, '..', '..', '..', 'config', 'default.json'), 'utf-8'));
    var overrideItem = JSON.parse(fs_1.default.readFileSync(path.join(__dirname, '..', '..', '..', 'config', file), 'utf-8'));
    if (property) {
        item = item[property];
        overrideItem = overrideItem[property];
    }
    if (file !== 'default.json') {
        try {
            Object.keys(overrideItem).forEach(function (curr) {
                item[curr] = overrideItem[curr];
            });
        }
        catch (e) {
            item = overrideItem;
        }
    }
    return item;
}
exports.reader = reader;
function writer(json, file) {
    if (file === void 0) { file = 'default.json'; }
    var flag = true;
    try {
        var item = JSON.parse(fs_1.default.readFileSync(path.join(__dirname, '..', '..', '..', 'config', file), 'utf-8'));
        item = __assign(__assign({}, item), json);
        fs_1.default.writeFileSync(path.join(__dirname, '..', '..', '..', 'config', file), JSON.stringify(item), 'utf-8');
    }
    catch (err) {
        flag = false;
    }
    return flag;
}
exports.writer = writer;
