import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Wrapper, Container, Logo, Nav, Btn } from './Header.styled';

const Header = (props) => {
	return (
		<Wrapper>
			<Container>
				<Logo>
					<Link href={'/'}>
						<a>
							<Image //
								src='logo.svg'
								alt='Logo'
								width={184}
								height={48}
							/>
						</a>
					</Link>
				</Logo>
				{/* TODO: 로그인 구현 후 조건부 GNB로 바꾸기 */}
				<Nav>
					<Link href={'/auth/login'} passHref>
						<Btn>로그인</Btn>
					</Link>
				</Nav>
			</Container>
		</Wrapper>
	);
};

export default Header;
