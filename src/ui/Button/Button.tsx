import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({ children, className, ...props }: ButtonProps) => (
	<button className={cn(styles.button, className)} {...props}>
		{children}
	</button>
);
