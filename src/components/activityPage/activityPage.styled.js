import styled from 'styled-components';
import { MBTI_BLUE, WHITE } from '../../styles/color';

export const ContentWrapper = styled.div`
	display: flex;
	font-size: 20px;
	font-weight: 700;
	line-height: 30px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	width: 469px;
	justify-content: space-around;
	margin-top: 16px;
`;

export const CategoryButton = styled.button.attrs((props) => ({
	width: props.width,
	height: props.height,
	isSelected: props.isSelected,
}))`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	color: ${(props) => (props.isSelected ? WHITE : MBTI_BLUE)};
	background-color: ${(props) => (props.isSelected ? MBTI_BLUE : WHITE)};
	border: ${(props) =>
		props.isSelected ? `transparent` : `1px solid ${MBTI_BLUE}`};
	border-radius: 4px;
`;
