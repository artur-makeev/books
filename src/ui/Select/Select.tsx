import styles from './Select.module.css';
import type { SelectProps } from './Select.props';
import { useEffect } from 'react';
import { useState } from 'react';

// The first element in options is the default value

export const Select = ({
	operateInputData,
	label,
	options,
	className,
}: SelectProps) => {
	const [inputValue, setInputValue] = useState(options[0].value);

	useEffect(() => {
		operateInputData(inputValue);
	}, [inputValue, operateInputData]);

	return (
		<div className={className}>
			<label htmlFor={label.id} className={styles.label}>
				{label.name}
			</label>
			<select
				id={label.id}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				className={styles.select}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
};
