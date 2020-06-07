export interface PageInfo {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
  pageNumber?: number;
  sortBy?: string;
  searchBy?: string;
  keyWord?: string;
}

export const defaultPageInfo = {
  currentPage: 1,
  pageSize: 1,
  totalCount: null,
  totalPages: null,
  hasPrevious: false,
  hasNext: false,
  pageNumber: 1,
  keyWord: null,
  searchBy: null,
  sortBy: null,
};

export interface Pagination {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
  pageNumber?: number;
  sortBy?: string;
  searchBy?: string;
  keyWord?: string;
}

export const defaultPagination = {
  currentPage: 1,
  pageSize: 1,
  totalCount: null,
  totalPages: null,
  hasPrevious: false,
  hasNext: false,
};

;
