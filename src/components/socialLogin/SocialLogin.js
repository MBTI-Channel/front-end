import Image from 'next/image';
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

// TODO: KEY랑 URI 추가하기
const CLIENT_ID = nextConfig.env.CLIENT_ID;
const REDIRECT_URI = nextConfig.env.REDIRECT_URI;

const a = 'adc50128b40ca5a4685fb183f12c0ebe';
const b = 'http://52.78.66.213:8001/users/redirect';

console.log(CLIENT_ID);

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
							href={`https://kauth.kakao.com/oauth/authorize?client_id=${a}&redirect_uri=${REDIRECT_URI}&response_type=code`}
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
