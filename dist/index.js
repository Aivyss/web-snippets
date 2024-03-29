"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageExt = exports.eNumbers = exports.fileUnit = exports.strPatt = exports.writer = exports.reader = exports.arrs = exports.files = exports.numbers = exports.strings = exports.account = exports.Pagination = void 0;
var account_1 = __importDefault(require("./snippets/account"));
exports.account = account_1.default;
var strings_1 = __importDefault(require("./snippets/strings"));
exports.strings = strings_1.default;
var numbers_1 = __importDefault(require("./snippets/numbers"));
exports.numbers = numbers_1.default;
var arrs_1 = __importDefault(require("./snippets/arrs"));
exports.arrs = arrs_1.default;
var pagination_1 = __importDefault(require("./snippets/pagination"));
exports.Pagination = pagination_1.default;
var file_1 = __importDefault(require("./snippets/file"));
exports.files = file_1.default;
var enums_1 = require("./snippets/enums");
Object.defineProperty(exports, "strPatt", { enumerable: true, get: function () { return enums_1.strPatt; } });
Object.defineProperty(exports, "fileUnit", { enumerable: true, get: function () { return enums_1.fileUnit; } });
Object.defineProperty(exports, "eNumbers", { enumerable: true, get: function () { return enums_1.eNumbers; } });
Object.defineProperty(exports, "imageExt", { enumerable: true, get: function () { return enums_1.imageExt; } });
var reader_1 = require("./snippets/reader");
Object.defineProperty(exports, "reader", { enumerable: true, get: function () { return reader_1.reader; } });
Object.defineProperty(exports, "writer", { enumerable: true, get: function () { return reader_1.writer; } });
