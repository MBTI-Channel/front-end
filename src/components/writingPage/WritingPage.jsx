import Gnb from '../articles/Gnb';
import { Section, QuestionCardWrapper } from './WritingPage.style';

const WritingPage = () => {
	return (
		<>
			<Gnb isVisible />
			<Section>
				<QuestionCardWrapper>hi</QuestionCardWrapper>
			</Section>
		</>
	);
};

export default WritingPage;
