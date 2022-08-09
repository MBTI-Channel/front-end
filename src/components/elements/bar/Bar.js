import React from 'react';
import {
	HeaderImage,
	TextWrapper,
	Title,
	Author,
	ActionContainer,
	Action,
	DefaultBarContainer,
} from './Bar.styled';

const Bar = (props) => {
	const headerImageSrc = props.src;
	const MBTI = props.MBTI;
	const likes = props.likes;
	const comments = props.comments;

	return (
		<DefaultBarContainer>
			<HeaderImage src='/sample_image.jpeg' alt='사용자 설정 이미지' />
			<TextWrapper>
				<Title>제목제목제목</Title>
				<Author>작성자 | {MBTI || 'MBTI'}</Author>
				<ActionContainer>
					<Action>
						<img src='/icon/like.svg' />
						{likes || 200}
					</Action>
					<Action>
						<img src='/icon/comment.svg' />
						{comments || 25}
					</Action>
				</ActionContainer>
			</TextWrapper>
		</DefaultBarContainer>
	);
};

export default Bar;
