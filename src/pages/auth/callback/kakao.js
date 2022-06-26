import React, { useEffect } from 'react';
import authService from '../../../service/authService';

const KakaoRedirectHandler = () => {
	useEffect(() => {
		let params = new URL(document.location.toString()).searchParams;
		let code = params.get('code'); // 인가코드 받는 부분

		authService.logIn('kakao', code).then((user) => console.log(user));
	}, []);

	return <div></div>;
};

export default KakaoRedirectHandler;
