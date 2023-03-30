import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Option {
	value: string;
	name: string;
}

export interface Label {
	id: string;
	name: string;
}

export interface SelectProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	operateInputData: (input: string) => void;
	label: Label;
	options: Option[];
}
