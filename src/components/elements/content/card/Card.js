import React from 'react';
import styled from 'styled-components';
import {
	TitleContainer,
	ContentContainer,
	BaseBox,
	ProgressBarContainer,
} from './Card.styled';
import LikeIcon from '../../../../../public/icon/like.svg';
import UnLikeIcon from '../../../../../public/icon/unlike.svg';

const CardContainer = styled.div.attrs((props) => ({
	src: props.src,
}))`
	width: 290px;
	height: 218px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	border-radius: 8px;
	background-image: url(${(props) => props.src});
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
`;

const Card = ({ src }) => {
	const title = `'깻잎 논쟁'...당신의 생각은?`; // 제목 받아오기
	const agreeRate = '54%'; // 찬성률 받아오기
	const disagreeRate = '46%'; // 반대율 받아오기

	const AgreeRate = styled(BaseBox)`
		background-color: #0085ff;
		width: ${agreeRate};
	`;

	const DisagreeRate = styled(BaseBox)`
		background-color: #eb7b7b;
		width: 100%;
	`;

	return (
		//백그라운드에 검정 필터 씌우기
		<CardContainer src={src}>
			<TitleContainer>{title}</TitleContainer>
			<ContentContainer>
				<div className='agree-container'>
					<LikeIcon width='14px' height='14px' fill='#3D8AFF' />
					<span style={{ marginLeft: '4px' }}>찬성 {agreeRate}</span>
				</div>
				<div className='disagree-container'>
					<UnLikeIcon width='14px' height='14px' fill='#DF1D1D' />
					<span style={{ marginLeft: '4px' }}>반대 {disagreeRate}</span>
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
