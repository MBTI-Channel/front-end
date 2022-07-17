import React from 'react';
import styled from 'styled-components';

const InputTitle = styled.input.attrs((props) => ({
	marginTop: props.marginTop || '0',
}))`
	width: 795px;
	height: 48px;
	color: rgba(196, 196, 196, 1);
	border: 1px solid #ebebeb;
	border-radius: 2px;
	padding-left: 14px;
	margin-top: ${(props) => props.marginTop};
`;

const Title = ({ marginTop }) => {
	return (
		<InputTitle placeholder='제목을 입력해주세요.' marginTop={marginTop} />
	);
};

export default Title;
