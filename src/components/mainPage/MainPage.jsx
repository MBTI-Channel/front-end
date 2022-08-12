import Gnb from '../articles/Gnb';
import { Section } from './MainPage.styled';

const mainPage = () => {
	return (
		<>
			<Gnb isVisible />
			<Section>
				<div>hi</div>
			</Section>
		</>
	);
};

export default mainPage;
