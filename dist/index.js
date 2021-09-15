"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUnit = exports.strPatt = exports.files = exports.numbers = exports.strings = exports.account = void 0;
var account_1 = __importDefault(require("./snippets/account"));
exports.account = account_1.default;
var strings_1 = __importDefault(require("./snippets/strings"));
exports.strings = strings_1.default;
var numbers_1 = __importDefault(require("./snippets/numbers"));
exports.numbers = numbers_1.default;
var file_1 = __importDefault(require("./snippets/file"));
exports.files = file_1.default;
var enums_1 = require("./snippets/enums");
Object.defineProperty(exports, "strPatt", { enumerable: true, get: function () { return enums_1.strPatt; } });
Object.defineProperty(exports, "fileUnit", { enumerable: true, get: function () { return enums_1.fileUnit; } });
