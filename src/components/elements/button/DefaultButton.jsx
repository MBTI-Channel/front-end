import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const CustomButton = (props) => {
	return <Button bg={props.bg} color={props.color} width={props.width} height={props.height} m={props.m} p={props.p} className={props.className}>{props.children}</Button>;
};

export default CustomButton;
