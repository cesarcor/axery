import styles from './button.module.scss';

interface ButtonProps {
	text: string;
}

const Button = ({ text }: ButtonProps) => {
	return (
		<a href='#' className={styles.btn}>
			{text}
		</a>
	);
};

export default Button;
