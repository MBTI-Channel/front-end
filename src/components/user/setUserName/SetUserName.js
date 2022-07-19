import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userMBTI, userName } from '../../../store/user';
import { Wrapper } from '../../elements/wrapper/ContentWrapper.styled';
import { Content } from '../../elements/content/Content.styled';
import { Logo, MBTI, SetInfoDiv, Typo } from './SetUserName.styled';
import NameInput from '../../elements/input/NameInput';

const nameRegExp = /^[|가-힣|a-z|A-Z|0-9|]{2,10}$/;

const SetUserName = (props) => {
	const mbti = useRecoilValue(userMBTI);
	const [typedName, setTypedName] = useRecoilState(userName);
	const InpunRef = useRef();
	console.log(mbti);

	const nameHandler = (e) => {
		setTypedName(() => ({
			value: e.target.value.trim(),
			isValid: nameRegExp.test(e.target.value.trim()),
		}));
	};

	useEffect(() => {
		console.log(typedName);
	}, [typedName]);

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
				<NameInput
					ref={InpunRef}
					placeholder='닉네임은 언제든지 바꿀 수 있어요!'
					value={typedName.value}
					isValid={!typedName.value || typedName.isValid}
					onChange={nameHandler}
				></NameInput>
				{typedName.value && !typedName.isValid ? (
					<p style={{ color: 'red' }}>
						2~10자의 한글, 영어 숫자 조합으로 만들어주세요.
					</p>
				) : undefined}
			</Content>
		</Wrapper>
	);
};

export default SetUserName;
