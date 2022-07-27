import { useRouter } from 'next/router';
import Gnb from '../../components/articles/Gnb';
import { Section, CardWrapper } from './ProfilePage.styled';
import Card from '../elements/content/card/Card';
import Category from '../elements/category/Category';

/* 7/25 todo
1. 프로필 페이지 레이아웃 완성
2. 컬러, 폰트 컴포넌트 정리
3. 달라진 컴포넌트 전달받아 정리
4. Gnb 부분 선택시 텍스트 컬러 변경
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
				<Category />
			</Section>
		</>
	);
};

export default Profile;
