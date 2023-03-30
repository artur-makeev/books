import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	operateInputData: (input: string) => void;
}
