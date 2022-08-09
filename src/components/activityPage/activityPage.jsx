import Gnb from '../articles/Gnb';
import { Section } from '../profilePage/ProfilePage.styled';
import Card from '../elements/card/Card';
import { CardWrapper } from '../profilePage/ProfilePage.styled';
import { ContentWrapper, ButtonContainer } from './activityPage.styled';
import { Button } from '../elements/button/Button';
import Bar from '../elements/bar/Bar';
import PostThumbnailBar from '../elements/bar/PostThumbnailBar';

const MyActivity = () => {
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
				<ContentWrapper>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
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
						<PostThumbnailBar />
					</div>
				</ContentWrapper>
			</Section>
		</>
	);
};

export default MyActivity;
