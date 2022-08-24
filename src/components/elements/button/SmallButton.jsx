import styled from 'styled-components';

export const SmallButton = styled.button.attrs((props) => ({
	width: props.width || '79px',
	height: props.height || '34px',
	isFilled: props.isFilled,
}))`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	align-items: center;
	padding: 8px 24px;
	background-color: ${(props) => (props.isFilled ? '#1973FB' : '#FFFFFF')};
	border: ${(props) =>
		props.isFilled ? '0px' : '1px solid rgba(79, 76, 76, 1);'};
	border-radius: 4px;
	color: ${(props) => (props.isFilled ? '#FFFFFF' : 'rgba(79, 76, 76, 1)')};
	cursor: pointer;

	& .small-button-icon {
		stroke: ${(props) => (props.isFilled ? '#FFFFFF' : '#333333')};
	}
`;
