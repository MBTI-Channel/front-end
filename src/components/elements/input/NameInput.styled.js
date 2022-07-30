import styled from 'styled-components';

export const NameDiv = styled.div`
	display: flex;
	position: relative;
	margin-top: 72px;
	& label,
	input {
		display: block;
	}

	& input:focus {
		outline: none;
		border-color: #1973fb;
		background: white;
	}
	&.valid input {
		border-color: #1973fb;
	}
	&.invalid input {
		border-color: red;
	}
`;

export const InputLabel = styled.label`
	label {
		font-weight: bold;
		flex: 1;
		color: #464646;
		margin-bottom: 0.5rem;
	}
`;

export const Name = styled.input`
	&::placeholder {
		color: #c4c4c4;
	}
	padding: 15px 14px;
	width: 390px;
	height: 54px;
	border: 1px solid #ebebeb;
	border-radius: 2px;
	z-index: 0;
`;
