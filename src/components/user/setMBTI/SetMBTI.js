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
	SetInfoDiv,
	Middle,
	N,
	P,
	S,
	T,
	Typo,
	Backward,
} from './SetMBTI.styled';
import { useRecoilState } from 'recoil';
import { userState, EI, NS, FT, PJ } from '../../../store/user';
import Gnb from '../../articles/Gnb';

const SetMBTI = ({ nextHref }) => {
	const [ei, setEI] = useRecoilState(EI);
	const [ns, setNS] = useRecoilState(NS);
	const [ft, setFT] = useRecoilState(FT);
	const [pj, setPJ] = useRecoilState(PJ);

	const [userInfo, setUserInfo] = useRecoilState(userState);

	console.log(userInfo);

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
		setUserInfo((prev) => ({ ...prev, mbti: `${ei}${ns}${ft}${pj}` }));
	}, [ei, ns, ft, pj, setUserInfo]);

	return (
		<>
			<Gnb isVisible={true}></Gnb>
			<Wrapper>
				<Content>
					<Typo>아래 알파벳을 조합해 MBTI를 설정해주세요.</Typo>
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
						<p>{userInfo.mbti}</p>
					</SetInfoDiv>
					<Confirm
						className={`${userInfo.mbti.includes('_') ? 'disabled' : ''}`}
					>
						<Link href={nextHref}>설정하기</Link>
					</Confirm>
					<Backward>
						<Link href='/'>뒤로가기</Link>
					</Backward>
				</Content>
			</Wrapper>
		</>
	);
};

SetMBTI.propTypes = {
	nextHref: PropTypes.string.isRequired,
};

export default memo(SetMBTI);
