import React, { useLayoutEffect, useState } from 'react';
import Header from '../../elements/header/Header';
import Card from '../../elements/card/Card';
import SearchBar from '../../elements/bar/SearchBar';
import SideBar from '../../elements/sideBar/SideBar';
import {
	// TODO: 공용 컴포넌트로 분리하기
	Section,
	CardWrapper,
	CategoryConatiner,
	MenuWrapper,
	Footer,
	TextWrapper,
} from '../write/WritingPage.style';
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
import Board from '../../../service/boardService';
import IsMy from '../../isMy/IsMy';

const report = <div>신고</div>;

const DetailPost = (props) => {
	const router = useRouter();
	const { id } = router.query;
	const [detail, setDetail] = useState({});

	useLayoutEffect(() => {
		if (!router.isReady) return;
		const accessToken = localStorage.getItem('mbtichannel');
		Board.detail(accessToken, Number(id)).then((res) => {
			console.log(res);
			setDetail(res?.data);
		});
	}, [router.isReady]);

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
										<MBTI className='large-text-bold'>[{detail.userMbti}]</MBTI>
										<Title className='large-text-bold'>{detail.title}</Title>
									</PostTitleWrapper>
									{detail.isMy == true ? <IsMy id={id}></IsMy> : report}
								</PostTitleContainer>
								<Info>
									<UserName className='middle-text-regular'>
										{detail.userNickname}
									</UserName>
									<PostDate>
										{new Date(Date.parse(detail.createdAt)).toLocaleString()}
									</PostDate>
								</Info>
							</DetailHeader>
						</PostWrapper>
						<PostContent>{detail.content}</PostContent>
						<div
							style={{
								width: '10re',
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'flex-start',
								padding: '0px',
								gap: '8px',
							}}
						>
							<button
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'center',
									alignitems: 'center',
									padding: '8px 16px',
									gap: '4px',
									width: '6.3rem',
									height: '2.5rem',
									background: '#1973FB',
									color: 'white',
								}}
								className='middle-text-bold'
							>
								<span
									style={{
										width: '1rem',
										height: '1rem',
										backgroundImage: 'url(/icon/like.svg)',
										fill: 'white',
										display: 'inline-block',
										backgroundSize: 'contain',
										backgroundRepeat: 'no-repeat',
										verticalAlign: 'text-top',
									}}
								/>
								좋아요
							</button>
						</div>
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
