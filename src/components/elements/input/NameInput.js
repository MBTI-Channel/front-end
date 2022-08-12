import React, { useRef, useImperativeHandle } from 'react';
import { Wrapper } from '../wrapper/ContentWrapper.styled';
import { Name, NameDiv } from './NameInput.styled';

const NameInput = React.forwardRef((props, ref) => {
	const inputRef = useRef();
	let img, validateMsg;

	const activate = () => {
		inputRef.current.focus();
	};

	useImperativeHandle(ref, () => {
		return {
			focus: activate,
		};
	});

	if (props.isValid && props.notDupl) img = '/icon/confirm.svg';
	else img = '/icon/reject.svg';

	return (
		<NameDiv
			className={`${props.value && props.notDupl ? 'valid' : ''} ${
				!props.isValid || !props.notDupl ? 'invalid' : ''
			}`}
		>
			<Name
				ref={inputRef}
				type={props.type}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
				placeholder={props.placeholder}
			/>
			<img
				src={img}
				style={{
					zIndex: 1000,
					position: 'absolute',
					right: 10,
					top: 15,
				}}
				hidden={props.value === ''}
			/>
		</NameDiv>
	);
});

export default NameInput;
