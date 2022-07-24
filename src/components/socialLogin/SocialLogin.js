import Link from 'next/link';
import React from 'react';
import { Wrapper } from '../elements/wrapper/ContentWrapper.styled';
import { Content } from '../elements/content/Content.styled';
import {
	Logo,
	SocialLogin,
	KakaoLogin,
	KakaoIcon,
	NaverLogin,
	NaverIcon,
} from './SocialLogin.styled';
import Gnb from '../articles/Gnb';

const CLIENT_ID = process.env.KAKAO_KEY;
const REDIRECT_URI = process.env.KAKAO_REDIRECT;

const Login = () => {
	return (
		<>
			<Gnb isVisible={true} />
			<Wrapper>
				<Content>
					<SocialLogin>
						<KakaoLogin>
							<Link
								href={`https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`}
								passHref
							>
								<KakaoIcon>
									<span />
									카카오로 시작하기
								</KakaoIcon>
							</Link>
						</KakaoLogin>
						<NaverLogin>
							<Link href={`/`} passHref>
								<NaverIcon>
									<span />
									네이버로 시작하기
								</NaverIcon>
							</Link>
						</NaverLogin>
					</SocialLogin>
				</Content>
			</Wrapper>
		</>
	);
};

export default Login;
