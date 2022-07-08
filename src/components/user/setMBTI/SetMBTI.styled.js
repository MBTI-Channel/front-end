import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	height: 90vh;
	background: white;
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
	font-family: 'Noto Sans', sans-serif;
	font-size: 2.5rem;
	font-weight: 700;
	margin: 4px 0px;
`;

export const Middle = styled.div`
	width: 100%;
	label {
		max-width: 1px;
		max-height: 1px;
	}
	input[type='radio'] {
		display: none;

		&:checked {
			& + div {
				border: 0px;
				span {
					color: white;
				}
			}
		}
	}
`;

export const Box = styled.div`
	width: 87px;
	height: 87px;
	background-color: white;
	transition: all 250ms ease;
	will-change: transition;
	display: inline-block;
	text-align: center;
	cursor: pointer;
	position: relative;
	font-weight: 900;
	border-radius: 12px;
	border: 1px solid #c4c4c4;
	position: relative;
	margin: 4px;
	&:hover {
		transform: scale(1.15); /* translateY(10px); */
	}
	span {
		z-index: 500;
		position: absolute;
		left: 0;
		right: 0;
		transition: all 300ms ease;
		font-family: 'Noto Sans', sans-serif;
		font-weight: 900;
		font-size: 2.5rem;
		user-select: none;
		color: #666666;
		top: 55%;
		transform: translateY(-50%);
	}
`;

export const E = styled.input`
	&:checked {
		+ div {
			background-color: #ffcc33;
		}
	}
`;

export const I = styled.input`
	&:checked {
		+ div {
			background-color: #ff9900;
		}
	}
`;

export const N = styled.input`
	&:checked {
		+ div {
			background-color: #cc6666;
		}
	}
`;

export const S = styled.input`
	&:checked {
		+ div {
			background-color: #cc3333;
		}
	}
`;

export const T = styled.input`
	&:checked {
		+ div {
			background-color: #339966;
		}
	}
`;

export const F = styled.input`
	&:checked {
		+ div {
			background-color: #66cc99;
		}
	}
`;

export const J = styled.input`
	&:checked {
		+ div {
			background-color: #009999;
		}
	}
`;

export const P = styled.input`
	&:checked {
		+ div {
			background-color: #66cccc;
		}
	}
`;

export const MBTIdiv = styled.div`
	width: 182px;
	height: 3rem;
	font-family: 'Noto Sans', sans-serif;
	font-size: 1.5rem;
	font-weight: 700;
	margin: 4px 0px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: #ebebeb;
	border-radius: 4px;
`;

export const Confirm = styled.div`
	width: auto;
	height: auto;
	& a {
		width: 24.25rem;
		height: 3rem;
		border-radius: 6px;
		margin: 35px 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		outline: none;
		box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
		background: #1973fb;
		color: white;
	}
`;
