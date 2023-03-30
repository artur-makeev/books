import type { Book } from '@/models/Book';
import { useEffect, useState } from 'react';

export function useValidateSmallImage(book: Book) {
	const [imageExists, setImageExists] = useState(false);

	useEffect(() => {
		if (book.volumeInfo?.imageLinks?.smallThumbnail) {
			setImageExists(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return imageExists;
}
