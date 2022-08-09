import styled from 'styled-components';

export const DefaultBarContainer = styled.div`
	background-color: #fff;
	width: 795px;
	height: 112px;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	border-width: 1px 0px;
	border-style: solid;
	border-color: #ebebeb;
`;

export const HeaderImage = styled.img`
	width: 80px;
	height: 80px;
	padding-left: 36px;
	/* top: 50%; */
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 16px;
	justify-content: space-evenly;
	height: 90px;
`;

export const Title = styled.div`
	max-width: 89px;
	font-family: 'Noto-Sans';
	font-size: 16px;
	font-weight: 700;
`;

export const Author = styled.span`
	max-width: fit-content;
	font-family: 'Noto-Sans';
	font-size: 14px;
	font-weight: 400;
`;

export const ActionContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Action = styled.div`
	display: flex;
	width: 40px;
	height: 18px;
	justify-content: space-between;
	align-items: center;
	top: 50%;
`;

// export const
