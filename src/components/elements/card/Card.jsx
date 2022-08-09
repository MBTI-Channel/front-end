import React from 'react';
import styled from 'styled-components';
import LikeIcon from '../../../../public/icon/like.svg';
import UnLikeIcon from '../../../../public/icon/unlike.svg';

export const TitleContainer = styled.div`
	width: 242px;
	color: white;
`;

export const ContentContainer = styled.div`
	width: 242px;
	height: 18px;
	margin-top: 10px;
	display: flex;
	justify-content: space-between;

	& .agree-container {
		display: flex;
		width: 100px;
		font-size: 12px;
		line-height: 18px;
		align-items: center;
		color: white;
	}

	& .disagree-container {
		display: flex;
		width: 100px;
		font-size: 12px;
		line-height: 18px;
		align-items: center;
		color: white;
		justify-content: flex-end;
	}
`;

export const ProgressBarContainer = styled.div`
	width: 242px;
	height: 7px;
	position: relative;
	margin-top: 1px;
	margin-bottom: 16px;
`;

export const BaseBox = styled.div`
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	border-radius: 3px;
`;

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

const Card = ({ src, title, agreeRate, disagreeRate }) => {
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
