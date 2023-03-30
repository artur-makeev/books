import styles from './BooksMain.module.css';
import { BooksCount } from '../BooksCount/BooksCount';
import { BooksList } from '../BooksList/BooksList';
import { observer } from 'mobx-react-lite';
import { Pagination } from '../Pagination/Pagination';

export const BooksMain = observer(() => (
	<div className={styles.container}>
		<BooksCount />
		<BooksList />
		<Pagination />
	</div>
));
