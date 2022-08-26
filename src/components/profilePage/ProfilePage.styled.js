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

export const InputBox = styled.input.attrs((props) => ({
	marginTop: props.marginTop,
}))`
	width: 390px;
	height: 52px;
	color: black;
	border: 1px solid #ebebeb;
	border-radius: 2px;
	padding: 15px 14px;
	margin-top: ${(props) => props.marginTop};

	::placeholder,
	::-webkit-input-placeholder {
		color: #c4c4c4;
		font-family: 'Noto Sans';
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
	}
`;

export const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.6);
`;

export const ModalBox = styled.div`
	position: absolute;
	top: calc(50vh - 343px);
	left: calc(50vw - 310px);
	background-color: white;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	width: 621px;
	height: 687px;

	& .backward-button {
		position: 'relative';
		top: '20px';
		left: '278.5px';
	}
`;
