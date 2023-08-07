import styles from './about-section.module.scss';
import Heading from '../../common-ui/heading/heading';
import TwoColumns from '../../common-ui/two-columns/two-columns';
import Image from 'next/image';

const AboutSection = () => {
	return (
		<div className='content-wrapper'>
			<TwoColumns>
				<div className={styles.about_col}>
					<div className={styles.content}>
						<Heading text='About Us' color='light' />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
							viverra vitae arcu at luctus. Integer lobortis pulvinar purus, nec
							accumsan felis placerat et. Vivamus faucibus mauris dictum,
							pretium dolor ut, semper quam.
						</p>
						<p>
							Etiam massa elit, condimentum quis enim ac, iaculis dignissim
							nisi. Pellentesque scelerisque iaculis sagittis. Sed mi diam,
							tristique et convallis ut, tristique quis nulla.
						</p>
					</div>
				</div>
				<div className={styles.about_col}>
					<figure className={styles.about_fig}>
						<Image
							src='/images/about.jpg'
							alt='About Axery'
							width={500}
							height={500}
						/>
					</figure>
				</div>
			</TwoColumns>
		</div>
	);
};

export default AboutSection;
