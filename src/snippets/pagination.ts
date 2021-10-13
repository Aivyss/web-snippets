export default class Pagination {
    private _totFeedCount: number; // total feed counts
    private _feedRange: number[]; // feed range in current page [offset, count]
    private _feedPerPage: number; // feed count per page
    private _totPage: number; // total page
    private _currentPage: number; // current page
    private _pageGroupCount: number; // page group count in webpage
    private _pageGroup: number[]; // pageGroup in current page [start, end]

    constructor(totFeedCount: number, currentPage: number, pageGroupCount: number, feedPerPage: number) {
        this._totFeedCount = totFeedCount;
        this._feedPerPage = feedPerPage;
        this._currentPage = currentPage;
        this._totPage = Math.ceil(totFeedCount / feedPerPage);
        this._pageGroupCount = pageGroupCount;

        // boundary fix
        if (this._currentPage <= 1) this._currentPage = 1;
        else if (this._currentPage >= this._totPage) this._currentPage = this._totPage;

        // page grouping
        const groupOffset = Math.ceil(this._totPage / this._pageGroupCount);
        if (this._currentPage % this._pageGroupCount === 0) {
            this._pageGroup = [this._pageGroupCount - this._currentPage + 1, this._currentPage];
        } else {
            let groupEnd = Math.floor(this._currentPage / this._pageGroupCount);
            if (groupEnd === 0) groupEnd = this._pageGroupCount;
            else groupEnd = (groupEnd + 1) * this._pageGroupCount;
            this._pageGroup = [groupEnd - this._pageGroupCount + 1, groupEnd];
        }

        // feed offset
        let offset = (this._currentPage - 1) * this._feedPerPage + 1;
        this._feedRange = [offset, this._feedPerPage];
    }

    // getters
    get currentPage() {
        return this._currentPage;
    }
    get feedRange() {
        return this._feedRange;
    }
    get totPage() {
        return this._totPage;
    }
    get totFeedCount() {
        return this._totFeedCount;
    }
    get pageGroup() {
        return this._pageGroup;
    }
    get pageGroupCount() {
        return this._pageGroupCount;
    }
    get feedPerPage() {
        return this._feedPerPage;
    }
}
