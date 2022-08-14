import Header from '../elements/header/Header';
import { Section } from './MainPage.styled';
import Card from '../elements/card/Card';
import { CardWrapper } from './MainPage.styled';

const mainPage = () => {
	if (typeof window !== 'undefined') {
		const accessToken = localStorage.getItem('mbtichannel');
		console.log(accessToken);
	}
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
			</Section>
		</>
	);
};

export default mainPage;
