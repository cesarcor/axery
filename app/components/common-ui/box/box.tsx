import styles from './box.module.scss';

interface BoxProps {
	children: React.ReactNode;
	color?: 'dark' | 'light';
	boxBackgroundImg?: string;
}

const Box = ({ children, color, boxBackgroundImg }: BoxProps) => {
	const boxStyle = {
		backgroundImage: `url(${boxBackgroundImg})`,
	};

	const boxClassnames = color === 'dark' ? styles.dark_box : styles.light_box;

	const boxBackgroundImgImgClaasname = boxBackgroundImg
		? styles.has_bg_image
		: '';

	return (
		<div
			className={`${styles.box} ${boxClassnames} ${boxBackgroundImgImgClaasname}`}
			style={boxStyle}
		>
			{children}
		</div>
	);
};

export default Box;
