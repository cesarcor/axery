import styles from './blog-section.module.scss';
import BlogGrid from '../blog-grid/blog-grid';
import SectionOverview from '../../common-ui/section-overview/section-overview';

const BlogSection = () => {
	return (
		<div className={styles.blog_section}>
			<div className='content-wrapper'>
				<SectionOverview
					sectionTitle='Our Blog'
					sectionTitleColor='light'
					sectionDescription='Lorem ipsum is simply dummy text from the print industry'
					buttonLink='#'
					buttonText='Open Page'
				/>
				<BlogGrid />
			</div>
		</div>
	);
};

export default BlogSection;
