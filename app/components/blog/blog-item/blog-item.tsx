import styles from './blog-item.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../common-ui/button/button';

const BlogItem = () => {
	return (
		<article className={styles.blog_item}>
			<div className={styles.container}>
				<div className={styles.img_col}>
					<figure className={styles.fig}>
						<Image
							src='/images/l_handbag.jpg'
							alt='lorem ipsum'
							width='300'
							height='250'
						/>
					</figure>
					<span className={styles.date}>12.03</span>
				</div>
				<div className={styles.content}>
					<h3 className={styles.title}>
						<Link href='/' className='text-white'>
							Lorem ipsum is simply dummy text of the printing industry
						</Link>
					</h3>
					<p className={styles.snippet}>
						Lorem ipsum is simply dummy text of the printing industry. Lorem
						ipsum has been the industrys standard dummy text
					</p>
					<Button text='Read More' link='#' buttonType='line' />
				</div>
			</div>
		</article>
	);
};

export default BlogItem;
