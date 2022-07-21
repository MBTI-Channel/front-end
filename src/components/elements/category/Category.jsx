import { useRouter } from 'next/router';
import styled from 'styled-components';

const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 390px;
	height: 253px;
	border: 1px solid #ebebeb;
	margin-top: 16px;
	background-color: white;
`;

const CategoryText = styled.div`
	width: 74px;
	height: 30px;
	font-size: 20px;
	/* line-height: 150%; */
	text-align: center;
	margin-left: 12px;
	margin-top: 12px;
`;

const BoardButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 366px;
	height: 187px;
	margin: 12px;
	/* padding-top: 12px;
	padding-left: 12px; */
`;

const BoardButton = styled.button`
	width: 366px;
	height: 43px;
	background-color: white;
	border: #fff;
	border-bottom: 1px solid #fbfbfb;
	text-align: left;
	line-height: 43px;
	cursor: pointer;
`;

const BoardButtonText = styled.span`
	font-size: 18px;
`;

const Category = () => {
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
			<CategoryContainer>
				<CategoryText>카테고리</CategoryText>
				<BoardButtonContainer>
					<BoardButton onClick={onClickBoardButton} value='MyMbti'>
						내 MBTI 게시판
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='Integrated'>
						통합게시판
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='date'>
						연애
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='schoolWork'>
						학교/직장
					</BoardButton>
				</BoardButtonContainer>
			</CategoryContainer>
		</div>
	);
};

export default Category;
