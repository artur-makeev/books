import styles from './BooksCount.module.css';
import { useContext } from 'react';
import { Context } from '@/pages/_app';
import { observer } from 'mobx-react-lite';

export const BooksCount = observer(() => {
	const { books } = useContext(Context);

	if (books.books.length === 0) return <></>;

	return <div className={styles.container}>Found {books.total} results</div>;
});
