import Link from 'next/link';
import React from 'react';
import {
	BackEnd,
	Box,
	Content,
	FrontEnd,
	Logo,
	Middle,
	Typo,
	Wrapper,
} from './SetMBTI.styled';

const SetMBTI = (props) => {
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
				<Typo>MBTI 설정</Typo>
				<Middle className='middle'>
					<label>
						<input type='radio' name='radio' checked />
						<Box className='front-end box'>
							<FrontEnd>Front-end</FrontEnd>
						</Box>
					</label>

					<label>
						<input type='radio' name='radio' />
						<Box className='back-end box'>
							<BackEnd>Back-end</BackEnd>
						</Box>
					</label>
				</Middle>
			</Content>
		</Wrapper>
	);
};

export default SetMBTI;
