import styled from 'styled-components';

const InputParagraph = styled.input.attrs((props) => ({
	marginTop: props.marginTop || '0',
}))`
	width: 795px;
	height: 341px;
	color: rgba(196, 196, 196, 1);
	border: 1px solid #ebebeb;
	border-radius: 2px;
	padding-left: 14px;
	margin-top: ${(props) => props.marginTop};
	/* white-space: pre-wrap; */
`;

const Paragraph = ({ marginTop }) => {
	return (
		<InputParagraph
			placeholder='MBTI CHANNEL은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 &#13;&#10;이용규칙을 제정하여 운영하고 있습니다. \n위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다. \n게시물 작성 전 커뮤니티 이용규칙 공지사항을 반드시 확인하시기 바랍니다. '
			marginTop={marginTop}
		/>
	);
};

export default Paragraph;
