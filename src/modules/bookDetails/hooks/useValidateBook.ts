import { Context } from '@/pages/_app';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export function useValidateBook() {
	const { books } = useContext(Context);
	const router = useRouter();

	useEffect(() => {
		if (!books.selectedBook.id) {
			router.push('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [books.selectedBook.id]);

	return 0;
}
