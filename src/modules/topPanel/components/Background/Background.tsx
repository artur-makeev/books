import styles from './Background.module.css';
import background from '../../../../../public/top-background.jpg';
import Image from 'next/image';

export const Background = () => (
	<div className={styles.bgWrap}>
		<Image
			alt='books'
			src={background}
			placeholder='blur'
			quality={100}
			fill
			sizes='100vw'
			style={{
				objectFit: 'cover',
			}}
		/>
	</div>
);
