import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;

	background-color: #f8fafb;
	height: (1500-64) px;
`;

export const CardWrapper = styled.div`
	display: flex;
	width: 1202px;
	justify-content: space-between;
	align-items: center;
	margin-top: 80px;
`;

export const ProfileBar = styled.div`
	display: flex;
	width: 795px;
	height: 82px;
	border: 1px solid #ebebeb;
	border-radius: 12px;
	align-items: center;
	justify-content: space-between;
	padding: 20px;

	& .profile-info-container {
		display: flex;
		flex-direction: column;
	}

	& .nickname-mbti-container {
		width: 100px;
		font-family: 'Noto Sans';
		font-weight: 500;
		font-size: 16px;
	}

	& .datetime-container {
		color: #878d91;
		font-size: 12px;
		margin-top: 2px;
	}
`;

export const ActivityContainer = styled.div`
	width: 795px;
	margin-top: 16px;
`;

export const ActivityBar = styled.div`
	width: 795px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border: 1px solid #ebebeb;
	margin-top: 16px;

	& .icon-container {
		padding: 16px 0px 16px 24px;
	}

	& .text-container {
		color: '#333333';
		font-weight: 500;
		font-size: 18px;
		padding-left: 8px;
		line-height: 150%;
	}
`;

export const MyActivityContainer = styled.div`
	width: 739px;
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	margin-left: 56px;
`;

export const MyActivity = styled.div`
	width: 739px;
	border-bottom: 1px solid #666666;
	background-color: white;
	padding: 8px;
	font-weight: 500;
	font-size: 18px;
	line-height: 150%;
	margin-top: 12px;
`;
