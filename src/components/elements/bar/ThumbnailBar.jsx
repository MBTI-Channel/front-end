import styled from 'styled-components';
import LikeIcon from '../../../../public/icon/like.svg';
import CommentIcon from '../../../../public/icon/comment.svg';
import EyeIcon from '../../../../public/icon/eye.svg';
import BookmarkIcon from '../../../../public/Icons/Basic/Bookmark.svg';
import { useRecoilValue } from 'recoil';
import { isBookMarkedState, isImgState } from '../../../store';

const Wrapper = styled.div.attrs((props) => ({
	marginTop: props.marginTop,
}))`
	width: 795px;
	height: 185px;
	background-color: white;
	border: 1px solid #ebebeb;
	border-radius: 4px;
	margin-top: ${(props) => props.marginTop};
`;

const UsernameContainer = styled.div`
	/* width: 219px; */
	height: 24px;
	display: flex;
	align-items: center;

	& .username-mbti-container {
		line-height: '18px';
		font-size: '12px';
		font-weight: 700;
		color: '#1973FB';
	}
`;

const TextContainer = styled.div`
	width: 763px;
	height: 119px;

	& .content-thumbnail {
		display: flex;
		width: 755px;
		height: 63px;
		margin-top: 24px;
		border: transparent;
		font-size: 14px;
		font-weight: 400;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	margin-top: 18px;
	font-size: 12px;
	font-weight: 400;
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
							<BookmarkIcon fill='rgba(223, 29, 29, 1)' />
							<span
								style={{
									lineHeight: '18px',
									fontSize: '12px',
									fontWeight: '700',
									color: '#1973FB',
									marginLeft: '6px',
								}}
							>
								[{mbti || 'ENTJ'}] {userNickname || '야옹맨'}
							</span>
						</>
					) : (
						<>
							<span
								style={{
									lineHeight: '18px',
									fontSize: '12px',
									fontWeight: '700',
									color: '#1973FB',
								}}
							>
								[{mbti || 'ENTJ'}] {userNickname || '야옹맨'}
							</span>
						</>
					)}
					<span
						style={{
							lineHeight: '24px',
							fontSize: '16px',
							fontWeight: '700',
							marginLeft: '6px',
						}}
					>
						{title || '야옹맨의 게시글 제목'}
					</span>
				</UsernameContainer>
				<div className='content-thumbnail'>
					<span>{textContent || 'hi'}</span>
					{imgSrc ? <img src={imgSrc} /> : <></>}
				</div>
			</TextContainer>
			<ContentContainer>
				<div className='content-count'>
					<LikeIcon width='16px' height='16px' fill='#4F4C4C' />
					<span style={{ marginLeft: '4px' }}>{likesCount || 200}</span>
				</div>
				<div className='content-count' style={{ marginLeft: '12px' }}>
					<CommentIcon width='16px' height='16px' fill='#4F4C4C' />
					<span style={{ marginLeft: '4px' }}>{replyCount || 200}</span>
				</div>
				<div className='content-count' style={{ marginLeft: '12px' }}>
					<EyeIcon width='16px' height='16px' />
					<span style={{ marginLeft: '4px' }}>{viewCount || 200}</span>
				</div>
				<div className='content-count' style={{ marginLeft: '12px' }}>
					<span>{updateDatetime} 02/22 23&#58;02</span>
				</div>
			</ContentContainer>
		</Wrapper>
	);
};

export default ThumbnailBar;
