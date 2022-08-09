import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const CustomButton = ({ width, height, marginTop }) => {
	return <Button width={width} height={height} marginTop={marginTop}></Button>;
};

export default CustomButton;
