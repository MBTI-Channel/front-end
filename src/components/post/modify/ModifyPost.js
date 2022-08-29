import Header from '../../elements/header/Header';
import {
	Section,
	CardWrapper,
	TextWrapper,
	ImageUploadBox,
	CategoryConatiner,
	MenuWrapper,
	Footer,
} from '../write/WritingPage.style';
import Card from '../../elements/card/Card';
import Title from '../../elements/input/Title';
import Paragraph from '../../elements/input/Paragraph';
import { Button } from '../../elements/button/Button';
import SearchBar from '../../elements/bar/SearchBar';
import SideBar from '../../elements/sideBar/SideBar';
import CameraIcon from '../../../../public/Icons/Basic/Camera.svg';
import { useLayoutEffect, useState } from 'react';
import Board from '../../../service/boardService';
import styled from 'styled-components';
import { useRouter } from 'next/router';

/* 7/21 TODO
	1. placeholder 줄바꿈 ... 미해결
	2. 버튼 기능 활성화 (추후 백엔드 논의)
	3. 사진 올리는 방법 + 백엔드와 사진 관련 협의
*/

const ThumbnailImage = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 8px;
`;

const ModifyPost = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const router = useRouter();
	const { id } = router.query;
	const [detail, setDetail] = useState({});

	const onTitleChange = (e) => {
		const value = e.target.value;
		setTitle(value);
	};

	const onParagraphChange = (e) => {
		const value = e.target.value;
		setContent(value);
	};

	const onPostButtonClick = () => {
		const accessToken = localStorage.getItem('mbtichannel');
		Board.update(accessToken, id, title, content, false, []).then((res) =>
			console.log(res),
		);
	};

	useLayoutEffect(() => {
		if (!router.isReady) return;
		const accessToken = localStorage.getItem('mbtichannel');
		Board.detail(accessToken, Number(id)).then((res) => {
			console.log(res);
			setDetail(res?.data);
			setTitle(res?.data.title);
			setContent(res?.data.content);
		});
	}, [router.isReady]);

	const encodeFileToBase64 = (fileBlob) => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(fileBlob);

		return new Promise((resolve) => {
			fileReader.onload = () => {
				setImageUrl((data) => {
					const newData = { ...data };
					newData[0] = fileReader.result;
					return newData;
				});
				resolve();
			};
		});
	};

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
				<CategoryConatiner>
					<TextWrapper>
						<div style={{ fontWeight: '700', fontSize: '20px' }}>글 쓰기</div>
						<Title marginTop='16px' onChange={onTitleChange} value={title} />
						<Paragraph
							marginTop='8px'
							placeholder='&#8226; MBTI CHANNEL은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 &#13;&#10; 이용규칙을 제정하여 운영하고 있습니다. &#8226; 위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다. &#8226; 게시물 작성 전 커뮤니티 이용규칙 공지사항을 반드시 확인하시기 바랍니다. '
							onChange={onParagraphChange}
							value={content}
						/>
						<div
							style={{ marginTop: '16px', fontSize: '14px', fontWeight: '700' }}
						>
							사진 등록
						</div>
						<ImageUploadBox style={{ marginTop: '8px' }}>
							{imageUrl ? (
								<ThumbnailImage src={imageUrl[0]} alt='업로드 이미지' />
							) : (
								<>
									<input
										type='file'
										id='image-upload'
										accept='image/x-png,image/gif,image/jpeg'
										onChange={(e) => encodeFileToBase64(e.target.files[0])}
									/>
									<label htmlFor='image-upload' className='custom'>
										<CameraIcon width='48px' height='48px' fill='#C4C4C4' />
									</label>
								</>
							)}
						</ImageUploadBox>
						<Button
							width='795px'
							height='52px'
							mt='32px'
							backgroundColor='#1973FB'
							onClick={onPostButtonClick}
						>
							글 수정
						</Button>
					</TextWrapper>
					<MenuWrapper>
						<SearchBar />
						<SideBar marginTop='16px' />
						<Footer style={{ marginTop: '27px' }}>footer</Footer>
					</MenuWrapper>
				</CategoryConatiner>
			</Section>
		</>
	);
};

export default ModifyPost;
