import { Htag, Search, Select } from '@/ui';
import styles from './TopPanel.module.css';
import { Background } from '../Background/Background';
import { categoriesOptions, categoriesLabel } from './consts/categories';
import { sortingLabel, sortingOptions } from './consts/sorting';
import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import type { OrderBy } from '@/models/Query';

export const TopPanel = () => {
	const [query, setQuery] = useState('');
	const [subject, setSubject] = useState('');
	const [orderBy, setOrderBy] = useState<OrderBy>('relevance');
	const [savedQuery, setSavedQuery] = useState('');

	useEffect(() => {
		const localQuery = localStorage.getItem('query');
		if (localQuery) {
			setSavedQuery(localQuery);
		}
	}, []);

	useFetch(query, subject, orderBy, savedQuery);

	return (
		<div className={styles.container}>
			<Background />
			<Htag tag='h1' className={styles.mainHeading}>
				Search for books
			</Htag>
			<Search operateInputData={setQuery} className={styles.search} />
			<div className={styles.filters}>
				<Select
					className={styles.selects}
					operateInputData={setSubject}
					label={categoriesLabel}
					options={categoriesOptions}
					id='categories'
				/>
				<Select
					className={styles.selects}
					operateInputData={(input) => setOrderBy(input as OrderBy)}
					label={sortingLabel}
					options={sortingOptions}
					id='sorting'
				/>
			</div>
		</div>
	);
};
