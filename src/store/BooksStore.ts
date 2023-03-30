import type { QueryOptions } from '@/models/Query';
import { makeAutoObservable } from 'mobx';
import type { Book } from '../models/Book';

export interface Query {
	query: string;
	options: QueryOptions;
}

export default class BooksStore {
	_books: Book[];
	_total: number;
	_search: string;
	_page: number;
	_maxResults: number;
	_currentQuery: Query;
	_loading: boolean;
	_loadingMore: boolean;
	_selectedBook: Book;
	_errorLoading: boolean;

	constructor() {
		this._books = [];
		this._total = 0;
		this._search = '';
		this._page = 1;
		this._maxResults = 30;
		this._currentQuery = {
			query: '',
			options: {
				subject: '',
				orderBy: 'relevance',
				maxResults: 30,
				startIndex: 0,
			},
		};
		this._loading = false;
		this._loadingMore = false;
		this._selectedBook = {
			id: '',
			selfLink: '',
			volumeInfo: {
				title: '',
				authors: [],
				description: '',
				imageLinks: {
					smallThumbnail: '',
					thumbnail: '',
				},
				categories: [],
			},
		};
		this._errorLoading = false;
		makeAutoObservable(this);
	}

	// filters books based on existence of id and id uniqueness
	setBooks(books: Book[]) {
		const uniqueBooks = books.filter((book, index) => {
			if (book.id) {
				return books.findIndex((b) => b.id === book.id) === index;
			} else {
				return false;
			}
		});
		this._books = uniqueBooks;
	}

	setTotal(total: number) {
		this._total = total;
	}

	setSearch(search: string) {
		this._search = search;
	}

	setPage(page: number) {
		this._page = page;
	}

	setCurrentQuery(query: Query) {
		this._currentQuery = query;
	}

	setLoading(newState: boolean) {
		this._loading = newState;
	}

	setLoadingMore(newState: boolean) {
		this._loadingMore = newState;
	}

	setSelectedBook(book: Book) {
		this._selectedBook = book;
	}

	setErrorLoading(state: boolean) {
		this._errorLoading = state;
	}

	get books(): Book[] {
		return this._books;
	}

	get total(): number {
		return this._total;
	}

	get search(): string {
		return this._search;
	}

	get page(): number {
		return this._page;
	}

	get maxResults(): number {
		return this._maxResults;
	}

	get currentQuery(): Query {
		return this._currentQuery;
	}

	get loading(): boolean {
		return this._loading;
	}

	get loadingMore(): boolean {
		return this._loadingMore;
	}

	get selectedBook(): Book {
		return this._selectedBook;
	}

	get errorLoading(): boolean {
		return this._errorLoading;
	}
}
