import Gnb from '../articles/Gnb';
import { Section } from '../profilePage/ProfilePage.styled';
import Card from '../elements/card/Card';
import { CardWrapper } from '../profilePage/ProfilePage.styled';
import { ContentWrapper, ButtonContainer } from './ActivityPage.styled';
import { Button } from '../elements/button/Button';
import PostThumbnailBar from '../elements/bar/PostThumbnailBar';
import SearchBar from '../elements/bar/SearchBar';
import Category from '../elements/category/Category';
import Footer from '../elements/Footer';
import { Row, Column } from '../elements/Wrapper.style';

const ActivityPage = () => {
	return (
		<>
			<Gnb isVisible />
			<Section>
				<CardWrapper>
					<Card />
					<Card />
					<Card />
					<Card />
				</CardWrapper>
				<Row marginTop='72px'>
					<Column>
						<Column
							style={{
								fontWeight: 700,
								fontSize: '20px',
								lineHeight: '30px',
							}}
						>
							내활동
							<ButtonContainer>
								<Button width='99px' height='34px' backgroundColor='#1973FB'>
									내가 쓴 글
								</Button>
								<Button width='110px' height='34px' backgroundColor='#1973FB'>
									내가 쓴 댓글
								</Button>
								<Button width='154px' height='34px' backgroundColor='#1973FB'>
									내가 참여한 공식질문
								</Button>
								<Button width='82px' height='34px' backgroundColor='#1973FB'>
									북마크
								</Button>
							</ButtonContainer>
						</Column>
						<ContentWrapper>
							<Column>
								<PostThumbnailBar marginTop='16px' />
								<PostThumbnailBar marginTop='8px' />
								<PostThumbnailBar marginTop='8px' />
								<PostThumbnailBar marginTop='8px' />
							</Column>
							<Column marginBottom='212px' marginLeft='14px'>
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
