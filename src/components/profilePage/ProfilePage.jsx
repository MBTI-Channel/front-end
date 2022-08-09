import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Gnb from '../../components/articles/Gnb';
import {
	Section,
	CardWrapper,
	ProfileBar,
	ActivityContainer,
	ActivityBar,
	MyActivityContainer,
	MyActivity,
} from './ProfilePage.styled';
import Card from '../elements/card/Card';
import { SmallButton } from '../elements/button/SmallButton';
import SearchBar from '../elements/bar/SearchBar';
import Category from '../elements/category/Category';
import { Footer } from '../writingPage/WritingPage.style';
import boardService from '../../service/boardService';
import { useRecoilState } from 'recoil';
import { isAdminState } from '../../store/profileState';

/* 7/25 TODO
1. 컬러, 폰트 컴포넌트 정리
2. 달라진 컴포넌트 전달받아 정리
3. Gnb 부분 선택시 텍스트 컬러 변경
4. 버튼 클릭시 mbti, 닉네임 이동경로 설정
*/

const Profile = () => {
	const [nickname, setNickname] = useState('');
	const [mbti, setMbti] = useState('');
	const [isAdmin, setIsAdmin] = useRecoilState(isAdminState);

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

	const profile = boardService.profile();

	// 정보 설정
	// setNickname(profile.nickname);
	// setMbti(profile.mbti);
	// setIsAdmin(profile.isAdmin);

	return (
		<>
			<Gnb isVisible />
			<Section>
				<CardWrapper>
					<Card src='/sample_image.jpeg' />
					<Card src='/sample_image.jpeg' />
					<Card src='/sample_image.jpeg' />
					<Card src='/sample_image.jpeg' />
				</CardWrapper>
				<div style={{ display: 'flex', marginTop: '72px' }}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<ProfileBar>
							<div className='profile-info-container'>
								<span className='nickname-mbti-container'>
									{nickname} | {mbti}
								</span>
								<span className='datetime-container'>2022-01-14</span>
							</div>
							<SmallButton
								isFilled={true}
								onClick={() => onClickChangeProfileInfo()}
							>
								닉네임/MBTI 변경
							</SmallButton>
						</ProfileBar>
						<ActivityContainer>
							<ActivityBar>
								<img className='icon-container' src='/Icons/Basic/bell.svg' />
								<span className='text-container'>알림</span>
							</ActivityBar>
							<ActivityBar>
								<img
									className='icon-container'
									src='/Icons/Basic/History.svg'
								/>
								<span className='text-container'>내 활동</span>
							</ActivityBar>
							<MyActivityContainer>
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
					</div>
					<div style={{ marginLeft: '14px' }}>
						<SearchBar />
						<Category marginTop='32px' />
						<Footer style={{ marginTop: '20px' }}>Footer</Footer>
					</div>
				</div>
			</Section>
		</>
	);
};

export default Profile;
