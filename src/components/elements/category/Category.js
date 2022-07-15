import { useRouter } from 'next/router';
import {
	CategoryContainer,
	CategoryText,
	BoardButtonContainer,
	BoardButton,
} from './Category.styled';

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
