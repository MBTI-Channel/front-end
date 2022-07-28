import styled from 'styled-components';

export const Button = styled.button.attrs((props) => ({
	width: props.width || '390px',
	height: props.height,
	'margin-top': props.marginTop,
	fontWeight: props.fontWeight || '400',
}))`
width: ${(props) => props.width};
height: ${(props) => props.height};
margin-top: ${(props) => props['margin-top']};
border: 0 none;
border-radius: 4px;
text-align: center;
background-color: #1973fb;
font-family: 'Noto Sans';
font-size: 18px;
font-weight:${(props) => props.fontWeight};
color: white;
cursor: pointer;
&:disabled {
	pointer-events: none;
	cursor: default;
	background: #c4c4c4;
}
&:active {
	background: #3d8aff;
}
`;

export const BackwardButton = styled.button.attrs((props) => ({
	width: props.width || '390px',
	height: props.height,
	'margin-top': props.marginTop,
	fontWeight: props.fontWeight || '400',
}))`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin-top: ${(props) => props['margin-top']};
	border: 0 none;
	border-radius: 4px;
	text-align: center;
	font-family: 'Noto Sans';
	font-size: 18px;
	font-weight:${(props) => props.fontWeight};
	color: #1973FB;
	border: #1973fb 1px solid;
	box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
`;
