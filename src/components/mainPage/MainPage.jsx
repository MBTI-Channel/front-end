import Header from '../elements/header/Header';
import { Section } from './MainPage.styled';
import Card from '../elements/card/Card';
import { CardWrapper } from './MainPage.styled';
import { accessTokenState } from '../../store/user';
import { useRecoilValue } from 'recoil';

const mainPage = () => {
	const accessToken = useRecoilValue(accessTokenState);
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
