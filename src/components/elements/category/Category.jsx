import { useRouter } from 'next/router';
import styled from 'styled-components';

const CategoryContainer = styled.div.attrs((props) => ({
	marginTop: props.marginTop,
}))`
	display: flex;
	flex-direction: column;
	width: 390px;
	height: 265px;
	border: 1px solid #ebebeb;
	margin-top: ${(props) => props.marginTop};
	background-color: white;
	padding: 12px;
`;

const CategoryText = styled.div`
	font-size: 20px;
	font-weight: 900;
	line-height: 30px;
`;

const BoardButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 366px;
	height: 199px;
	margin-top: 4px;
`;

const BoardButton = styled.button`
	display: flex;
	align-items: center;
	width: 366px;
	height: 46px;
	background-color: white;
	border: #fff;
	border-bottom: 1px solid #fbfbfb;
	text-align: left;
	font-size: 20px;
	font-weight: 400;
	line-height: 30px;
	margin-top: 8px;
	cursor: pointer;
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
				<CategoryText>카테고리</CategoryText>
				<BoardButtonContainer>
					<BoardButton onClick={onClickBoardButton} value='MyMbti'>
						<img src='/Icons/Basic/mbti.svg' style={{ marginRight: '8px' }} />내
						MBTI 게시판
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='Integrated'>
						<img
							src='/Icons/Basic/whole-list.svg'
							style={{ marginRight: '8px' }}
						/>
						통합게시판
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='date'>
						<img src='/Icons/Basic/heart.svg' style={{ marginRight: '8px' }} />
						연애
					</BoardButton>
					<BoardButton onClick={onClickBoardButton} value='schoolWork'>
						<img src='/Icons/Basic/school.svg' style={{ marginRight: '8px' }} />
						학교/직장
					</BoardButton>
				</BoardButtonContainer>
			</CategoryContainer>
		</div>
	);
};

export default Category;
