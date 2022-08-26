import { useEffect, useState } from 'react';
import CommentBar from '../../src/components/elements/bar/CommentBar';
import User from '../service/userService';
import Header from '../components/elements/header/Header';
import QuestionBar from '../components/elements/bar/QuestionBar';
import SetMBTI from '../components/user/setMBTI/SetMBTI';

const Test = () => {
	const [comment, setComment] = useState('');
	const [time, setTime] = useState(0);
	const [title, setTitle] = useState('');
	const [likesCount, setLikesCount] = useState(0);
	const [replyCount, setReplyCount] = useState(0);
	const [accessToken, setAccessToken] = useState('');

	useEffect(() => {
		if (accessToken == '') {
			setAccessToken(localStorage.getItem('mbtichannel'));
		}
	}, []);

	// if (accessToken != '') {
	// 	User.comment(accessToken, 1, 10).then((res) => {
	// 		// res.data.items 뒤에는 게시글 나오는 개수대로
	// 		console.log(res.data);
	// 		const items = res.data.items[0];
	// 		let date = items.createdAt.slice(0, 10);
	// 		let time = items.createdAt.slice(11, 16);
	// 		let wholeTime = date + ' ' + time;
	// 		setTime(wholeTime);
	// 		setComment(items.content);
	// 		setLikesCount(items.likesCount);
	// 		setReplyCount(items.replyCount);
	// 		setTitle(items.postTitle);
	// 	});
	// }

	return (
		<>
			<Header />
			{/* <CommentBar
				isChecked={true}
				time={time}
				comment={comment}
				likesCount={likesCount}
				replyCount={replyCount}
				title={title}
			/> */}
			{/* <QuestionBar /> */}
			<SetMBTI />
		</>
	);
};

export default Test;
