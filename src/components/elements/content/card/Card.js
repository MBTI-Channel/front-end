import React from 'react';
import styled from 'styled-components';
import {
	TitleContainer,
	ContentContainer,
	BaseBox,
	ProgressBarContainer,
} from './Card.styled';
// import { LikeLogo } from 'icon/like.svg';
// import SampleImage from '/sample_image.jpeg';

const CardContainer = styled.div`
	width: 290px;
	height: 218px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	background-image: url('/sample_image.jpeg');
`;

const Card = () => {
	const title = `'깻잎 논쟁'...당신의 생각은?`;
	const agreeRate = '54%';
	const disagreeRate = '46%';

	const AgreeRate = styled(BaseBox)`
		background-color: #0085ff;
		width: ${agreeRate};
	`;

	const DisagreeRate = styled(BaseBox)`
		background-color: #eb7b7b;
		width: 100%;
	`;

	return (
		<CardContainer>
			<TitleContainer>{title}</TitleContainer>
			<ContentContainer>
				<div className='agree-container'>
					<img
						src='/icon/like.svg'
						style={{
							width: '12.74px',
							height: '14px',
							stroke: '#0085ff',
							fill: '#0085ff',
						}}
					/>
					찬성 {agreeRate}
				</div>
				<div className='disagree-container'>
					<img
						src='/icon/unlike.svg'
						style={{
							width: '12.74px',
							height: '14px',
						}}
					/>
					반대 {disagreeRate}
				</div>
			</ContentContainer>
			<ProgressBarContainer>
				<DisagreeRate />
				<AgreeRate />
			</ProgressBarContainer>
		</CardContainer>
	);
};

export default Card;
