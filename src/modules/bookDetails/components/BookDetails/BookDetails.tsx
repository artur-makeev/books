import styles from './BookDetails.module.css';
import type { ImageLoaderProps } from 'next/image';
import { useContext } from 'react';
import Image from 'next/image';
import { Context } from '@/pages/_app';
import { showAllCategory } from '../../helpers/showAllCategory';
import { useValidateLargeImage } from '../../hooks/useValidateLargeImage';
import { useValidateBook } from '../../hooks/useValidateBook';

export const BookDetails = () => {
	const { books } = useContext(Context);

	const myLoader = ({ src, width, quality }: ImageLoaderProps) =>
		`${
			books.selectedBook.volumeInfo?.imageLinks?.thumbnail
		}/${src}?w=${width}&q=${quality || 75}`;

	useValidateBook();

	const imageExists = useValidateLargeImage();

	if (!books.selectedBook.id) {
		return <></>;
	}

	return (
		<div className={styles.container}>
			<div className={styles.imageBlock}>
				<div className={styles.imageContainer}>
					{imageExists ? (
						<Image
							className={styles.image}
							loader={myLoader}
							fill
							alt={books.selectedBook.volumeInfo.title}
							src={
								books.selectedBook.volumeInfo?.imageLinks?.thumbnail as string
							}
						/>
					) : (
						<div className={styles.imageBlank} />
					)}
				</div>
			</div>
			<div className={styles.descriptionBlock}>
				<div className={styles.category}>
					{showAllCategory(books.selectedBook.volumeInfo.categories)}
				</div>
				<div className={styles.title}>
					{books.selectedBook.volumeInfo.title}
				</div>
				<div className={styles.author}>
					{books.selectedBook.volumeInfo.authors}
				</div>
				<div className={styles.description}>
					{books.selectedBook.volumeInfo.description}
				</div>
			</div>
		</div>
	);
};
