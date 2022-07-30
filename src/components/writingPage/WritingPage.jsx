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
import { Button } from '../elements/button/Button';
import SearchBar from '../elements/bar/SearchBar';
import Category from '../elements/category/Category';
import CameraIcon from '../../../public/Icons/Basic/Camera.svg';

/* 7/21 TODO
	1. placeholder 줄바꿈 ... 미해결
	2. 버튼 기능 활성화 (추후 백엔드 논의)
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
				<CategoryConatiner>
					<TextWrapper>
						<div style={{ fontWeight: '700', fontSize: '20px' }}>글 쓰기</div>
						<Title marginTop='16px' />
						<Paragraph
							marginTop='8px'
							placeholder='&#8226; MBTI CHANNEL은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 &#10; 이용규칙을 제정하여 운영하고 있습니다. &#8226; 위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다. &#8226; 게시물 작성 전 커뮤니티 이용규칙 공지사항을 반드시 확인하시기 바랍니다. '
						/>
						<div
							style={{ marginTop: '16px', fontSize: '14px', fontWeight: '700' }}
						>
							사진 등록
						</div>
						<ImageUploadBox style={{ marginTop: '8px' }}>
							<input
								type='file'
								id='image-upload'
								accept='image/x-png,image/gif,image/jpeg'
							/>
							<CameraIcon width='48px' height='48px' fill='#C4C4C4' />
						</ImageUploadBox>
						<Button height='52px' marginTop='53px'>
							글 올리기
						</Button>
					</TextWrapper>
					<MenuWrapper>
						<SearchBar />
						<Category marginTop='16px' />
						<Footer style={{ marginTop: '16px' }}>footer</Footer>
					</MenuWrapper>
				</CategoryConatiner>
			</Section>
		</>
	);
};

export default WritingPage;
