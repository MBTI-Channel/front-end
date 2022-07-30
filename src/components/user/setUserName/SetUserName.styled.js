import styled from 'styled-components';

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

export const MBTI = styled.div`
	margin-top: 36px;
	color: #1973fb;
	font-size: 2.5rem;
	font-weight: 700;
`;
