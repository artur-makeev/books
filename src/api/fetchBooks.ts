import type { OrderBy, QueryOptions } from '@/models/Query';
import axios from 'axios';

export interface GoogleParams {
	q: string;
	key: string;
	maxResults: number;
	startIndex: number;
	orderBy?: OrderBy;
}

export const fetchBooks = async (query: string, options: QueryOptions) => {
	try {
		if (!process.env.NEXT_PUBLIC_API_KEY) {
			throw new Error('api key is not provided in .env');
		}

		if (query === '') {
			throw new Error('query should not be empty');
		}

		const params: GoogleParams = {
			key: process.env.NEXT_PUBLIC_API_KEY,
			q: query,
			maxResults: options.maxResults,
			startIndex: options.startIndex,
			orderBy: options.orderBy || 'relevance',
		};

		if (options.subject) {
			params.q = `${params.q}+subject:${options.subject}`;
		}

		const response = await axios.get(
			process.env.NEXT_PUBLIC_API_URL as string,
			{ params }
		);

		const data = response.data;

		return { items: data.items, totalItems: data.totalItems };
	} catch (error) {
		console.error(error);
	}
};
