import './styles/globals.scss';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const open_sans = Open_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '700', '800'],
});

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
				<Header />
				<main className='site-main'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
