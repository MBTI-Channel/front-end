import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Cookies from 'js-cookie';
import { userState } from '../../../store/user';
import authService from '../../../service/authService';

const LoginRedirectHandler = ({ provider }) => {
	const [userInfo, setUserInfo] = useRecoilState(userState);
	const router = useRouter();
	useEffect(() => {
		let params = new URL(document.location.toString()).searchParams; // URL에서 검색 파라미터 추출
		let code = params.get('code'); // URL에서 인가코드 추출

		// 백엔드 서버로 로그인 요청
		authService.logIn(provider, code).then((user) => {
			console.log(user);
			if (!user.data.accessToken) {
				setUserInfo((prev) => ({
					...prev,
					id: user.data.id,
					uuid: user.data.uuid,
				}));
				router.push('/user/signUp/setMBTI');
			}
			Cookies.set('mbtichannel', user.data.refreshToken);
			localStorage.setItem('mbtichannel-at', user.data.accessToken);
		});
	}, []);

	return <div></div>;
};

export default LoginRedirectHandler;
