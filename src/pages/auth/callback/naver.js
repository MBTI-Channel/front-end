import React from 'react';
import LoginRedirectHandler from '../../../components/socialLogin/callback';

const KakaoCallback = () => {
	return <LoginRedirectHandler provider={'naver'} />;
};

export default KakaoCallback;
