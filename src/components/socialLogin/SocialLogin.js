import Link from 'next/link';
import React from 'react';
import { Wrapper } from '../elements/wrapper/ContentWrapper.styled';
import { Content } from '../elements/content/Content.styled';
import {
	SocialLogin,
	KakaoLogin,
	KakaoIcon,
	NaverLogin,
	NaverIcon,
} from './SocialLogin.styled';
import Gnb from '../articles/Gnb';
import nextConfig from '../../../next.config';
import Header from '../elements/header/Header';

const KCLIENT_ID = nextConfig.env.KAKAO_KEY;
const KREDIRECT_URI = nextConfig.env.KAKAO_REDIRECT;

const NCLIENT_ID = nextConfig.env.NAVER_KEY;
const NREDIRECT_URI = nextConfig.env.NAVER_REDIRECT;
const NAVER_STATE = nextConfig.env.NAVER_RANDOM_STATE;

const Login = () => {
	return (
		<>
			<Header />
			<Wrapper>
				<Content>
					<SocialLogin>
						<KakaoLogin>
							<Link
								href={`https://kauth.kakao.com/oauth/authorize?client_id=${KCLIENT_ID}&redirect_uri=${KREDIRECT_URI}&response_type=code`}
								passHref
							>
								<KakaoIcon>
									<span />
									카카오로 시작하기
								</KakaoIcon>
							</Link>
						</KakaoLogin>
						<NaverLogin>
							<Link
								href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NCLIENT_ID}&redirect_uri=${NREDIRECT_URI}&state=${NAVER_STATE}`}
								passHref
							>
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
