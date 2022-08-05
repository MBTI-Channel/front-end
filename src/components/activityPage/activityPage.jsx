import Gnb from '../articles/Gnb';
import { Section } from '../profilePage/ProfilePage.styled';
import Card from '../elements/content/card/Card';
import { CardWrapper } from '../profilePage/ProfilePage.styled';

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
				<span style={{ marginTop: '72px' }}>내활동</span>
			</Section>
		</>
	);
};

export default MyActivity;
