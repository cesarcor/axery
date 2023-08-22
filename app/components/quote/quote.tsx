import styles from './quote.module.scss';
import Box from '../common-ui/box/box';
import { Qwitcher_Grypen } from 'next/font/google';

const qwitcher_gryphen = Qwitcher_Grypen({
	subsets: ['latin'],
	weight: ['700'],
});

const Quote = () => {
	return (
		<Box boxBackgroundImg='/images/l_handbag.jpg'>
			<div className={`${styles.quote} text-white`}>
				<div>
					<h4>
						FASHION IS WHAT DESIGNERS OFFER YOU FOUR TIMES A YEAR. AND THE STYLE
						IS WHAT YOU CHOOSE
					</h4>
					<span className={qwitcher_gryphen.className}>- LAUREN HUTTON -</span>
				</div>
			</div>
		</Box>
	);
};

export default Quote;
