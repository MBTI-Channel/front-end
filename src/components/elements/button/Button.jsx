import styled from 'styled-components';

export const Button = styled.button.attrs((props) => ({
	width: props.width,
	height: props.height,
	m: props.m,
	bg: props.bg || '#1973fb',
	color: props.color || 'white',
	p: props.p,
	border: props.border || '0 none',
}))`
  display: flex;
	flex-direction: ${(props) => props.flexDirection};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.m};
	padding: ${(props) => props.p};
	gap: ${(props) => props.gap};
	border: ${(props) => props.border};
	border-radius: 4px;
	justify-content: center;
	align-items: center;
	text-align: center;
	align-items: center;
	background-color: ${(props) => props.bg};
	font-weight: ${(props) => props.fontWeight};
	color: ${(props) => props.color};
	cursor: pointer;

	&:disabled {
	pointer-events: none;
	cursor: default ;
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
font-size: 18px;
font-weight: ${(props) => props.fontWeight};
color: #1973fb;
border: #1973fb 1px solid;
background: white;
`;
