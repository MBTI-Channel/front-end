import React from 'react';
import styled from 'styled-components';

const InputTitle = styled.input.attrs((props) => ({
	marginTop: props.marginTop || '0',
}))`
	width: 795px;
	height: 48px;
	color: black;
	border: 1px solid #ebebeb;
	border-radius: 2px;
	padding: 14.5px 14px;
	margin-top: ${(props) => props.marginTop};

	::placeholder,
	::-webkit-input-placeholder {
		color: #c4c4c4;
		font-family: 'Noto Sans';
		font-weight: 400;
		font-size: 14px;
	}
`;

const Title = ({ marginTop, onChange }) => {
	return (
		<InputTitle
			className='title'
			placeholder='제목을 입력해주세요.'
			marginTop={marginTop}
			onChange={onChange}
		/>
	);
};

export default Title;
