import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Board from '../../service/boardService';
import { userToken } from '../../store/user';
import { Button } from '../elements/button/Button';

const MineWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 6px;

	width: 52px;
	height: 18px;
`;

const IsMy = ({ id }) => {
	const router = useRouter();
	const accessToken = useRecoilValue(userToken);

	const mineHandler = (e) => {
		const { value } = e.currentTarget;
		switch (value) {
			case 'modify':
				router.push(`/post/modify/${id}`);
				break;
			case 'delete':
				const sure = confirm('정말 삭제하시나요?');
				if (sure) {
					Board.delete(accessToken, id).then((res) => {
						console.log(res);
						router.push('/');
					});
				}
				break;
			default:
				router.push('/');
		}
	};

	return (
		<MineWrapper>
			<Button
				bg={'inherit'}
				color={'black'}
				value={'modify'}
				m={'0px'}
				weight={'18px'}
				p={'0px'}
				className='small-text-regular'
				onClick={mineHandler}
			>
				수정
			</Button>
			<Button
				bg={'inherit'}
				color={'red'}
				value={'delete'}
				m={'0px'}
				weight={'18px'}
				p={'0px'}
				className='small-text-regular'
				onClick={mineHandler}
			>
				삭제
			</Button>
		</MineWrapper>
	);
};

export default IsMy;
