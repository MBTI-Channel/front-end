import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Logo } from './Header.styled';
import Gnb from '../../articles/Gnb';
import User from '../../../service/userService';
import { userInfo, userToken } from '../../../store/user';
import { useRecoilState, useSetRecoilState } from 'recoil';

const GnbWrapper = styled.header.attrs((props) => ({
	// TODO: Wrapper Component로 분리하기
	isVisible: props.isVisible,
}))`
	z-index: 10;
	position: sticky;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 64px;
	background-color: #fff;
	border-bottom: 1px solid #efefef;
	/* transform: ${(props) =>
		props.isVisible ? 'translateY(0%)' : 'translateY(-100%)'};
	transition: all 400ms ease-in-out 0s; */
	& button {
		color: 'black';
		opacity: '100%';
		border: 0;
		padding: 0px;
		background-color: transparent;
		cursor: pointer;
	}
`;

const Header = () => {
	const router = useRouter();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const setUserState = useSetRecoilState(userInfo);
	const [accessToken, setAccessToken] = useRecoilState(userToken);

	useLayoutEffect(() => {
		setAccessToken(localStorage.getItem('mbtichannel'));
	}, []);

	useEffect(() => {
		User.me(accessToken).then((res) => {
			if (res?.data.nickname) {
				setUserState(res.data);
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
		});
	}, [accessToken]);

	const navHandler = (e) => {
		const { value } = e.currentTarget;
		switch (value) {
			case 'write':
				router.push('/post/write');
				break;
			case 'notification':
				router.push('/user/notification');
				break;
			case 'profile':
				router.push('/user');
				break;
			case 'login':
				router.push('/auth/login');
				break;
			case 'logout':
				setIsLoggedIn(false);
				localStorage.removeItem('mbtichannel');
				router.push('/');
				break;
			default:
				router.push('/');
		}
	};

	return (
		<GnbWrapper>
			<Logo style={{ marginLeft: '3rem' }}>
				<Link href={'/'}>
					<a>
						<span />
					</a>
				</Link>
			</Logo>
			<Gnb navHandler={navHandler} isLoggedIn={isLoggedIn} />
		</GnbWrapper>
	);
};

export default Header;
