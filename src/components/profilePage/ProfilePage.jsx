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
import Card from '../elements/content/card/Card';
import { SmallButton } from '../elements/button/SmallButton';
import SearchBar from '../elements/bar/SearchBar';
import Category from '../elements/category/Category';
import { Footer } from '../writingPage/WritingPage.style';

/* 7/25 TODO
1. 컬러, 폰트 컴포넌트 정리
2. 달라진 컴포넌트 전달받아 정리
3. Gnb 부분 선택시 텍스트 컬러 변경
*/

const Profile = () => {
	const router = useRouter();
	if (router.pathname == 'auth/profile') {
	}
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
								<span className='nickname-mbti-container'>닉네임 | MBTI</span>
								<span className='datetime-container'>2022-01-14</span>
							</div>
							<SmallButton isFilled={true}>닉네임/MBTI 변경</SmallButton>
						</ProfileBar>
						<ActivityContainer>
							<ActivityBar>
								<img className='icon-container' src='/Icons/Basic/bell.svg' />
								<span className='text-container'>알림</span>
							</ActivityBar>
							<ActivityBar>
								<img className='icon-container' src='/Icons/Basic/bell.svg' />
								<span className='text-container'>내 활동</span>
							</ActivityBar>
							<MyActivityContainer>
								<MyActivity>내가 쓴 글</MyActivity>
								<MyActivity>내가 쓴 댓글</MyActivity>
								<MyActivity>내가 참여한 공식질문</MyActivity>
								<MyActivity>북마크</MyActivity>
							</MyActivityContainer>
							<ActivityBar>
								<img className='icon-container' src='/Icons/Basic/bell.svg' />
								<span className='text-container'>문의</span>
							</ActivityBar>
							<ActivityBar>
								<img className='icon-container' src='/Icons/Basic/bell.svg' />
								<span className='text-container'>이용 제한 내역</span>
							</ActivityBar>
							<ActivityBar>
								<img className='icon-container' src='/Icons/Basic/bell.svg' />
								<span className='text-container'>탈퇴</span>
							</ActivityBar>
						</ActivityContainer>
					</div>
					<div style={{ marginLeft: '14px' }}>
						<SearchBar />
						<Category />
						<Footer style={{ marginTop: '32px' }}>Footer</Footer>
					</div>
				</div>
			</Section>
		</>
	);
};

export default Profile;
