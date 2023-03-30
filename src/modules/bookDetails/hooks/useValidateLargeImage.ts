import { Context } from '@/pages/_app';
import { useContext, useEffect, useState } from 'react';

export function useValidateLargeImage() {
	const { books } = useContext(Context);
	const [imageExists, setImageExists] = useState(false);

	useEffect(() => {
		if (books.selectedBook.volumeInfo?.imageLinks?.thumbnail) {
			setImageExists(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return imageExists;
}
