import styled from 'styled-components';

export const Typo = styled.div.attrs((props) => ({
	color: props.fontSize || '#1973fb',
	fontSize: props.fontSize || '1rem',
	fontWeight: props.fontWeight || '400',
	mt: props.mt,
}))`
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	color: ${(props) => props.color};
`;
