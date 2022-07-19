import styled from 'styled-components';

export const PageButton = styled.button`
	width: 36px;
	height: 36px;
	text-align: center;
	border: 1px solid #c4c4c4;
	border-radius: 4px;
	font-family: 'Noto Sans';
	font-weight: 500;
	font-size: 14px;
	color: #666666;
	cursor: pointer;
`;

export const PageButtonContainer = styled.div`
	display: flex;
	width: 212px;
	height: 36px;
	justify-content: space-between;
	align-items: center;
`;

export const ClickedPageButton = styled(PageButton)`
	background-color: #1973fb;
	color: #fff;
	border: transparent;
`;
