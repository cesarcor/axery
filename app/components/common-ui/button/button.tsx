import styles from './button.module.scss';
import ArrowSVG from '../../svgs/arrow-svg';

interface ButtonProps {
	text: string;
	link: string;
	buttonType?: 'solid' | 'line';
}

const Button = ({ text, link, buttonType = 'solid' }: ButtonProps) => {
	const buttonTypeClassname =
		buttonType === 'solid' ? styles.solid : styles.line;

	return (
		<a href={link} className={`${styles.btn} ${buttonTypeClassname}`}>
			<span className={styles.btn_content}>
				<span>{text}</span>
				<ArrowSVG />
			</span>
		</a>
	);
};

export default Button;
