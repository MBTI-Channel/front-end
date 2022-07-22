import React, { useEffect } from 'react';
import authService from '../../../service/authService';

const KakaoRedirectHandler = () => {
	useEffect(() => {
		let params = new URL(document.location.toString()).searchParams; // URL에서 검색 파라미터 추출
		let code = params.get('code'); // URL에서 인가코드 추출

		// 백엔드 서버로 로그인 요청
		authService.logIn('kakao', code).then((user) => console.log(user));
	}, []);

	return <div></div>;
};

export default KakaoRedirectHandler;
