import { fetchBooks } from '@/api/fetchBooks';
import type { QueryOptions } from '@/models/Query';
import { Context } from '@/pages/_app';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

export function useFetch(
	query: string,
	subject: string,
	orderBy: 'relevance' | 'newest',
	savedQuery: string
) {
	const { books } = useContext(Context);
	const router = useRouter();

	useEffect(() => {
		(async function name() {
			if (query !== '' || savedQuery !== '') {
				try {
					books.setLoading(true);
					books.setPage(1);
					books.setBooks([]);
					books.setErrorLoading(false);
					if (router.pathname !== '/') {
						router.push('/');
					}

					const options: QueryOptions = {
						subject: subject,
						orderBy: orderBy,
						maxResults: books.maxResults,
						startIndex: 0,
					};

					const currentQuery = query || savedQuery;
					const response = await fetchBooks(currentQuery, options);
					books.setBooks(response?.items);
					books.setTotal(response?.totalItems);
					books.setCurrentQuery({
						query: query,
						options: {
							subject: subject,
							orderBy: orderBy,
							maxResults: books.maxResults,
							startIndex: 0,
						},
					});
					localStorage.setItem('query', currentQuery);
				} catch (e) {
					console.log(e);
				} finally {
					books.setLoading(false);
				}
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [subject, query, orderBy]);

	return 0;
}
