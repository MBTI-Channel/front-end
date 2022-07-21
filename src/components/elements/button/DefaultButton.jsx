import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

// const Button = styled.button.attrs((props) => ({
// 	width: props.width || '795px',
// 	height: props.height,
// 	marginTop: props.marginTop,
// }))`
// 	border-color: transparent;
// 	border-radius: 4px;
// 	text-align: center;
// 	background-color: #1973fb;
// 	font-family: 'Noto Sans';
// 	font-size: 18px;
// 	font-weight: 700;
// 	color: white;
// `;

// const DisableButton = styled(Button)`
// 	background-color: #c4c4c4;
// 	font-family: 'Noto Sans';
// 	font-size: 18px;
// 	font-weight: 700;
// 	color: white;
// `;

// const PressedButton = styled(Button)`
// 	background-color: #438eff;
// 	font-family: 'Noto Sans';
// 	font-size: 18px;
// 	font-weight: 700;
// 	color: white;
// `;

const CustomButton = ({ width, height, marginTop }) => {
	return <Button width={width} height={height} marginTop={marginTop}></Button>;
};

export default CustomButton;
