import styled from 'styled-components';

export const SectionWrapper = styled.section.attrs((props) => ({
	marginTop: props.marginTop,
}))`
	margin-top: ${(props) => props.marginTop};
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
	background-color: #f8fafb;
`;
