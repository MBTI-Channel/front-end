import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 153px;
	height: 100vh;
	background-color: white;
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
		line-height: 21.79px;
	}
`;
