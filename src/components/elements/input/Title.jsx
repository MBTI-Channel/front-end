import React from 'react';
import styled from 'styled-components';

const InputTitle = styled.input.attrs((props) => ({
	marginTop: props.marginTop || '0',
}))`
	width: 767px;
	height: 19px;
	color: rgba(196, 196, 196, 1);
	border: 1px solid #ebebeb;
	border-radius: 2px;
	padding: 14.5px 14px;
	font-weight: 400;
	font-size: 14px;
	margin-top: ${(props) => props.marginTop};
`;

const Title = ({ marginTop }) => {
	return (
		<InputTitle placeholder='제목을 입력해주세요.' marginTop={marginTop} />
	);
};

export default Title;
