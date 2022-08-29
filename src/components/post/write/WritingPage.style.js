import styled from 'styled-components';

// TODO: 공용 컴포넌트로 분리하기
// Section,
// CardWrapper,
// CategoryConatiner,
// MenuWrapper,
// Footer,
// TextWrapper,

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 64px;
	width: 100%;
	align-items: center;
	background-color: #f8fafb; ;
`;

export const CardWrapper = styled.div`
	display: flex;
	width: 1202px;
	justify-content: space-between;
	align-items: center;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ImageUploadBox = styled.div`
	display: flex;
	width: 795px;
	height: 121px;
	border: 1px dashed #ebebeb;
	justify-content: center;
	align-items: center;
	background-color: white;

	& > input[type='file'] {
		display: none;
	}
`;

export const CategoryConatiner = styled.div`
	display: flex;
	margin-top: 72px;
`;

export const MenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 14px;
	margin-top: 42px;
`;

export const SearchInputBox = styled.div`
	display: flex;
	width: 390px;
	height: 54px;
	border: 1px solid #ebebeb;
	color: #a5a5a5;
	align-items: center;
	background-color: white;
`;

export const Footer = styled.div`
	display: flex;
	width: 357px;
	height: 185px;
	border: 1px solid #ebebeb;
	border-radius: 4px;
	justify-content: center;
	text-align: center;
	align-items: center;
	font-size: 24px;
	background-color: white;
`;
