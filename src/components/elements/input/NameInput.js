import React, { useRef, useImperativeHandle } from 'react';
import { InputLabel, Name, NameDiv } from './NameInput.styled';

const NameInput = React.forwardRef((props, ref) => {
	const inputRef = useRef();

	const activate = () => {
		inputRef.current.focus();
	};

	useImperativeHandle(ref, () => {
		return {
			focus: activate,
		};
	});

	console.log(props.isValid && props.notDupl);

	return (
		<NameDiv className={`${!props.isValid || !props.notDupl ? 'invalid' : ''}`}>
			<Name
				ref={inputRef}
				type={props.type}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
				placeholder={props.placeholder}
			/>
		</NameDiv>
	);
});

export default NameInput;
