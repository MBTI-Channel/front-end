import Gnb from '../articles/Gnb';
import Header from '../elements/header/Header';
import { Section } from '../profilePage/ProfilePage.styled';
import Card from '../elements/card/Card';
import { CardWrapper } from '../profilePage/ProfilePage.styled';
import {
	ContentWrapper,
	ButtonContainer,
	CategoryButton,
} from './activityPage.styled';
import ThumbnailBar from '../elements/bar/ThumbnailBar';
import SearchBar from '../elements/bar/SearchBar';
import Category from '../elements/category/Category';
import Footer from '../elements/Footer';
import { Row, Column } from '../elements/Wrapper.style';
import User from '../../service/userService';

const ActivityPage = () => {
	User.getPost('test', 0, 4, 'createdAt').then((res) => console.log(res));
	return (
		<>
			<Header isVisible />
			<Section>
				<CardWrapper>
					<Card />
					<Card />
					<Card />
					<Card />
				</CardWrapper>
				<Row marginTop='72px'>
					<Column>
						<Column>
							<span className='heading-1'>내활동</span>
							<ButtonContainer>
								<CategoryButton
									className='small-text-bold'
									width='99px'
									height='34px'
									isSelected={true}
								>
									내가 쓴 글
								</CategoryButton>
								<CategoryButton
									className='small-text-bold'
									width='110px'
									height='34px'
									isSelected={false}
								>
									내가 쓴 댓글
								</CategoryButton>
								<CategoryButton
									className='small-text-bold'
									width='154px'
									height='34px'
									isSelected={false}
								>
									내가 참여한 공식질문
								</CategoryButton>
								<CategoryButton
									className='small-text-bold'
									width='82px'
									height='34px'
									isSelected={false}
								>
									북마크
								</CategoryButton>
							</ButtonContainer>
						</Column>
						<ContentWrapper style={{ marginTop: '16px' }}>
							<Column>
								<ThumbnailBar />
								<ThumbnailBar marginTop='8px' />
								<ThumbnailBar marginTop='8px' />
								<ThumbnailBar marginTop='8px' />
							</Column>
							<Column marginLeft='14px'>
								<SearchBar />
								<Category marginTop='16px' />
								<Footer marginTop='16px' />
							</Column>
						</ContentWrapper>
					</Column>
				</Row>
			</Section>
		</>
	);
};

export default ActivityPage;
