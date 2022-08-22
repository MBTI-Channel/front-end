import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
	background-color: #f8fafb;
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
	border-radius: 4px;
	align-items: center;
	justify-content: space-between;
	padding: 25px 20px;
	background-color: white;

	& .profile-info-container {
		display: flex;
		flex-direction: column;
	}

	& .datetime-container {
		color: #878d91;
	}
`;

export const ActivityContainer = styled.div`
	width: 795px;
	height: 592px;
	margin-top: 16px;
	background-color: white;
	border: 1px solid #ebebeb;
	border-radius: 4px;
`;

export const ActivityBar = styled.div.attrs((props) => ({
	value: props.value,
}))`
	width: 771px;
	height: 56px;
	display: flex;
	justify-content: flex-start;
	border-bottom: 1px solid #ebebeb;
	margin-top: 16px;
	margin-left: 12px;
	background-color: white;
	cursor: pointer;

	& .icon-container {
		width: 24px;
		height: 24px;
		margin-left: 24px;
		margin-top: 16px;
	}

	& .text-container {
		color: '#333333';
		margin-left: 8px;
		padding-top: 16px;
	}
`;

export const MyActivityContainer = styled.div`
	width: 739px;
	display: flex;
	flex-direction: column;
	margin-top: 8px;
	margin-left: 56px;
	cursor: pointer;
`;

export const MyActivity = styled.div`
	width: 715px;
	height: 40px;
	border-bottom: 1px solid #ebebeb;
	background-color: white;
	padding: 8px;
	margin-top: 8px;
	color: #333333;
`;
