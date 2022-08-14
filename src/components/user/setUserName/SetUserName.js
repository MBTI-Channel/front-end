import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState, userName } from '../../../store/user';
import { Wrapper } from '../../elements/wrapper/ContentWrapper.styled';
import { Content } from '../../elements/Content.styled';
import { MBTI } from './SetUserName.styled';
import NameInput from '../../elements/input/NameInput';
import { BackwardButton, Button } from '../../elements/button/Button';
import { Typo } from '../../elements/typo/Typo.styled';
import User from '../../../service/userService';
import Header from '../../elements/header/Header';
import { useRouter } from 'next/router';

const nameRegExp = /^[|가-힣|a-z|A-Z|0-9|]{2,10}$/;

const SetUserName = (props) => {
	const [typedName, setTypedName] = useRecoilState(userName);
	const [userInfo, setUserInfo] = useRecoilState(userState);
	const InpunRef = useRef();
	const [notDupl, setNotDupl] = useState(false);
	const [validateMsg, setValidateMsg] = useState();
	const router = useRouter();

	const nameHandler = useCallback(
		(e) => {
			setTypedName((prev) => ({
				...prev,
				value: e.target.value.trim(),
				isValid: nameRegExp.test(e.target.value.trim()),
			}));
		},
		[setTypedName],
	);

	const onSignUp = useCallback(
		(e) => {
			User.signUp(userInfo).then((user) => {
				localStorage.setItem('mbtichannel', user.data.accessToken);
				router.push('/');
			});
		},
		[userInfo, router],
	);

	useEffect(() => {
		if (!typedName.value) {
			setValidateMsg('');
			return;
		}
		if (!typedName.isValid) {
			setValidateMsg(
				<p style={{ color: 'red' }}>
					2~10자의 한글, 영어 숫자 조합으로 만들어주세요.
				</p>,
			);
			return;
		} else {
			const duplicateCheckTimeout = setTimeout(() => {
				User.nameDuplicateCheck(typedName.value.trim()) //
					.then((res) => {
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
	}, [typedName, setTypedName, setValidateMsg]);

	return (
		<>
			<Header />
			<Wrapper>
				<Content>
					{' '}
					{/* TODO: 싹자 form으로 바꾸기 */}
					<Typo fontWeight={400} fontSize={'1.5rem'} mb={`48px`}>
						채널에서 사용할 닉네임을 설정해주세요.
					</Typo>
					<MBTI>{userInfo.mbti}</MBTI>
					<NameInput
						ref={InpunRef}
						placeholder='닉네임은 언제든지 바꿀 수 있어요!'
						value={typedName.value}
						isValid={!typedName.value || typedName.isValid}
						notDupl={!typedName.value || notDupl}
						onChange={nameHandler}
					></NameInput>
					<Typo
						style={{ textAlign: 'left' }}
						fontWeight={400}
						fontSize={'0.75rem'}
					>
						{validateMsg}
					</Typo>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							position: 'absolute',
							bottom: '0px',
						}}
					>
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
							marginTop={'8px'}
							fontWeight={'700'}
						>
							뒤로가기
						</BackwardButton>
					</div>
				</Content>
			</Wrapper>
		</>
	);
};

export default memo(SetUserName);
