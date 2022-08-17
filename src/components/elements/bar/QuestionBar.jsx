import styled from 'styled-components';
import LikeIcon from '../customIcon/LikeIcon';
import UnlikeIcon from '../customIcon/UnlikeIcon';
import CommentIcon from '../../../../public/icon/comment.svg';
import {
	LIGHT_GREY_1,
	DARK_GREY_2,
	RED,
	MBTI_BLUE,
} from '../../../styles/color';

const Wrapper = styled.div`
	display: flex;
	width: 795px;
	height: 112px;
	border: 1px solid ${LIGHT_GREY_1};
	background-color: white;

	& img {
		width: 80px;
		height: 80px;
		margin-left: 36px;
		margin-top: 16px;
	}

	& .update-datetime {
		position: relative;
		top: 52px;
		left: 349px;
	}
`;

const ContentContainer = styled.div.attrs((props) => ({
	isAgree: props.isAgree,
}))`
	display: flex;
	flex-direction: column;
	margin-left: 16px;
	margin-top: 20px;

	& .title-container {
		color: black;
		font-weight: 700;
		font-size: 18px;
		line-height: 18px;
	}

	& .isAgree-container {
		color: ${(props) => (props.isAgree ? MBTI_BLUE : RED)};
		font-size: 14px;
		line-height: 21px;
		font-weight: 700;
		margin-top: 11px;
	}
`;

const ReactionContainer = styled.div`
	display: flex;
	margin-top: 6px;

	& .content-count {
		display: flex;
		color: ${DARK_GREY_2};
		align-items: center;
	}
`;

const QuestionBar = ({
	imgSrc,
	title,
	isAgree,
	likesCount,
	unlikesCount,
	replyCount,
	updateDatetime,
}) => {
	// TODO: 폰트 정리 후 아래 부분에 폰트 적용하기
	return (
		<Wrapper>
			<img src='/sample_image.jpeg' alt='공식질문 이미지' />
			<ContentContainer>
				<div className='title-container'>‘깻잎 논쟁’... 당신의 생각은?</div>
				<div className='isAgree-container'>{isAgree ? '찬성함' : '반대함'}</div>
				<ReactionContainer>
					<div className='content-count'>
						<LikeIcon fill='rgba(51, 51, 51, 1)' />
						<span style={{ marginLeft: '4px' }}>{likesCount || 200}</span>
					</div>
					<div className='content-count' style={{ marginLeft: '12px' }}>
						<UnlikeIcon fill='rgba(51, 51, 51, 1)' />
						<span style={{ marginLeft: '4px' }}>{unlikesCount || 200}</span>
					</div>
					<div className='content-count' style={{ marginLeft: '12px' }}>
						<CommentIcon />
						<span style={{ marginLeft: '4px' }}>{replyCount || 125}</span>
					</div>
				</ReactionContainer>
			</ContentContainer>
			<div className='update-datetime'>{updateDatetime} 02/22 23:02</div>
		</Wrapper>
	);
};

export default QuestionBar;
