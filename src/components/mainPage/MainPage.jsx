import Gnb from '../articles/Gnb';
import { Section } from './MainPage.styled';

const mainPage = () => {
	if (typeof window !== 'undefined') {
		const accessToken = localStorage.getItem('mbtichannel');
		console.log(accessToken);
	}
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
