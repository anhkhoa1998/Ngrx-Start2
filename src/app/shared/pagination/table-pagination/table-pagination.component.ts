import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { PageInfo } from '../pagination.model';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: [ './table-pagination.component.scss' ]
})
export class TablePaginationComponent implements OnInit, OnChanges {

  @Input() paging: PageInfo;
  @Input() paginationStyle = 'style-1';
  @Output() pageChange = new EventEmitter<number>();

  totalPages: Array<number>;
  itemFrom: number;
  itemTo: number;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.paging) {
      this.totalPages = new Array(this.paging.totalPages);
      this.showEntries();
    }
  }

  ngOnInit(): void {

  }

  changePageNumber(page) {
    this.pageChange.emit(page);
  }

  nextPage() {
    this.paging.currentPage = this.paging.currentPage + 1;

    if (this.paging.currentPage >= this.totalPages.length) {
      this.paging.currentPage = this.totalPages.length;
    }

    this.pageChange.emit(this.paging.currentPage);
  }

  previousPage() {
    this.paging.currentPage = this.paging.currentPage - 1;

    if (this.paging.currentPage <= 0) {
      this.paging.currentPage = 1;
    }

    this.pageChange.emit(this.paging.currentPage);
  }

  firstPage() {
    this.paging.currentPage = 1;
    this.pageChange.emit(this.paging.currentPage);
  }

  lastPage() {
    this.paging.currentPage = this.paging.totalPages;
    this.pageChange.emit(this.paging.currentPage);
  }

  showEntries() {
    if (this.totalPages.length === 0) {
      this.itemFrom = 0;
      this.itemTo = 0;
      return;
    }
    this.itemFrom = (this.paging.currentPage - 1) * this.paging.pageSize + 1;
    this.itemTo = this.paging.currentPage * this.paging.pageSize;
    if (this.itemTo > this.paging.totalCount) {
      this.itemTo = this.paging.totalCount;
    }
  }


}
