import Link from 'next/link';
import React from 'react';
import nextConfig from '../../../next.config';
import {
	Wrapper,
	Content,
	Logo,
	SocialLogin,
	KakaoLogin,
	KakaoIcon,
	NaverLogin,
	NaverIcon,
} from './SocialLogin.styled';

const CLIENT_ID = nextConfig.env.CLIENT_ID;
const REDIRECT_URI = nextConfig.env.REDIRECT_URI;

const Login = (props) => {
	return (
		<Wrapper>
			<Content>
				<Logo>
					<Link href={'/'}>
						<a>
							<span />
						</a>
					</Link>
				</Logo>
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
	);
};

export default Login;
