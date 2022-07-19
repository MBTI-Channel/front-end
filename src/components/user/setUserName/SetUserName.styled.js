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

export const MBTI = styled.div`
	color: #1973fb;
	font-family: 'Noto Sans', sans-serif;
	font-size: 1.25rem;
	font-weight: 700;
`;

export const SetInfoDiv = styled.div`
	width: 182px;
	height: 3rem;
	font-family: 'Noto Sans', sans-serif;
	font-size: 1.5rem;
	font-weight: 700;
	letter-spacing: 5px;
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
