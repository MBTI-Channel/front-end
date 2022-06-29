import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	height: 75vh;
`;

export const Content = styled.div`
	margin: auto;
	width: 390px;
	text-align: center;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	& a > span {
		width: 296px;
		height: 90px;
		display: inline-block;
		background-size: contain;
		background-repeat: no-repeat;
		vertical-align: text-top;
		background-image: url(/logo.svg);
	}
`;

export const Typo = styled.p`
	font-family: 'Noto Sans KR', sans-serif;
	font-size: 3rem;
	font-weight: 700;
`;

export const Middle = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
	input[type='radio'] {
		display: none;
		&:checked {
			+ .box {
				background-color: green;
				span {
					color: white;
					transform: translateY(70px);
					&:before {
						transform: translateY(0px);
						opacity: 1;
					}
				}
			}
		}
	}
`;

export const Box = styled.div`
	width: 200px;
	height: 200px;
	background-color: white;
	transition: all 250ms ease;
	will-change: transition;
	display: inline-block;
	text-align: center;
	cursor: pointer;
	position: relative;
	font-weight: 900;
	&:active {
		transform: translateY(10px);
	}
	span {
		position: absolute;
		transform: translate(0, 60px);
		left: 0;
		right: 0;
		transition: all 300ms ease;
		font-size: 1.5em;
		user-select: none;
		color: green;
		&:before {
			font-size: 1.2em;
			font-family: FontAwesome;
			display: block;
			transform: translateY(-80px);
			opacity: 0;
			transition: all 300ms ease-in-out;
			font-weight: normal;
			color: white;
		}
	}
`;

export const FrontEnd = styled.span`
	&:before {
		content: '\f121';
	}
`;

export const BackEnd = styled.span`
	&:before {
		content: '\f0f4';
	}
`;
