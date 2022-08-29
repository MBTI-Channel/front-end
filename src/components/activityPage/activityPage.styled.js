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
	gap: 8px;
	margin-top: 16px;

	& input {
		display: none;
	}
`;

export const CategoryButton = styled.button.attrs((props) => ({
	width: props.width,
	isSelected: props.isSelected,
}))`
	display: flex;
	width: ${(props) => props.width};
	height: '34px';
	color: ${(props) => (props.isSelected ? WHITE : MBTI_BLUE)};
	background-color: ${(props) => (props.isSelected ? MBTI_BLUE : WHITE)};
	border: 1px solid ${MBTI_BLUE};
	border-radius: 4px;
	padding: 8px 24px;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	line-height: 150%;
	font-weight: ${(props) => (props.isSelected ? 700 : 400)};
`;
