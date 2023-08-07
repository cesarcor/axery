import styles from './heading.module.scss';
import { Bebas_Neue } from 'next/font/google';

interface HeadingProps {
	text: string;
	color: 'dark' | 'light';
}

const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

const Heading = ({ text, color }: HeadingProps) => {
	return (
		<h2
			className={`${styles.heading} ${bebas_neue.className}`}
			style={{ color: color === 'light' ? '#FFFFFF' : '#212121' }}
		>
			{text}
		</h2>
	);
};

export default Heading;
