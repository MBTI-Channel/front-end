import styled from 'styled-components';

const InputParagraph = styled.input.attrs((props) => ({
	marginTop: props.marginTop || '0',
}))`
	width: 795px;
	height: 341px;
	color: rgba(196, 196, 196, 1);
	border: 1px solid #ebebeb;
	border-radius: 2px;
	font-weight: 400;
	font-size: 14px;
	padding: 16px 14px;
	margin-top: ${(props) => props.marginTop};

	::placeholder,
	::-webkit-input-placeholder {
		color: #c4c4c4;
		font-family: 'Noto Sans';
		font-weight: 400;
		font-size: 14px;
	}
`;

const Paragraph = ({ marginTop, placeholder }) => {
	return <InputParagraph placeholder={placeholder} marginTop={marginTop} />;
};

export default Paragraph;
