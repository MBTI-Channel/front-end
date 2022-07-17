import Gnb from '../articles/Gnb';
import {
	Section,
	CardWrapper,
	TextWrapper,
	ImageUploadBox,
} from './WritingPage.style';
import Card from '../elements/content/card/Card';
import Title from '../elements/input/Title';
import Paragraph from '../elements/input/Paragraph';
import CustomButton from '../elements/button/CustomButton';

/* 7/18 TODO
	1. 타 컴포넌트 커스터마이징
	2. 버튼 활성화
	3. 사진 올리는 방법 + 백엔드와 사진 관련 협의
*/

const WritingPage = () => {
	return (
		<>
			<Gnb isVisible />
			<Section>
				<CardWrapper>
					<Card src='/sample_image.jpeg' />
					<Card src='/sample_image.jpeg' />
					<Card src='/sample_image.jpeg' />
					<Card src='/sample_image.jpeg' />
				</CardWrapper>
				<TextWrapper>
					<div>글쓰기</div>
					<Title marginTop='16px'></Title>
					<Paragraph marginTop='8px'></Paragraph>
					<div style={{ marginTop: '16px' }}>사진 등록</div>
					<ImageUploadBox style={{ marginTop: '8px' }}>
						<input
							type='file'
							id='image-upload'
							accept='image/x-png,image/gif,image/jpeg'
						/>
						<img src='/Icons/Basic/Camera.svg' alt='카메라 아이콘' />
					</ImageUploadBox>
				</TextWrapper>
				{/* <CustomButton height='52px'></CustomButton> */}
			</Section>
		</>
	);
};

export default WritingPage;
