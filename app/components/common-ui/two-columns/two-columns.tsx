import styles from './two-columns.module.scss';

interface TwoColumnsProps {
	children: React.ReactNode;
}

const TwoColumns = ({ children }: TwoColumnsProps) => {
	return <div className={styles.two_columns}>{children}</div>;
};

export default TwoColumns;
