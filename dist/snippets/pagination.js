"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pagination = /** @class */ (function () {
    function Pagination(totFeedCount, currentPage, pageGroupCount, feedPerPage) {
        this._totFeedCount = totFeedCount;
        this._feedPerPage = feedPerPage;
        this._currentPage = currentPage;
        this._totPage = Math.ceil(totFeedCount / feedPerPage);
        this._pageGroupCount = pageGroupCount;
        // boundary fix
        if (this._currentPage <= 1)
            this._currentPage = 1;
        else if (this._currentPage >= this._totPage)
            this._currentPage = this._totPage;
        // page grouping
        var groupOffset = Math.ceil(this._totPage / this._pageGroupCount);
        if (this._currentPage % this._pageGroupCount === 0) {
            this._pageGroup = [this._pageGroupCount - this._currentPage + 1, this._currentPage];
        }
        else {
            var groupEnd = Math.floor(this._currentPage / this._pageGroupCount);
            if (groupEnd === 0)
                groupEnd = this._pageGroupCount;
            else
                groupEnd = (groupEnd + 1) * this._pageGroupCount;
            this._pageGroup = [groupEnd - this._pageGroupCount + 1, groupEnd];
        }
        // feed offset
        var offset = (this._currentPage - 1) * this._feedPerPage;
        this._feedRange = [offset, this._feedPerPage];
    }
    Object.defineProperty(Pagination.prototype, "currentPage", {
        // getters
        get: function () {
            return this._currentPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "feedRange", {
        get: function () {
            return this._feedRange;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "totPage", {
        get: function () {
            return this._totPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "totFeedCount", {
        get: function () {
            return this._totFeedCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "pageGroup", {
        get: function () {
            return this._pageGroup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "pageGroupCount", {
        get: function () {
            return this._pageGroupCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagination.prototype, "feedPerPage", {
        get: function () {
            return this._feedPerPage;
        },
        enumerable: false,
        configurable: true
    });
    return Pagination;
}());
exports.default = Pagination;
