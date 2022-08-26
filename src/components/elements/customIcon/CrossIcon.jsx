import PropTyps from 'prop-types';

const CrossIcon = ({
	className,
	onClick,
	value,
	fill,
	width = 24,
	height = 24,
	style,
}) => {
	return (
		<button style={style} value={value} onClick={onClick}>
			<svg
				className={className}
				width={width}
				height={height}
				viewBox='0 0 24 24'
				fill={fill}
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M19.3745 21.2182C19.8836 21.7272 20.709 21.7272 21.2181 21.2182C21.7273 20.7091 21.7273 19.8836 21.2181 19.3745L13.8437 12L21.2182 4.62545C21.7273 4.11634 21.7273 3.29093 21.2182 2.78182C20.709 2.27272 19.8836 2.27272 19.3745 2.78182L12 10.1563L4.62548 2.78184C4.11638 2.27273 3.29096 2.27273 2.78185 2.78184C2.27275 3.29094 2.27275 4.11638 2.78185 4.62548L10.1563 12L2.78187 19.3745C2.27276 19.8836 2.27276 20.7089 2.78187 21.2182C3.29097 21.7272 4.11639 21.7272 4.6255 21.2182L12 13.8436L19.3745 21.2182Z'
					fill='#4F4C4C'
				/>
			</svg>
		</button>
	);
};

export default CrossIcon;
