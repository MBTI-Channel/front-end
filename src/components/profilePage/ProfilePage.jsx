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
} from './ProfilePage.styled';
import { Row, Column } from '../elements/Wrapper.style';
import Card from '../elements/card/Card';
import { SmallButton } from '../elements/button/SmallButton';
import SearchBar from '../elements/bar/SearchBar';
import Category from '../elements/category/Category';
import { Footer } from '../writingPage/WritingPage.style';
import User from '../../service/userService';
import profileService from '../../service/profileservice';
import { accessTokenState } from '../../store/user';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isAdminState } from '../../store/profileState';

/* 7/25 TODO
1. 컬러, 폰트 컴포넌트 정리
2. 달라진 컴포넌트 전달받아 정리
3. Gnb 부분 선택시 텍스트 컬러 변경
4. 버튼 클릭시 mbti, 닉네임 이동경로 설정
*/

const Profile = () => {
	const router = useRouter();
	const [nickname, setNickname] = useState('');
	const [mbti, setMbti] = useState('');
	const accessToken = useRecoilValue(accessTokenState);
	const [createdAt, setCreatedAt] = useState('');
	const [isAdmin, setIsAdmin] = useRecoilState(isAdminState);

	const userId = router.query.id;

	const onClickChangeProfileInfo = () => {
		const screenWidth = screen.availWidth;
		const screenHeight = screen.availHeight;
		const popWidth = 779;
		const popHeight = 779;
		const positionLeft = (screenWidth - popWidth) / 2;
		const positionTop = (screenHeight - popHeight) / 2;
		window.open(
			'/auth/changeProfile',
			'test',
			`width=${popWidth}, height=${popHeight}, top=${positionTop}, left=${positionLeft}, resizable=yes, scrollbars=no`,
		);
	};

	if (nickname == '') {
		if (accessToken) {
			User.me(accessToken).then((res) => {
				setNickname(res.data.nickname);
				setMbti(res.data.mbti);
				setCreatedAt(res.data.createdAt.slice(0, 10));
				setIsAdmin(res.data.isAdmin);
			});
		}
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
							<SmallButton isFilled={true} onClick={onClickChangeProfileInfo}>
								닉네임/MBTI 변경
							</SmallButton>
						</ProfileBar>
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
			</Section>
		</>
	);
};

export default Profile;
