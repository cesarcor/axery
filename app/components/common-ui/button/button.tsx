import styles from './button.module.scss';

interface ButtonProps {
	text: string;
	link: string;
}

const Button = ({ text, link }: ButtonProps) => {
	return (
		<a href={link} className={styles.btn}>
			{text}
		</a>
	);
};

export default Button;
