import styles from './search-suggestions-modal.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const SearchSuggestionsModal = () => {
	return (
		<div className={styles.search_suggestions_modal}>
			<div className={styles.container}>
				<ul className={styles.search_suggestions}>
					<li className={styles.suggestion_item}>
						<Link href='#' className={styles.suggestion_link}>
							<Image
								src='/images/l_handbag.jpg'
								alt='Product Name'
								className={styles.suggestion_img}
								width={50}
								height={50}
							/>
							<span>Product Name</span>
						</Link>
					</li>
					<li className={styles.suggestion_item}>
						<Link href='#' className={styles.suggestion_link}>
							<Image
								src='/images/l_handbag.jpg'
								alt='Product Name'
								className={styles.suggestion_img}
								width={50}
								height={50}
							/>
							<span>Product Name</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SearchSuggestionsModal;
