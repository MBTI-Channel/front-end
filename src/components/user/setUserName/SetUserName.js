import Link from 'next/link';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userMBTI, userName } from '../../../sotre/user';
import {
	Content,
	Logo,
	MBTI,
	SetInfoDiv,
	Typo,
	Wrapper,
} from './SetUserName.styled';

const SetUserName = (props) => {
	const mbti = useRecoilValue(userMBTI);
	console.log(mbti);

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
				<MBTI>{mbti}</MBTI>
				<SetInfoDiv></SetInfoDiv>
			</Content>
		</Wrapper>
	);
};

export default SetUserName;
