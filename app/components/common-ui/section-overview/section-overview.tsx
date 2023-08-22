import styles from './section-overview.module.scss';
import Heading from '../heading/heading';
import Button from '../button/button';

interface SectionOverviewProps {
	sectionTitle: string;
	sectionTitleColor?: 'dark' | 'light';
	sectionDescription: string;
	buttonText: string;
	buttonLink: string;
}

const SectionOverview = ({
	sectionTitle,
	sectionTitleColor = 'dark',
	sectionDescription,
	buttonText,
	buttonLink,
}: SectionOverviewProps) => {
	return (
		<div className={styles.section_overview}>
			<div>
				<Heading text={sectionTitle} color={sectionTitleColor} />
			</div>
			<div>
				<p>{sectionDescription}</p>
			</div>
			<div className={styles.btn_flex_item}>
				<Button text={buttonText} link={buttonLink} />
			</div>
		</div>
	);
};

export default SectionOverview;
