import './styles/globals.scss';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const open_sans = Open_Sans({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
	title: 'Axery - Elegant Leather Backpacks',
	description: 'Elegant Leather Backpacks',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={open_sans.className}>
				<main className='site-main'>{children}</main>
			</body>
		</html>
	);
}
