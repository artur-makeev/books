import styles from './BooksList.module.css';
import { BookCard } from '../BookCard/BookCard';
import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from 'react';
import { Context } from '@/pages/_app';
import { observer } from 'mobx-react-lite';

export const BooksList = observer(() => {
	const { books } = useContext(Context);
	return (
		<div className={styles.container}>
			{!books.loading &&
				books.books.length > 0 &&
				books.books.map((book) => <BookCard key={book.id} book={book} />)}
			{(books.loading || books.loadingMore) && (
				<div className={styles.spinnerContainer}>
					<CircularProgress color='inherit' />
				</div>
			)}
		</div>
	);
});
