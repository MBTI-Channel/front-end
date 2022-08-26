import styled from 'styled-components';
import LikeIcon from '../../../../public/icon/like.svg';
import CommentIcon from '../../../../public/icon/comment.svg';
import EyeIcon from '../../../../public/icon/eye.svg';
import BookmarkIcon from '../../../../public/Icons/Basic/Bookmark.svg';
import { Row } from '../Wrapper.style';
import PropTypes from 'prop-types';
import { RED, MBTI_BLUE, DARK_GREY_2 } from '../../../styles/color';
import { useRecoilValue } from 'recoil';
import { isBookMarkedState, isImgState } from '../../../store';

const Wrapper = styled.div.attrs((props) => ({
	marginTop: props.marginTop,
}))`
	width: 795px;
	background-color: white;
	border: 1px solid #ebebeb;
	border-radius: 4px;
	margin-top: ${(props) => props.marginTop};
`;

const UsernameContainer = styled.div`
	/* max-height: 24px; */
	display: flex;
	align-items: center;

	& .username-mbti-container {
		color: ${MBTI_BLUE};
	}
`;

const TextContainer = styled.div`
	/* max-width: 763px; */
	/* display: flex; */
	text-overflow: ellipsis;

	& .content-thumbnail {
		display: flex;
		max-width: 745px;
		max-height: 63px;
		margin: 24px 0px;
		border: transparent;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	& img {
		/* position: relative; */
		/* top: 0px; */
		/* left: 608px; */
	}
`;

const ContentContainer = styled.div`
	position: relative;
	bottom: 16px;
	display: flex;
	padding-left: 16px;

	& .content-count {
		display: flex;
		color: #333333;
		align-items: center;
	}
`;

const ThumbnailBar = ({
	marginTop,
	mbti,
	userNickname,
	title,
	likesCount,
	commentCount,
	viewCount,
	updateDatetime,
	textContent,
	isBookmarked,
	imgSrc,
}) => {
	return (
		<Wrapper marginTop={marginTop}>
			<Row alignItems='center'>
				<TextContainer style={{ padding: '16px' }}>
					<UsernameContainer>
						{isBookmarked ? (
							<>
								<BookmarkIcon fill={RED} />
								<span
									className='small-text-bold'
									style={{
										color: MBTI_BLUE,
										marginLeft: '6px',
									}}
								>
									[{mbti}] {userNickname}
								</span>
							</>
						) : (
							<>
								<span
									className='small-text-bold'
									style={{
										color: MBTI_BLUE,
									}}
								>
									[{mbti}] {userNickname}
								</span>
							</>
						)}
						<span
							className='label'
							style={{
								marginLeft: '6px',
							}}
						>
							{title}
						</span>
					</UsernameContainer>
					<div
						className='content-thumbnail paragraph'
						style={{ color: DARK_GREY_2 }}
					>
						{textContent}
					</div>
				</TextContainer>
				{imgSrc ? <img src={imgSrc} width='155px' /> : <></>}
			</Row>

			<ContentContainer className='small-text-regular'>
				<div className='content-count'>
					<LikeIcon width='16px' height='16px' fill='#4F4C4C' />
					<span style={{ marginLeft: '4px' }}>{likesCount}</span>
				</div>
				<div className='content-count' style={{ marginLeft: '12px' }}>
					<CommentIcon width='16px' height='16px' fill='#4F4C4C' />
					<span style={{ marginLeft: '4px' }}>{commentCount}</span>
				</div>
				<div className='content-count' style={{ marginLeft: '12px' }}>
					<EyeIcon width='16px' height='16px' />
					<span style={{ marginLeft: '4px' }}>{viewCount}</span>
				</div>
				<div className='content-count' style={{ marginLeft: '12px' }}>
					<span>{updateDatetime}</span>
				</div>
			</ContentContainer>
		</Wrapper>
	);
};

export default ThumbnailBar;
