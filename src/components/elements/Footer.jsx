import styled from 'styled-components';

const TextArea = styled.div.attrs((props) => ({
	marginTop: props.marginTop,
}))`
	display: flex;
	flex-direction: column;
	width: 390px;
	height: 185px;
	align-items: center;
	background-color: white;
	justify-content: center;
	color: rgba(111, 111, 111, 1);
	font-size: 14px;
	line-height: 21px;
	margin-top: ${(props) => props.marginTop};
`;

const Footer = ({ marginTop }) => {
	return (
		<TextArea marginTop={marginTop}>
			<span>
				개인 연락처 ∙ 노션 ∙ 깃헙 ∙ 블로그 ∙ 이용약관 ∙ 개인정보 처리방침
			</span>
			<span style={{ marginTop: '16px' }}>Copyright ⓒ MBTI CHANNEL</span>
		</TextArea>
	);
};

export default Footer;
