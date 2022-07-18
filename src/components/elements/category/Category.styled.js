import styled from 'styled-components';

export const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 390px;
	height: 253px;
	border: 1px solid #ebebeb;
	margin-top: 16px;
`;

export const CategoryText = styled.div`
	width: 74px;
	height: 30px;
	font-size: 20px;
	line-height: 150%;
	text-align: center;
	padding-left: 12px;
	margin-top: 12px;
`;

export const BoardButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 366px;
	height: 187px;
	padding-top: 12px;
	padding-left: 12px;
`;

export const BoardButton = styled.button`
	width: 366px;
	height: 43px;
	background-color: white;
	border: #fff;
	border-bottom: 1px solid #fbfbfb;
	text-align: left;
	line-height: 43px;
	cursor: pointer;
`;

export const BoardButtonText = styled.span`
	font-size: 18px;
`;
