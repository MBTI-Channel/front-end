import Link from 'next/link';
import React, { memo, useCallback, useEffect, useState } from 'react';
import {
	Box,
	Content,
	E,
	F,
	I,
	J,
	Logo,
	MBTIdiv,
	Middle,
	N,
	P,
	S,
	T,
	Typo,
	Wrapper,
} from './SetMBTI.styled';
import { useRecoilState } from 'recoil';
import { userMBTI } from '../../../sotre/user';

const SetMBTI = (props) => {
	const [EI, setEI] = useState('E');
	const [NS, setNS] = useState('N');
	const [FT, setFT] = useState('T');
	const [PJ, setPJ] = useState('J');

	const [MBTI, setMBTI] = useRecoilState(userMBTI);

	const EIHandler = useCallback((e) => {
		setEI(e.target.value);
	});

	const NSHandler = useCallback((e) => {
		setNS(e.target.value);
	});

	const FTHandler = useCallback((e) => {
		setFT(e.target.value);
	});

	const PJHandler = useCallback((e) => {
		setPJ(e.target.value);
	});

	useEffect(() => {
		setMBTI(`${EI}${NS}${FT}${PJ}`);
	}, [EI, NS, FT, PJ, setMBTI]);

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
				<Middle>
					<div>
						<label>
							<E
								type='radio'
								name='ei'
								value='E'
								defaultChecked
								onChange={EIHandler}
							/>
							<Box className='front-end'>
								<span>E</span>
							</Box>
						</label>

						<label>
							<I type='radio' name='ei' value='I' onChange={EIHandler} />
							<Box>
								<span>I</span>
							</Box>
						</label>
					</div>

					<div>
						<label>
							<N
								type='radio'
								name='ns'
								defaultChecked
								value='N'
								onChange={NSHandler}
							/>
							<Box>
								<span>N</span>
							</Box>
						</label>

						<label>
							<S type='radio' name='ns' value='S' onChange={NSHandler} />
							<Box>
								<span>S</span>
							</Box>
						</label>
					</div>

					<div>
						<label>
							<T
								type='radio'
								name='ft'
								defaultChecked
								value='T'
								onChange={FTHandler}
							/>
							<Box>
								<span>T</span>
							</Box>
						</label>

						<label>
							<F type='radio' name='ft' value='F' onChange={FTHandler} />
							<Box>
								<span>F</span>
							</Box>
						</label>
					</div>

					<div>
						<label>
							<J
								type='radio'
								name='jp'
								defaultChecked
								value='J'
								onChange={PJHandler}
							/>
							<Box>
								<span>J</span>
							</Box>
						</label>

						<label>
							<P type='radio' name='jp' value='P' onChange={PJHandler} />
							<Box>
								<span>P</span>
							</Box>
						</label>
					</div>
				</Middle>
				<MBTIdiv>
					<p>{MBTI}</p>
				</MBTIdiv>
			</Content>
		</Wrapper>
	);
};

export default memo(SetMBTI);
