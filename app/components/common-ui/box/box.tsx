import styles from './box.module.scss';

interface BoxProps {
	children: React.ReactNode;
	color: 'dark' | 'light';
}

const Box = ({ children, color }: BoxProps) => {
	return (
		<div
			className={`${styles.box} ${
				color === 'dark' ? styles.dark_box : styles.light_box
			}`}
		>
			{children}
		</div>
	);
};

export default Box;
