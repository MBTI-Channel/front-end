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

export const SocialLogin = styled.div`
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
	}
	& a > span {
		height: 24px;
		width: 24px;
		display: inline-block;
		background-size: contain;
		background-repeat: no-repeat;
		vertical-align: text-top;
		margin-right: 10px;
	}
`;

export const KakaoLogin = styled.div`
	& a {
		color: #000;
		background-color: #fae100;
	}
`;

export const KakaoIcon = styled.a`
	text-decoration: none;
	& span {
		background-image: url(/assets/kakao.png);
	}
`;

export const NaverLogin = styled.div`
	& a {
		color: #fff;
		background-color: #20c801;
	}
`;

export const NaverIcon = styled.a`
	text-decoration: none;
	& span {
		background-image: url(/assets/naver.png);
	}
`;
