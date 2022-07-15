import { useRouter } from 'next/router';
import React from 'react';
import {
	PageButton,
	PageButtonContainer,
	ClickedPageButton,
} from './PagingButton.styled';

const PagingButton = () => {
	const router = useRouter();
	const onClick = (e) => {
		const value = e.target.value;
		if (value === '1') {
			router.push('/comment/1');
		}
		if (value === '2') {
			router.push('/comment/2');
		}
		if (value === '3') {
			router.push('/comment/3');
		}
	};

	return (
		<>
			<PageButtonContainer>
				<PageButton value='<'>&#60;</PageButton>
				<ClickedPageButton value='1' onClick={onClick}>
					1
				</ClickedPageButton>
				<PageButton value='2' onClick={onClick}>
					2
				</PageButton>
				<PageButton value='3' onClick={onClick}>
					3
				</PageButton>
				<PageButton value='>'>&#62;</PageButton>
			</PageButtonContainer>
		</>
	);
};

export default PagingButton;
