import React, { useEffect } from 'react';
import Header from '../../components/elements/header/Header';
import Card from '../../components/elements/card/Card';
import SearchBar from '../../components/elements/bar/SearchBar';
import SideBar from '../elements/sideBar/SideBar';
import boardService from '../../service/boardService';
import {
	// TODO: 공용 컴포넌트로 분리하기
	Section,
	CardWrapper,
	CategoryConatiner,
	MenuWrapper,
	Footer,
	TextWrapper,
} from '../writingPage/WritingPage.style';
import {
	Category,
	DetailHeader,
	Info,
	MBTI,
	PostContent,
	PostDate,
	PostTitleContainer,
	PostTitleWrapper,
	PostWrapper,
	Title,
	UserName,
} from './DetailPost.styled';
import { useRouter } from 'next/router';
import Board from '../../service/boardService';

// import { Category } from './DetailPost.styled';

const DetailPost = (props) => {
	const router = useRouter();
	const { id } = router.query;
	useEffect(() => {
		const accessToken = localStorage.getItem('mbtichannel');
		Board.detail(accessToken, id).then((res) => console.log(res));
	});

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
						<Category className='middle-text-bold'>통합게시판</Category>
						<PostWrapper>
							<DetailHeader>
								<PostTitleContainer>
									<PostTitleWrapper>
										<MBTI className='large-text-bold'>[INTJ]</MBTI>
										<Title className='large-text-bold'>
											깻잎 논쟁 어떻게 생각하시나요?
										</Title>
									</PostTitleWrapper>
									신고
								</PostTitleContainer>
								<Info>
									<UserName className='middle-text-regular'>야옹맨</UserName>
									<PostDate>2020.08.22 18:20:33</PostDate>
								</Info>
							</DetailHeader>
						</PostWrapper>
						<PostContent>ㅈㄱㄴ</PostContent>
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

export default DetailPost;
