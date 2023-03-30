import styles from './Search.module.css';
import cn from 'classnames';
import type { SearchProps } from './Search.props';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export const Search = ({
	operateInputData,
	className,
	...props
}: SearchProps) => {
	const [inputText, setInputText] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		operateInputData(inputText);
	};

	const handleClick = () => operateInputData(inputText);

	return (
		<form
			method='post'
			onSubmit={handleSubmit}
			className={cn(styles.container, className)}
			{...props}
		>
			<input
				value={inputText}
				className={styles.search}
				onChange={(e) => setInputText(e.target.value)}
			/>
			<SearchIcon
				fontSize='large'
				className={styles.icon}
				onClick={handleClick}
			/>
		</form>
	);
};
