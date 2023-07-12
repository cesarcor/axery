function ArrowSVG(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width='256px'
			height='256px'
			viewBox='0 0 256 256'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
				<path d='M0 0H256V256H0z' />
				<path
					stroke='#FFF'
					strokeWidth={8}
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M128 216L128 40'
				/>
				<path
					stroke='#FFF'
					strokeWidth={8}
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M56 112L128 40 200 112'
				/>
			</g>
		</svg>
	);
}

export default ArrowSVG;
