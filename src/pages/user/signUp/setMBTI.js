import React from 'react';
import Header from '../../../components/elements/header/Header';
import SetMBTI from '../../../components/user/setMBTI/SetMBTI';
import { Typo } from '../../../components/user/setMBTI/SetMBTI.styled';

const SignUp = (props) => {
	return (
		<>
			<Header />
			<Typo fontWeight={400} fontSize={'1.5rem'} mb={'48px'}>
				알파벳을 조합해 MBTI를 설정해주세요.
			</Typo>
			<SetMBTI nextHref={'/user/signUp/setName'} />
		</>
	);
};
export default SignUp;
