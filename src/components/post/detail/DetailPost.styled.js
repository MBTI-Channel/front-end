import styled from 'styled-components';

export const Category = styled.p`
	width: 795px;
`;

export const PostWrapper = styled.div`
	width: 795px;
	height: fit-content;
	border-top: 2px solid #333333;
	border-radius: 2px;
`;

export const DetailHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 12px 16px;
	gap: 16px;

	width: 795px;

	border-radius: 2px;

	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
`;

export const PostTitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
	align-items: center;
	padding: 0px;
	gap: 16px;

	width: 763px;
	height: 36px;

	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
`;

export const PostTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 10px;

	width: 365px;

	flex: none;
	order: 0;
	flex-grow: 0;
`;

export const MBTI = styled.p`
	color: #c4c4c4;

	flex: none;
	order: 0;
	flex-grow: 0;
`;

export const Title = styled.p`
	display: flex;
	align-items: center;

	/* Greyscale/Dark Grey 2 */
	color: #333333;

	/* Inside auto layout */
	flex: none;
	order: 1;
	flex-grow: 0;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 20px;

	width: 190px;

	/* Inside auto layout */
	flex: none;
	order: 1;
	flex-grow: 0;
`;

export const UserName = styled.p`
	color: #333333;
	display: flex;
	margin: 0%;

	/* Inside auto layout */
	flex: none;
	order: 0;
	flex-grow: 0;
`;

export const PostDate = styled.p`
	color: #6f6f6f;
	display: flex;
	margin: 0%;

	flex: none;
	order: 2;
	flex-grow: 0;
`;

export const PostContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 12px 16px;
	gap: 10px;

	width: 795px;
	height: auto;

	/* Greyscale/white */
	background: #ffffff;
	border-radius: 2px;
`;
