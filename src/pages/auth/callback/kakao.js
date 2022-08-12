import React from 'react';
import LoginRedirectHandler from '../../../components/socialLogin/callback';

const KakaoCallback = () => {
	return <LoginRedirectHandler provider={'kakao'} />;
};

export default KakaoCallback;
