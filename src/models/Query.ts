export type OrderBy = 'relevance' | 'newest';

export interface QueryOptions {
	subject: string;
	orderBy: OrderBy;
	maxResults: number;
	startIndex: number;
}
