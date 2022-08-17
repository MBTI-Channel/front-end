import React from 'react';
import styled from 'styled-components';
import LikeIcon from '../../../../public/icon/like.svg';
import UnLikeIcon from '../../../../public/icon/unlike.svg';
import { SUB_BLUE, RED } from '../../../styles/color';

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

	& span {
		margin-left: 4px;
	}
`;

export const ProgressBarContainer = styled.div`
	width: 242px;
	height: 7px;
	position: relative;
	margin-top: 1px;
	margin-bottom: 16px;
`;

const BaseBox = styled.div`
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	border-radius: 3px;
`;

const AgreeRate = styled(BaseBox).attrs((props) => ({
	agreeRate: props.agreeRate,
}))`
	background-color: ${SUB_BLUE};
	width: ${(props) => props.agreeRate};
`;

const DisagreeRate = styled(BaseBox)`
	background-color: ${RED};
	width: 100%;
`;

const CardContainer = styled.div.attrs((props) => ({
	src: props.src,
}))`
	width: 290px;
	height: 218px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	/* align-items: center; */
	border-radius: 8px;
	background-image: url(${(props) => props.src});
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
`;

const Card = ({ src, title, agreeRate, disagreeRate }) => {
	return (
		<CardContainer src={src}>
			<div style={{ paddingLeft: '24px' }}>
				<div className='heading-3-label' style={{ color: 'white' }}>
					{title} ‘깻잎 논쟁’... 당신의 생각은?
				</div>
				<ContentContainer className='small-text-regular'>
					<div className='agree-container'>
						<LikeIcon width='16px' height='16px' fill='#3D8AFF' />
						<span>찬성 {agreeRate}</span>
					</div>
					<div className='disagree-container'>
						<UnLikeIcon width='16px' height='16px' fill='#DF1D1D' />
						<span>반대 {disagreeRate}</span>
					</div>
				</ContentContainer>
				<ProgressBarContainer>
					<DisagreeRate />
					<AgreeRate />
				</ProgressBarContainer>
			</div>
		</CardContainer>
	);
};

export default Card;
