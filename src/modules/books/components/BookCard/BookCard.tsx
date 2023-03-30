import type { BookCardProps } from './BookCard.props';
import styles from './BookCard.module.css';
import Image from 'next/image';
import { useContext } from 'react';
import type { ImageLoaderProps } from 'next/image';
import { showAuthors } from '../../helpers/showAuthors';
import { showCategory } from '../../helpers/showCategory';
import { Context } from '@/pages/_app';
import { useRouter } from 'next/router';
import { truncate } from '../../helpers/truncate';
import { useValidateSmallImage } from '../../hooks/useValidateSmallImage';
import { addHTTPS } from '@/helpers/addHTTPS';

export const BookCard = ({ book }: BookCardProps) => {
	const router = useRouter();
	const { books } = useContext(Context);

	const myLoader = ({ src, width, quality }: ImageLoaderProps) =>
		`${addHTTPS(
			book.volumeInfo?.imageLinks?.smallThumbnail as string
		)}/${src}?w=${width}&q=${quality || 75}`;

	const openBookDetails = () => {
		books.setSelectedBook(book);
		router.push('/book');
	};

	const imageExists = useValidateSmallImage(book);

	return (
		<div className={styles.container} onClick={openBookDetails}>
			<div className={styles.imageContainer}>
				{imageExists ? (
					<Image
						className={styles.image}
						loader={myLoader}
						width={128}
						height={205}
						alt={book.volumeInfo.title}
						src={addHTTPS(
							book.volumeInfo?.imageLinks?.smallThumbnail as string
						)}
					/>
				) : (
					<div className={styles.imageBlank} />
				)}
			</div>
			<div className={styles.category}>
				{showCategory(book.volumeInfo.categories)}
			</div>
			<div className={styles.title}>{truncate(book.volumeInfo.title, 93)}</div>
			<div className={styles.author}>
				{truncate(showAuthors(book.volumeInfo.authors), 62)}
			</div>
		</div>
	);
};
