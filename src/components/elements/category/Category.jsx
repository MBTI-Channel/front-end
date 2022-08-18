import { useRouter } from 'next/router';
import styled from 'styled-components';

const CategoryContainer = styled.div.attrs((props) => ({
	marginTop: props.marginTop,
}))`
	display: flex;
	flex-direction: column;
	width: 357px;
	height: 518px;
	border: 1px solid #ebebeb;
	background-color: white;
	padding: 20px 32px;
	margin-top: ${(props) => props.marginTop};
	border-radius: 4px;
`;

const BoardButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 293px;
	height: 448px;
	margin-top: 10px;
`;

const BoardButton = styled.button`
	display: flex;
	align-items: center;
	width: 293px;
	height: 48px;
	background-color: white;
	border: transparent;
	text-align: left;
	margin-top: 2px;
	cursor: pointer;

	& img {
		margin-right: 8px;
	}
`;
const Category = ({ marginTop }) => {
	const router = useRouter();

	const onClickBoardButton = (e) => {
		const { value } = e.target;
		if (value === 'MyMbti') {
			router.push('/mbti');
		}
		if (value === 'Integrated') {
			router.push('/integrated');
		}
		if (value === 'date') {
			router.push('/date');
		}
		if (value === 'schoolWork') {
			router.push('/schoolWork');
		}
	};

	return (
		<div>
			<CategoryContainer marginTop={marginTop}>
				<div className='heading-3-label'>카테고리</div>
				<BoardButtonContainer className='heading-2'>
					<BoardButton onClick={onClickBoardButton} value='MyMbti'>
						<img src='/CategoryIcon/star-dynamic-color.svg' />내 MBTI 게시판
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='Integrated'>
						<img src='/CategoryIcon/tea-cup-dynamic-color.svg' />
						통합게시판
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='date'>
						<img src='/CategoryIcon/heart-dynamic-color.svg' />
						연애
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='schoolWork'>
						<img src='/CategoryIcon/bell-dynamic-color.svg' />
						학교
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='schoolWork'>
						<img src='/CategoryIcon/computer-dynamic-color.svg' />
						직장
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='schoolWork'>
						<img src='/CategoryIcon/headphone-dynamic-color.svg' />
						음악
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='schoolWork'>
						<img src='/CategoryIcon/video-camera-dynamic-color.svg' />
						영화
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='schoolWork'>
						<img src='/CategoryIcon/travel-dynamic-color.svg' />
						여행
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='schoolWork'>
						<img src='/CategoryIcon/target-dynamic-color.svg' />
						취미
					</BoardButton>
				</BoardButtonContainer>
			</CategoryContainer>
		</div>
	);
};

export default Category;
