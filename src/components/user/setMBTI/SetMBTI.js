import Link from 'next/link';
import React, { memo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../../elements/wrapper/ContentWrapper.styled';
import { Content } from '../../elements/content/Content.styled';
import {
	Box,
	Confirm,
	E,
	F,
	I,
	J,
	Logo,
	SetInfoDiv,
	Middle,
	N,
	P,
	S,
	T,
	Typo,
} from './SetMBTI.styled';
import { useRecoilState } from 'recoil';
import { EI, NS, FT, PJ, userMBTI } from '../../../sotre/user';
import { useRouter } from 'next/router';

const SetMBTI = ({ nextHref }) => {
	const router = useRouter();

	const [ei, setEI] = useRecoilState(EI);
	const [ns, setNS] = useRecoilState(NS);
	const [ft, setFT] = useRecoilState(FT);
	const [pj, setPJ] = useRecoilState(PJ);

	const [MBTI, setMBTI] = useRecoilState(userMBTI);

	const EIHandler = useCallback(
		(e) => {
			setEI(e.target.value);
		},
		[setEI],
	);

	const NSHandler = useCallback(
		(e) => {
			setNS(e.target.value);
		},
		[setNS],
	);

	const FTHandler = useCallback(
		(e) => {
			setFT(e.target.value);
		},
		[setFT],
	);

	const PJHandler = useCallback(
		(e) => {
			setPJ(e.target.value);
		},
		[setPJ],
	);

	useEffect(() => {
		setMBTI(`${ei}${ns}${ft}${pj}`);
	}, [ei, ns, ft, pj, setMBTI]);

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
								checked={ei === 'E'}
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
								checked={ei === 'I'}
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
								checked={ns === 'N'}
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
								checked={ns === 'S'}
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
								checked={ft === 'T'}
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
								checked={ft === 'F'}
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
								checked={pj === 'J'}
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
								checked={pj === 'P'}
								onChange={PJHandler}
							/>
							<Box>
								<span>P</span>
							</Box>
						</label>
					</div>
				</Middle>
				<SetInfoDiv>
					<p>{MBTI}</p>
				</SetInfoDiv>
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
