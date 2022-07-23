import styled from 'styled-components';

export const TitleContainer = styled.div`
	width: 242px;
	color: white;
`;

export const ContentContainer = styled.div`
	width: 242px;
	height: 18px;
	margin-top: 10px;
	display: flex;
	justify-content: space-between;

	& .agree-container {
		display: flex;
		width: 100px;
		font-size: 12px;
		line-height: 18px;
		align-items: center;
		color: #0085ff;
	}

	& .disagree-container {
		display: flex;
		width: 100px;
		font-size: 12px;
		line-height: 18px;
		align-items: center;
		color: #eb7b7b;
		justify-content: flex-end;
	}
`;

export const ProgressBarContainer = styled.div`
	width: 242px;
	height: 7px;
	position: relative;
	margin-top: 1px;
	margin-bottom: 16px;
`;

export const BaseBox = styled.div`
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	border-radius: 3px;
`;
