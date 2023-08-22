import styles from './blog-grid.module.scss';
import BlogItem from '../blog-item/blog-item';

const BlogGrid = () => {
	return (
		<div className={styles.blog_grid}>
			<BlogItem />
			<BlogItem />
			<BlogItem />
			<BlogItem />
		</div>
	);
};

export default BlogGrid;
