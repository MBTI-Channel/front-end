import styled from 'styled-components';

export const Button = styled.button.attrs((props) => ({
	width: props.width || '795px',
	height: props.height,
	marginTop: props.marginTop,
}))`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin-top: ${(props) => props.marginTop};
	border-color: transparent;
	border-radius: 4px;
	text-align: center;
	background-color: #1973fb;
	font-family: 'Noto Sans';
	font-size: 18px;
	font-weight: 700;
	color: white;
`;
