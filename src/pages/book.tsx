import { BookDetails } from '@/modules/bookDetails';
import { TopPanel } from '@/modules/topPanel';
import Head from 'next/head';
import { useContext } from 'react';
import { Context } from './_app';

export default function Book() {
	const { books } = useContext(Context);

	return (
		<>
			<Head>
				<title>
					{books.selectedBook.volumeInfo.title || 'Search for books'}
				</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<TopPanel />
			<BookDetails />
		</>
	);
}
