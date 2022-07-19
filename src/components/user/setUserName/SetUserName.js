import Link from 'next/link';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userMBTI, userName } from '../../../sotre/user';
import { Wrapper } from '../../elements/wrapper/ContentWrapper.styled';
import { Content } from '../../elements/content/Content.styled';
import { Logo, MBTI, SetInfoDiv, Typo } from './SetUserName.styled';

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
