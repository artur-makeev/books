import BooksStore from '@/store/BooksStore';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { createContext } from 'react';

const inter = Inter({
	subsets: ['cyrillic', 'latin'],
});

const books = new BooksStore();

export const Context = createContext({
	books,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Context.Provider
			value={{
				books,
			}}
		>
			<div className={inter.className}>
				<Component {...pageProps} />
			</div>
		</Context.Provider>
	);
}
