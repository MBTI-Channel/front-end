import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userMBTI, userName } from '../../../sotre/user';

const SetUserName = (props) => {
	const MBTI = useRecoilValue(userMBTI);

	return <div>{MBTI}</div>;
};

export default SetUserName;
