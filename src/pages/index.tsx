import Head from 'next/head';
//import styles from '@/styles/Home.module.css';
import { TopPanel } from '@/modules/topPanel';
import { BooksMain } from '@/modules/books/';

export default function Home() {
	return (
		<>
			<Head>
				<title>Search for books</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<TopPanel />
			<BooksMain />
		</>
	);
}
