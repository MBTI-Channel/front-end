import React from 'react';
import { Button } from '../../elements/button/Button';
import Bookmark from '../../elements/customIcon/Bookmark';
import LikeIcon from '../../elements/customIcon/LikeIcon';

const BookNLike = (props) => {
	return (
		<>
			<Button
				width={'6.3rem'}
				height={'2.5rem'}
				padding={'8px 16px'}
				gap={'4px'}
				className='middle-text-bold'
			>
				<LikeIcon fill='white' />
				좋아요
			</Button>
			<Button
				width={'6.3rem'}
				height={'2.5rem'}
				padding={'8px 16px'}
				gap={'4px'}
				className='middle-text-bold'
				bg={'white'}
				color={'black'}
				border={'1.5px solid #1973fb'}
			>
				<Bookmark stroke={'black'} />
				북마크
			</Button>
		</>
	);
};

export default BookNLike;
