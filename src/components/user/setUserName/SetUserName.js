import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userMBTI, userName } from '../../../store/user';
import userService from '../../../service/userService';
import { Wrapper } from '../../elements/wrapper/ContentWrapper.styled';
import { Content } from '../../elements/content/Content.styled';
import { Logo, MBTI, SetInfoDiv, Typo } from './SetUserName.styled';
import NameInput from '../../elements/input/NameInput';

const nameRegExp = /^[|가-힣|a-z|A-Z|0-9|]{2,10}$/;

const SetUserName = (props) => {
	const mbti = useRecoilValue(userMBTI);
	const [typedName, setTypedName] = useRecoilState(userName);
	const InpunRef = useRef();
	const [validateMsg, setValidateMsg] = useState();

	const nameHandler = (e) => {
		setTypedName(() => ({
			value: e.target.value.trim(),
			isValid: nameRegExp.test(e.target.value.trim()),
		}));
	};

	useEffect(() => {
		typedName.value
			? setValidateMsg(
					<p style={{ color: 'red' }}>
						2~10자의 한글, 영어 숫자 조합으로 만들어주세요.
					</p>,
			  )
			: '';

		if (typedName.isValid) {
			const duplicateCheckTimeout = setTimeout(() => {
				userService //
					.nameDuplicateCheck(typedName.value.trim())
					.then((res) => {
						console.log(res);
						if (res.data.isExistsNickname) {
							setValidateMsg(
								<p style={{ color: 'red' }}>이미 존재하는 이름입니다.</p>,
							);
							console.log(validateMsg);
						} else {
							setValidateMsg(
								<p style={{ color: 'blue' }}>사용 가능한 이름입니다.</p>,
							);
							console.log(validateMsg.props.children);
						}
					});
			}, 500);

			return () => {
				console.log(`Clean up`);
				clearTimeout(duplicateCheckTimeout);
			};
		}
		return;
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
				<div>{validateMsg}</div>
			</Content>
		</Wrapper>
	);
};

export default SetUserName;
