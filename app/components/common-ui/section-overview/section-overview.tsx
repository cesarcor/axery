import styles from './section-overview.module.scss';
import Heading from '../heading/heading';
import Button from '../button/button';

interface SectionOverviewProps {
	sectionTitle: string;
	sectionDescription: string;
	buttonText: string;
	buttonLink: string;
}

const SectionOverview = ({
	sectionTitle,
	sectionDescription,
	buttonText,
	buttonLink,
}: SectionOverviewProps) => {
	return (
		<div className={styles.section_overview}>
			<div>
				<Heading text={sectionTitle} color='dark' />
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
