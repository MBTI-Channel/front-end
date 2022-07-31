import { Wrapper, InputBox } from './changeProfilePage.styled';
import { Button } from '../elements/button/Button';
import { BlueStrokeButton } from '../elements/button/BlueStrokeButton';

const changeProfile = () => {
	const onChangeProfileButtonClick = () => {};

	return (
		<Wrapper>
			<div style={{ fontSize: '40px', fontWeight: '700' }}>
				닉네임 / MBTI 변경
			</div>
			<div style={{ fontSize: '20px', fontWeight: '400', marginTop: '22px' }}>
				본인의 닉네임을 설정해주세요.
			</div>
			<InputBox
				placeholder='닉네임은 언제든지 바꿀 수 있어요!'
				style={{ marginTop: '44px' }}
			/>
			<Button
				width='390px'
				height='52px'
				backgroundColor='#1973FB'
				style={{ marginTop: '154px' }}
				onClick={onChangeProfileButtonClick}
			>
				설정하기
			</Button>
			<BlueStrokeButton
				width='390px'
				marginTop='8px'
				backgroundColor='white'
				borderColor='#1973FB'
				color='#1973FB'
			>
				뒤로가기
			</BlueStrokeButton>
		</Wrapper>
	);
};

export default changeProfile;
