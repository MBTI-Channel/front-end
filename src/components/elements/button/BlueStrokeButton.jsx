import styled from 'styled-components';

export const BlueStrokeButton = styled.button.attrs((props) => ({
	width: props.width || '795px',
	height: props.height || '52px',
	marginTop: props.marginTop,
	backgroundColor: props.backgroundColor,
	color: props.color,
}))`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin-top: ${(props) => props.marginTop};
	border: 1px solid #1973fb;
	border-radius: 4px;
	text-align: center;
	background-color: ${(props) => props.backgroundColor};
	font-family: 'Noto Sans';
	font-size: 18px;
	font-weight: 700;
	color: ${(props) => props.color};
`;
