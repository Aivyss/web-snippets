export default class Pagination {
    private _totFeedCount;
    private _feedRange;
    private _feedPerPage;
    private _totPage;
    private _currentPage;
    private _pageGroupCount;
    private _pageGroup;
    constructor(totFeedCount: number, currentPage: number, pageGroupCount: number, feedPerPage: number);
    get currentPage(): number;
    get feedRange(): number[];
    get totPage(): number;
    get totFeedCount(): number;
    get pageGroup(): number[];
    get pageGroupCount(): number;
    get feedPerPage(): number;
}
