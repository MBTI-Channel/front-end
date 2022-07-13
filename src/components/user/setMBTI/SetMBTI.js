import Link from 'next/link';
import React, { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	Box,
	Confirm,
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

const SetMBTI = ({ nextHref }) => {
	const [EI, setEI] = useState('_');
	const [NS, setNS] = useState('_');
	const [FT, setFT] = useState('_');
	const [PJ, setPJ] = useState('_');

	const [MBTI, setMBTI] = useRecoilState(userMBTI);

	const EIHandler = useCallback((e) => {
		setEI(e.target.value);
	}, []);

	const NSHandler = useCallback((e) => {
		setNS(e.target.value);
	}, []);

	const FTHandler = useCallback((e) => {
		setFT(e.target.value);
	}, []);

	const PJHandler = useCallback((e) => {
		setPJ(e.target.value);
	}, []);

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
							<E //
								type='radio'
								name='ei'
								value='E'
								onChange={EIHandler}
							/>
							<Box className='front-end'>
								<span>E</span>
							</Box>
						</label>

						<label>
							<I //
								type='radio'
								name='ei'
								value='I'
								onChange={EIHandler}
							/>
							<Box>
								<span>I</span>
							</Box>
						</label>
					</div>

					<div>
						<label>
							<N //
								type='radio'
								name='ns'
								value='N'
								onChange={NSHandler}
							/>
							<Box>
								<span>N</span>
							</Box>
						</label>

						<label>
							<S //
								type='radio'
								name='ns'
								value='S'
								onChange={NSHandler}
							/>
							<Box>
								<span>S</span>
							</Box>
						</label>
					</div>

					<div>
						<label>
							<T //
								type='radio'
								name='ft'
								value='T'
								onChange={FTHandler}
							/>
							<Box>
								<span>T</span>
							</Box>
						</label>

						<label>
							<F //
								type='radio'
								name='ft'
								value='F'
								onChange={FTHandler}
							/>
							<Box>
								<span>F</span>
							</Box>
						</label>
					</div>

					<div>
						<label>
							<J //
								type='radio'
								name='jp'
								value='J'
								onChange={PJHandler}
							/>
							<Box>
								<span>J</span>
							</Box>
						</label>

						<label>
							<P //
								type='radio'
								name='jp'
								value='P'
								onChange={PJHandler}
							/>
							<Box>
								<span>P</span>
							</Box>
						</label>
					</div>
				</Middle>
				<MBTIdiv>
					<p>{MBTI}</p>
				</MBTIdiv>
				<Confirm>
					<Link href={nextHref}>설정하기</Link>
				</Confirm>
			</Content>
		</Wrapper>
	);
};

SetMBTI.propTypes = {
	nextHref: PropTypes.string.isRequired,
};

export default memo(SetMBTI);
