import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { Book } from '../../../../models/Book';

export interface BookCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	book: Book;
}
