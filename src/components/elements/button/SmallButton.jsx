import styled from 'styled-components';

export const SmallButton = styled.button.attrs((props) => ({
	isFilled: props.isFilled,
}))`
	width: 141px;
	height: 34px;
	align-items: center;
	background-color: ${(props) => (props.isFilled ? '#1973FB' : '#FFFFFF')};
	border: ${(props) => (props.isFilled ? '0px' : '1px solid #C4C4C4;')};
	border-radius: 4px;
	color: ${(props) => (props.isFilled ? '#FFFFFF' : '#333333')};
	font-weight: 400;
	font-size: 12px;

	& .small-button-icon {
		stroke: ${(props) => (props.isFilled ? '#FFFFFF' : '#333333')};
	}
`;
