import styled from 'styled-components';
import LikeIcon from '../../../../public/icon/like.svg';
import CommentIcon from '../../../../public/icon/comment.svg';
import EyeIcon from '../../../../public/icon/eye.svg';
import BookmarkIcon from '../../../../public/Icons/Basic/Bookmark.svg';
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
	/* width: 219px; */
	max-height: 24px;
	display: flex;
	align-items: center;

	& .username-mbti-container {
		color: ${MBTI_BLUE};
	}
`;

const TextContainer = styled.div`
	/* max-width: 763px; */
	text-overflow: ellipsis;

	& .content-thumbnail {
		display: flex;
		max-width: 745px;
		max-height: 63px;
		margin: 24px 0px;
		border: transparent;
		overflow: hidden;
		text-overflow: ellipsis;
		border: 1px solid red;
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
	replyCount,
	viewCount,
	updateDatetime,
	textContent,
	isBookmarked,
	imgSrc,
}) => {
	return (
		<Wrapper marginTop={marginTop}>
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
				<div className='content-thumbnail'>
					<div className='paragraph' style={{ color: DARK_GREY_2 }}>
						{textContent ||
							'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content s more-or-less normal distribution of letters, as opposed to using Content here, content s more-or-less normal distribution of letters, as opposed to using Content here, content smore-or-less normal distribution of letters, as opposed to using Content here, content smore-or-less normal distribution of letters, as opposed to using Content here, content s more-or-less normal distribution of letters, as opposed to using Content here, content s more-or-less normal distribution of letters, as opposed to using Content here, content s v more-or-less normal distribution of letters, as opposed to using Content here, content s'}
					</div>
				</div>
				{imgSrc ? <img src={imgSrc} /> : <></>}
			</TextContainer>
			<ContentContainer>
				<div className='content-count'>
					<LikeIcon width='16px' height='16px' fill='#4F4C4C' />
					<span style={{ marginLeft: '4px' }}>{likesCount}</span>
				</div>
				<div className='content-count' style={{ marginLeft: '12px' }}>
					<CommentIcon width='16px' height='16px' fill='#4F4C4C' />
					<span style={{ marginLeft: '4px' }}>{replyCount}</span>
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
