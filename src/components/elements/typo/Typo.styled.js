import styled from 'styled-components';

export const Typo = styled.div.attrs((props) => ({
	color: props.fontSize || '#1973fb',
	fontSize: props.fontSize || '1rem',
	fontWeight: props.fontWeight || '400',
	mt: props.mt,
	mb: props.mb,
	ml: props.ml,
	mr: props.mr,
}))`
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	color: ${(props) => props.color};
	margin-top: ${(props) => props.mt};
	margin-bottom: ${(props) => props.mb};
	margin-left: ${(props) => props.ml};
	margin-right: ${(props) => props.mr};
`;
