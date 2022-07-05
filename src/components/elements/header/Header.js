import React from 'react';
import Link from 'next/link';
import { Wrapper, Container, Logo, Nav, Btn } from './Header.styled';

const Header = () => {
	return (
		<Wrapper>
			<Container>
				<Logo>
					<Link href={'/'}>
						<a>
							<span />
						</a>
					</Link>
				</Logo>
				{/* TODO: 로그인 구현 후 조건부 GNB로 바꾸기 */}
				<Nav>
					<Link href={'/auth/login'} passHref>
						<Btn>
							<div>로그인</div>
						</Btn>
					</Link>
				</Nav>
			</Container>
		</Wrapper>
	);
};

export default Header;
