import Gnb from '../articles/Gnb';
import Header from '../elements/header/Header';
import { Section } from '../profilePage/ProfilePage.styled';
import Card from '../elements/card/Card';
import { CardWrapper } from '../profilePage/ProfilePage.styled';
import { ButtonContainer, CategoryButton } from './activityPage.styled';
import ThumbnailBar from '../elements/bar/ThumbnailBar';
import SearchBar from '../elements/bar/SearchBar';
import Category from '../elements/category/Category';
import Footer from '../elements/Footer';
import { Row, Column } from '../elements/Wrapper.style';
import User from '../../service/userService';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '../../store/user';
import { useEffect, useState } from 'react';
import CommentBar from '../elements/bar/CommentBar';

const ActivityPage = () => {
	const [postedList, setPostedList] = useState([]);
	const [commentedList, setCommentedList] = useState([]);
	const [participatedQuestionList, setParticipatedQuestionList] = useState([]);
	const [bookmarkedList, setBookmarkedList] = useState([]);
	const accessToken = useRecoilValue(accessTokenState);
	const [selectedActivity, setSelectedActivity] = useState('posted');

	const onClickActivityButton = (e) => {
		setSelectedActivity(e.target.value);
	};

	// 내활동 api 불러오기
	useEffect(() => {
		// 내가 쓴 글 api
		if (accessToken && selectedActivity == 'posted') {
			User.getPost(accessToken, 1, 10).then((res) => {
				// TODO 이렇게 if문을 사용해서 렌더링을 막는 방법이 맞을까?
				if (res && res.data.items.length != postedList.length) {
					let items = res.data.items;
					for (let itemsIndex = 0; itemsIndex < items.length; itemsIndex++) {
						let item = items[itemsIndex];
						setPostedList((prev) => [
							...prev,
							{
								userMbti: item.userMbti,
								userNickname: item.userNickname,
								title: item.title,
								likesCount: item.likesCount,
								commentCount: item.commentCount,
								viewCount: item.viewCount,
								time: item.updatedAt
									? `${item.updatedAt.slice(0, 10)}` +
									  ' ' +
									  `${item.updatedAt.slice(11, 16)}`
									: `${item.createdAt.slice(0, 10)}` +
									  ' ' +
									  `${item.createdAt.slice(11, 16)}`,
								content: item.content,
							},
						]);
					}
				}
			});
		}
		// 댓글 단 글 api
		else if (accessToken && selectedActivity == 'commented') {
			User.getComment(accessToken, 1, 10).then((res) => {
				if (res && res.data.items.length != commentedList.length) {
					let items = res.data.items;
					for (let itemsIndex = 0; itemsIndex < items.length; itemsIndex++) {
						let item = items[itemsIndex];
						// console.log(item);
						setCommentedList((prev) => [
							...prev,
							{
								comment: item.content,
								title: item.postTitle,
								likesCount: item.likesCount,
								replyCount: item.replyCount,
								time: item.updatedAt
									? `${item.updatedAt.slice(0, 10)}` +
									  ' ' +
									  `${item.updatedAt.slice(11, 16)}`
									: `${item.createdAt.slice(0, 10)}` +
									  ' ' +
									  `${item.createdAt.slice(11, 16)}`,
							},
						]);
					}
				}
			});
		}
	}, [accessToken, selectedActivity]);

	console.log(commentedList);

	return (
		<>
			<Header isVisible />
			<Section>
				<CardWrapper>
					<Card />
					<Card />
					<Card />
					<Card />
				</CardWrapper>
				<Row marginTop='72px'>
					<Column>
						<Column>
							<div className='heading-1'>내활동</div>
							<ButtonContainer>
								<CategoryButton
									onClick={onClickActivityButton}
									value='posted'
									isSelected={selectedActivity == 'posted'}
								>
									내가 쓴 글
								</CategoryButton>
								<CategoryButton
									onClick={onClickActivityButton}
									isSelected={selectedActivity == 'commented'}
									value='commented'
								>
									댓글 단 글
								</CategoryButton>
								<CategoryButton
									onClick={onClickActivityButton}
									isSelected={selectedActivity == 'participated'}
									value='participated'
								>
									내가 참여한 공식질문
								</CategoryButton>
								<CategoryButton
									onClick={onClickActivityButton}
									isSelected={selectedActivity == 'bookmarked'}
									value='bookmarked'
								>
									북마크
								</CategoryButton>
							</ButtonContainer>
						</Column>
						<Row marginTop='16px'>
							{selectedActivity == 'posted' ? (
								<Column gap='8px'>
									{postedList.map((item) => (
										<ThumbnailBar
											key={item.title}
											userMbti={item.userMbti}
											userNickname={item.userNickname}
											title={item.title}
											likesCount={item.likesCount}
											commentCount={item.commentCount}
											viewCount={item.viewCount}
											updateDatetime={item.time}
											textContent={item.content}
										/>
									))}
								</Column>
							) : selectedActivity == 'commented' ? (
								<>
									<Column>
										{commentedList.map((item) => (
											<CommentBar
												key={item.comment}
												comment={item.comment}
												time={item.time}
												title={item.title}
												likesCount={item.likesCount}
												replyCount={item.replyCount}
											/>
										))}
									</Column>
								</>
							) : (
								<div>hi</div>
							)}

							<Column marginLeft='14px'>
								<SearchBar />
								<Category marginTop='16px' />
								<Footer marginTop='16px' />
							</Column>
						</Row>
					</Column>
				</Row>
			</Section>
		</>
	);
};

export default ActivityPage;
