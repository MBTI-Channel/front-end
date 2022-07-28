import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState, userName } from '../../../store/user';
import userService from '../../../service/userService';
import { Wrapper } from '../../elements/wrapper/ContentWrapper.styled';
import { Content } from '../../elements/content/Content.styled';
import { MBTI, SetInfoDiv, Typo } from './SetUserName.styled';
import NameInput from '../../elements/input/NameInput';
import Gnb from '../../articles/Gnb';
import { BackwardButton, Button } from '../../elements/button/Button';

const nameRegExp = /^[|가-힣|a-z|A-Z|0-9|]{2,10}$/;

const SetUserName = (props) => {
	const [typedName, setTypedName] = useRecoilState(userName);
	const [userInfo, setUserInfo] = useRecoilState(userState);
	const InpunRef = useRef();
	const [validateMsg, setValidateMsg] = useState(
		<p style={{ color: 'white' }}>안녕</p>,
	);
	const [notDupl, setNotDupl] = useState(false);

	console.log(userInfo);

	const nameHandler = (e) => {
		setTypedName((prev) => ({
			...prev,
			value: e.target.value.trim(),
			isValid: nameRegExp.test(e.target.value.trim()),
		}));
	};

	const onSignUp = (e) => {
		userService.signUp(userInfo).then((res) => console.log(res));
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
						if (res.data?.isExistsNickname) {
							setNotDupl(false);
							setValidateMsg(
								<p style={{ color: 'red' }}>이미 존재하는 이름입니다.</p>,
							);
						} else {
							setNotDupl(true);
							setValidateMsg(
								<p style={{ color: '#1973FB' }}>사용 가능한 이름입니다.</p>,
							);
							setUserInfo((prev) => ({
								...prev,
								id: +prev.id,
								nickname: typedName.value,
							}));
						}
					});
			}, 500);

			return () => {
				clearTimeout(duplicateCheckTimeout);
			};
		}
		return;
	}, [typedName, setTypedName, setValidateMsg]);

	return (
		<>
			<Gnb isVisible={true}></Gnb>
			<Wrapper>
				<Content>
					{' '}
					{/* TODO: 싹자 form으로 바꾸기 */}
					<Typo>채널에서 사용할 닉네임을 설정해주세요.</Typo>
					<MBTI>{userInfo.mbti}</MBTI>
					<SetInfoDiv>{typedName.value}</SetInfoDiv>
					<NameInput
						ref={InpunRef}
						placeholder='닉네임은 언제든지 바꿀 수 있어요!'
						value={typedName.value}
						isValid={!typedName.value || typedName.isValid}
						notDupl={!typedName.value || notDupl}
						onChange={nameHandler}
					></NameInput>
					<div style={{ height: '15px' }}>{validateMsg}</div>
					<Button
						width={'24.375rem'}
						height={'3rem'}
						disabled={!(typedName.isValid && notDupl)}
						marginTop={'50px'}
						fontWeight={'700'}
						onClick={onSignUp}
					>
						가입하기
					</Button>
					<BackwardButton
						width={'24.375rem'}
						height={'3rem'}
						marginTop={'25px'}
						fontWeight={'700'}
					>
						뒤로가기
					</BackwardButton>
				</Content>
			</Wrapper>
		</>
	);
};

export default SetUserName;
