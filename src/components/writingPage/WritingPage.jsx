import Gnb from '../articles/Gnb';
import {
	Section,
	CardWrapper,
	TextWrapper,
	ImageUploadBox,
	CategoryConatiner,
	MenuWrapper,
	SearchInputBox,
	Footer,
} from './WritingPage.style';
import Card from '../elements/content/card/Card';
import Title from '../elements/input/Title';
import Paragraph from '../elements/input/Paragraph';
import CustomButton from '../elements/button/CustomButton';
import Category from '../elements/category/Category';

/* 7/18 TODO
	1. 카테고리 컴포넌트 수정
	2. placeholder 줄바꿈
	3. 버튼 활성화
	4. 사진 올리는 방법 + 백엔드와 사진 관련 협의
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
				<CategoryConatiner>
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
						{/* <CustomButton height='52px'></CustomButton> */}
					</TextWrapper>
					<MenuWrapper>
						<SearchInputBox>
							<img src='/Icons/Basic/Search.svg' style={{ marginLeft: 20 }} />
							<input
								style={{ border: 0, fontWeight: 400, marginLeft: 8 }}
								placeholder='search here'
							/>
						</SearchInputBox>
						<Category />
						<Footer style={{ marginTop: '16px' }}>footer</Footer>
					</MenuWrapper>
				</CategoryConatiner>
			</Section>
		</>
	);
};

export default WritingPage;
