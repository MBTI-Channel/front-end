import Gnb from '../articles/Gnb';
import Header from '../elements/header/Header';
import { Section } from '../profilePage/ProfilePage.styled';
import Card from '../elements/card/Card';
import { CardWrapper } from '../profilePage/ProfilePage.styled';
import {
	ContentWrapper,
	ButtonContainer,
	CategoryButton,
} from './activityPage.styled';
import ThumbnailBar from '../elements/bar/ThumbnailBar';
import SearchBar from '../elements/bar/SearchBar';
import Category from '../elements/category/Category';
import Footer from '../elements/Footer';
import { Row, Column } from '../elements/Wrapper.style';
import User from '../../service/userService';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '../../store/user';
import { useEffect, useState } from 'react';
import { E } from '../user/setMBTI/SetMBTI.styled';

const ActivityPage = () => {
	const [userMbti, setUserMbti] = useState('');
	const [userNickname, setUserNickname] = useState('');
	const [titleList, setTitleList] = useState([]);
	const [likesCountList, setLikesCountList] = useState([]);
	const [replyCountList, setReplyCountList] = useState([]);
	const [viewCountList, setViewCountList] = useState([]);
	const [dateTimeList, setDateTimeList] = useState([]);
	const [textContentList, setTextContentList] = useState([]);
	let [itemsList, setItemsList] = useState([]);

	const accessToken = useRecoilValue(accessTokenState);

	useEffect(() => {
		User.getPost(accessToken, 1, 10).then((res) => {
			if (res) {
				let items = res.data.items;
				// console.log(items);
				for (let itemsIndex = 0; itemsIndex < items.length; itemsIndex++) {
					let item = items[itemsIndex];
					if (item.updatedAt) {
						// setItemsList((prev) => [...prev, ])
						itemsList.push({
							userMbti: item.userMbti,
							userNickname: item.userNickname,
							title: item.title,
							likesCount: item.likesCount,
							commentCount: item.commentCount,
							viewCount: item.viewCount,
							time:
								`${item.updatedAt.slice(0, 10)}` +
								' ' +
								`${item.updatedAt.slice(11, 16)}`,
							content: item.content,
						});
					} else {
						itemsList.push({
							userMbti: item.userMbti,
							userNickname: item.userNickname,
							title: item.title,
							likesCount: item.likesCount,
							commentCount: item.commentCount,
							viewCount: item.viewCount,
							time:
								`${item.createdAt.slice(0, 10)}` +
								' ' +
								`${item.createdAt.slice(11, 16)}`,
							content: item.content,
						});
					}

					// if (item.updatedAt) {
					// 	itemsList.concat([
					// 		item.title,
					// 		item.likesCount,
					// 		item.commentCount,
					// 		item.viewCount,
					// 		`${item.updatedAt.slice(0, 10)}` +
					// 			' ' +
					// 			`${item.updatedAt.slice(11, 16)}`,
					// 		item.content,
					// 	]);
					// } else {
					// 	itemsList.concat([
					// 		item.title,
					// 		item.likesCount,
					// 		item.commentCount,
					// 		item.viewCount,
					// 		`${item.createdAt.slice(0, 10)}` +
					// 			' ' +
					// 			`${item.createdAt.slice(11, 16)}`,
					// 		item.content,
					// 	]);
					// }

					// setTitleList((prev) => [...prev, item.title]);
					// setLikesCountList((prev) => [...prev, item.likesCount]);
					// setReplyCountList((prev) => [...prev, item.commentCount]);
					// setViewCountList((prev) => [...prev, item.viewCount]);
					// if (item.updatedAt) {
					// 	setDateTimeList((prev) => [
					// 		...prev,
					// 		`${item.updatedAt.slice(0, 10)}` +
					// 			' ' +
					// 			`${item.updatedAt.slice(11, 16)}`,
					// 	]);
					// } else {
					// 	setDateTimeList((prev) => [
					// 		...prev,
					// 		`${item.createdAt.slice(0, 10)}` +
					// 			' ' +
					// 			`${item.createdAt.slice(11, 16)}`,
					// 	]);
					// }
					// setTextContentList((prev) => [...prev, item.content]);
				}
			}
		});
		console.log(itemsList);
	}, [accessToken]);

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
							<span className='heading-1'>내활동</span>
							<ButtonContainer>
								<CategoryButton
									className='small-text-bold'
									width='99px'
									height='34px'
									isSelected={true}
								>
									내가 쓴 글
								</CategoryButton>
								<CategoryButton
									className='small-text-bold'
									width='110px'
									height='34px'
									isSelected={false}
								>
									내가 쓴 댓글
								</CategoryButton>
								<CategoryButton
									className='small-text-bold'
									width='154px'
									height='34px'
									isSelected={false}
								>
									내가 참여한 공식질문
								</CategoryButton>
								<CategoryButton
									className='small-text-bold'
									width='82px'
									height='34px'
									isSelected={false}
								>
									북마크
								</CategoryButton>
							</ButtonContainer>
						</Column>
						<ContentWrapper style={{ marginTop: '16px' }}>
							<Column gap='8px'>
								{itemsList ? (
									itemsList.map((item) => (
										<ThumbnailBar
											mbti={item.userMbti}
											userNickname={item.userNickname}
											title={item.title}
											likesCount={item.likesCount}
											commentCount={item.commentCount}
											viewCount={item.ciewCount}
											updateDatetime={item.time}
											textContent={item.content}
										/>
									))
								) : (
									<></>
								)}
							</Column>
							<Column marginLeft='14px'>
								<SearchBar />
								<Category marginTop='16px' />
								<Footer marginTop='16px' />
							</Column>
						</ContentWrapper>
					</Column>
				</Row>
			</Section>
		</>
	);
};

export default ActivityPage;
