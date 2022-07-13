import Link from 'next/link';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userMBTI, userName } from '../../../sotre/user';
import { Content, Logo, MBTIdiv, Typo, Wrapper } from './SetUserName.styled';

const SetUserName = (props) => {
	const MBTI = useRecoilValue(userMBTI);

	return (
		<Wrapper>
			<Content>
				<Logo>
					<Link href={'/'}>
						<a>
							<span />
						</a>
					</Link>
				</Logo>
				<Typo>닉네임 설정</Typo>
				<MBTIdiv>{MBTI}</MBTIdiv>
			</Content>
		</Wrapper>
	);
};

export default SetUserName;
