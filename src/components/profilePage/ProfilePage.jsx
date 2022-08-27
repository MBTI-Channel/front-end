import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/elements/header/Header';
import {
	Section,
	CardWrapper,
	ProfileBar,
	ActivityContainer,
	ActivityBar,
	MyActivityContainer,
	MyActivity,
	InputBox,
	Modal,
	ModalBox,
} from './ProfilePage.styled';
import { Row, Column } from '../elements/Wrapper.style';
import Card from '../elements/card/Card';
import { SmallButton } from '../elements/button/SmallButton';
import SearchBar from '../elements/bar/SearchBar';
import Category from '../elements/category/Category';
import { Footer } from '../writingPage/WritingPage.style';
import User from '../../service/userService';
import {
	accessTokenState,
	nicknameState,
	mbtiState,
	isAdminState,
	newNicknameState,
} from '../../store/user';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import { Button } from '../elements/button/Button';
import { MBTI_BLUE } from '../../styles/color';
import SetMBTI from '../user/setMBTI/SetMBTI';
import CrossIcon from '../elements/customIcon/CrossIcon';

/* 7/25 TODO
1. 컬러, 폰트 컴포넌트 정리
2. 달라진 컴포넌트 전달받아 정리
3. Gnb 부분 선택시 텍스트 컬러 변경
4. 버튼 클릭시 mbti, 닉네임 이동경로 설정
*/

const Profile = () => {
	const router = useRouter();
	const [nickname, setNickname] = useRecoilState(nicknameState);
	const [mbti, setMbti] = useRecoilState(mbtiState);
	const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
	const [createdAt, setCreatedAt] = useState('');
	const [isAdmin, setIsAdmin] = useRecoilState(isAdminState);
	const [showNicknameChangeModal, setShowNicknameChangeModal] = useState(false);
	const [showMbtiChangeModal, setShowMbtiChangeModal] = useState(false);
	const [newNickname, setNewNickname] = useRecoilState(newNicknameState);

	const onClick = (e) => {
		const value = e.target.value;
		if (value == 'openNicknameChangeModal') {
			setShowNicknameChangeModal(true);
		} else if (value == 'openMbtiChangeModal') {
			setShowMbtiChangeModal(true);
		} else if (value == 'changeNickname') {
			if (newNickname !== nickname) {
				User.changeNickname(accessToken, newNickname).then((res) => {
					setAccessToken(res.data.accessToken);
					setNickname(newNickname);
					console.log(res);
				});
			}
		} else if (value == 'changeMbti') {
			d;
		} else if (value == 'backward-button') {
			console.log('hi');
			setShowNicknameChangeModal(false);
		}
	};

	const onChange = (e) => {
		const value = e.target.value;
		setNewNickname(value);
	};

	if (nickname == '' && accessToken) {
		User.me(accessToken).then((res) => {
			setNickname(res.data.nickname);
			setMbti(res.data.mbti);
			setCreatedAt(res.data.createdAt.slice(0, 10));
			setIsAdmin(res.data.isAdmin);
		});
	}

	const onClickActivity = (e) => {
		// const { value } = e.target.value;
		// if (value == 'alarm') {
		// 	router.push('/alarm');
		// } else if (value == 'myActivity') {
		// 	router.push('/myActivity');
		// } else if (value == 'question') {
		// 	router.push('/question');
		// } else if (value == 'prohibit') {
		// 	router.push('/prohibit');
		// } else if (value == 'quit') {
		// 	router.push('/quit');
		// } else if (value == 'myActivity') {
		// 	router.push('/myActivity');
		// }
		console.log(e.target.value);
	};

	return (
		<>
			<Header isVisible />
			<Section>
				<CardWrapper>
					<Card src='/sample_image.jpeg' />
					<Card src='/sample_image.jpeg' />
					<Card src='/sample_image.jpeg' />
					<Card src='/sample_image.jpeg' />
				</CardWrapper>
				<Row marginTop='72px'>
					<Column>
						<ProfileBar>
							<div className='profile-info-container'>
								<span className='label'>
									{nickname} | {mbti}
								</span>
								<span className='datetime-container small-text-bold'>
									{createdAt}
								</span>
							</div>
							<Row>
								<SmallButton
									width='107px'
									className='small-text-regular'
									onClick={onClick}
									value='openNicknameChangeModal'
								>
									닉네임 변경
								</SmallButton>
								<SmallButton
									width='103px'
									className='small-text-regular'
									onClick={onClick}
									value='openMbtiChangeModal'
									style={{ marginLeft: '8px' }}
								>
									MBTI 변경
								</SmallButton>
							</Row>
						</ProfileBar>
						{/* <Modal>
							<ModalBox>닉네임 변경</ModalBox>
						</Modal> */}
						<ActivityContainer className='label'>
							<ActivityBar style={{ marginTop: '24px' }} value='alarm'>
								<img className='icon-container' src='/Icons/Basic/bell.svg' />
								<span className='text-container' value='alarm'>
									알림
								</span>
							</ActivityBar>
							<ActivityBar>
								<img
									className='icon-container'
									src='/Icons/Basic/History.svg'
								/>
								<span className='text-container'>내 활동</span>
							</ActivityBar>
							<MyActivityContainer className='label-2'>
								<MyActivity>내가 쓴 글</MyActivity>
								<MyActivity>내가 쓴 댓글</MyActivity>
								<MyActivity>내가 참여한 공식질문</MyActivity>
								<MyActivity>북마크</MyActivity>
							</MyActivityContainer>
							<ActivityBar>
								<img
									className='icon-container'
									src='/Icons/Basic/Questionmark.svg'
								/>
								<span className='text-container'>문의</span>
							</ActivityBar>
							<ActivityBar>
								<img className='icon-container' src='/Icons/Basic/Alert.svg' />
								<span className='text-container'>이용 제한 내역</span>
							</ActivityBar>
							<ActivityBar>
								<img
									className='icon-container'
									src='/Icons/Basic/Signout.svg'
								/>
								<span className='text-container'>탈퇴</span>
							</ActivityBar>
						</ActivityContainer>
					</Column>
					<Column marginLeft='14px'>
						<SearchBar />
						<Category marginTop='16px' />
						<Footer style={{ marginTop: '20px' }}>Footer</Footer>
					</Column>
				</Row>
				{showNicknameChangeModal ? (
					<Modal>
						<ModalBox>
							<Column alignItems='center' justifyContent='center'>
								<CrossIcon
									style={{
										position: 'relative',
										top: '20px',
										left: '278.5px',
										backgroundColor: 'white',
									}}
									onClick={onClick}
									value='backward-button'
								/>
								<div className='title' style={{ marginTop: '92px' }}>
									닉네임 변경
								</div>
								<div className='notice-l' style={{ marginTop: '32px' }}>
									채널에서 사용할 닉네임을 설정해주세요.
								</div>
								<InputBox
									placeholder='닉네임은 언재든지 바꿀 수 있어요!'
									style={{ marginTop: '16px' }}
									onChange={onChange}
								/>
								<Button
									width='390px'
									height='52px'
									className='heading-3-label'
									value='changeNickname'
									backgroundColor={MBTI_BLUE}
									style={{ marginTop: '303px' }}
									onClick={onClick}
								>
									설정하기
								</Button>
							</Column>
						</ModalBox>
					</Modal>
				) : (
					<></>
				)}
				{showMbtiChangeModal ? (
					<Modal>
						<ModalBox>
							<Column alignItems='center' justifyContent='center'>
								<div className='title' style={{ marginTop: '92px' }}>
									MBTI 변경
								</div>
								<div className='notice-l' style={{ marginTop: '32px' }}>
									아래 알파벳을 조합해 MBTI를 설정해주세요.
								</div>
								<SetMBTI style={{ marginBottom: '2400px' }} />
								<Button
									width='390px'
									height='52px'
									className='heading-3-label'
									backgroundColor='#1973FB'
									style={{ marginTop: '303px' }}
									onClick={onClick}
								>
									설정하기
								</Button>
							</Column>
						</ModalBox>
					</Modal>
				) : (
					<></>
				)}
			</Section>
		</>
	);
};

export default Profile;
