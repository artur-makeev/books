import styles from './Pagination.module.css';
import { Context } from '@/pages/_app';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { fetchBooks } from '@/api/fetchBooks';
import { Button } from '@/ui';

export const Pagination = observer(() => {
	const { books } = useContext(Context);

	const loadMoreBooks = async () => {
		try {
			books.setLoadingMore(true);
			books.setPage(books.page + 1);

			const response = await fetchBooks(books.currentQuery.query, {
				...books.currentQuery.options,
				startIndex:
					books.currentQuery.options.startIndex +
					books.maxResults * (books.page - 1),
			});

			if (response?.items) {
				books.setBooks([...books.books].concat(response.items));
			} else {
				books.setErrorLoading(true);
				books.setTotal(books.books.length);
			}
		} catch (e) {
			console.log(e);
			books.setErrorLoading(true);
		} finally {
			books.setLoadingMore(false);
		}
	};

	if (
		books.errorLoading ||
		books.books.length === 0 ||
		books.books.length >= books.total ||
		books.loadingMore
	) {
		return <></>;
	}

	return (
		<div className={styles.container}>
			<Button onClick={loadMoreBooks}>Load more</Button>
		</div>
	);
});
