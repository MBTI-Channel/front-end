import Cookies from 'js-cookie';
import { InputBox } from './ChangeProfilePage.styled';
import { Button } from '../elements/button/Button';
import { BlueStrokeButton } from '../elements/button/BlueStrokeButton';
import { Column } from '../elements/Wrapper.style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nicknameState, mbtiState, accessTokenState } from '../../store/user';
import User from '../../service/userService';
import { useEffect, useState } from 'react';

const changeProfile = () => {
	// const [nickname, setNickname] = useRecoilState(nicknameState);
	// const [mbti, setMbti] = useRecoilState(mbtiState);
	const [nickname, setNickname] = useState(
		decodeURI(Cookies.get('mbtichannel-nickname')),
	);
	const [mbti, setMbti] = useState(Cookies.get('mbtichannel-mbti'));
	const [accessToken, setAccessToken] = useState('');
	const [newNickname, setNewNickname] = useState('');
	const [newMbti, setNewMbti] = useState('');

	useEffect(() => {
		if (accessToken == '') {
			setAccessToken(localStorage.getItem('mbtichannel'));
		}
	});

	const onNicknameChange = (e) => {
		setNewNickname(e.target.value);
		// if (newNickname !== nickname) {
		// 	User.changeNickname(accessToken).then((res) => console.log(res));
		// }
	};

	const onMbtiChange = (e) => {
		setNewMbti(e.target.value);
		// if (newMbti !== mbti) {
		// 	User.changeMbti(accessToken).then((res) => console.log(res));
		// }
	};

	const onChangeProfileButtonClick = () => {
		if (newNickname !== nickname) {
			User.changeNickname(accessToken, newNickname).then((res) =>
				console.log(res),
			);
		}
		if (newMbti !== mbti) {
			User.changeMbti(accessToken, newMbti).then((res) => console.log(res));
		}
	};

	return (
		<Column alignItems='center' justifyContent='center'>
			<div className='title' style={{ marginTop: '48px' }}>
				닉네임 / MBTI 변경
			</div>
			<div className='heading-2' style={{ marginTop: '32px' }}>
				본인의 닉네임을 설정해주세요.
			</div>
			<InputBox
				placeholder='닉네임은 자유롭게 바꿀 수 있어요!'
				style={{ marginTop: '44px' }}
				onChange={onNicknameChange}
			/>
			<InputBox
				placeholder='MBTI는  14일 마다 바꿀 수 있어요!'
				style={{ marginTop: '20px' }}
				onChange={onMbtiChange}
			/>
			<Button
				width='390px'
				height='52px'
				className='heading-3-label'
				backgroundColor='#1973FB'
				style={{ marginTop: '213px' }}
				onClick={onChangeProfileButtonClick}
			>
				설정하기
			</Button>
			<BlueStrokeButton
				width='390px'
				marginTop='8px'
				backgroundColor='white'
				className='heading-3-label'
				color='#1973FB'
			>
				뒤로가기
			</BlueStrokeButton>
		</Column>
	);
};

export default changeProfile;
