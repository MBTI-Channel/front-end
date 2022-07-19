import styled from 'styled-components';

const Button = styled.button`
	width: 390px;
	height: 52px;
	border-color: transparent;
	border-radius: 4px;
	text-align: center;
`;

export const DefaultButton = styled(Button)`
	background-color: #1973fb;
	font-family: 'Noto Sans';
	font-size: 18px;
	font-weight: 700;
	color: white;
`;

export const DisableButton = styled(Button)`
	background-color: #c4c4c4;
	font-family: 'Noto Sans';
	font-size: 18px;
	font-weight: 700;
	color: white;
`;

export const PressedButton = styled(Button)`
	background-color: #438eff;
	font-family: 'Noto Sans';
	font-size: 18px;
	font-weight: 700;
	color: white;
`;
