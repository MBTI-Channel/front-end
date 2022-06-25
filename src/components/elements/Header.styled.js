import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	height: 72px;
	background: white;
	border-bottom: 1px solid #ebebeb;
`;

export const Container = styled.div`
	min-width: 395px;
	max-width: 64rem;
	height: 60px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.div`
	padding-left: 24px;
`;

export const Nav = styled.div`
	width: fit-content;
	height: 24px;
	padding-right: 24px;
	& a:link {
		color: black;
	}
	& a:visited {
		color: black;
	}
`;

export const Btn = styled.a`
	border: '0px';
	font-size: '1.1rem';
	font-weight: 'bold';
	text-decoration: none;
`;
