import Gnb from '../articles/Gnb';
import Header from '../elements/header/Header';
import { Section } from '../profilePage/ProfilePage.styled';
import Card from '../elements/card/Card';
import { CardWrapper } from '../profilePage/ProfilePage.styled';
import { ContentWrapper, ButtonContainer } from './ActivityPage.styled';
import { Button } from '../elements/button/Button';
import ThumbnailBar from '../elements/bar/ThumbnailBar';
import SearchBar from '../elements/bar/SearchBar';
import Footer from '../elements/Footer';
import { Row, Column } from '../elements/Wrapper.style';
import SideBar from "../elements/sideBar/SideBar";

const ActivityPage = () => {
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
								<ThumbnailBar marginTop='16px' />
								<ThumbnailBar marginTop='8px' />
								<ThumbnailBar marginTop='8px' />
								<ThumbnailBar marginTop='8px' />
							</Column>
							<Column marginBottom='212px' marginLeft='14px'>
								<SearchBar />
								<SideBar marginTop='16px' />
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
