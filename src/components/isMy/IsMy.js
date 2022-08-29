import React from 'react';
import styled from 'styled-components';

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
	return (
		<MineWrapper>
			<div href={`post/modify/${id}`} className='small-text-regular'>
				수정
			</div>
			<div className='small-text-regular' style={{ color: '#DF1D1D' }}>
				삭제
			</div>
		</MineWrapper>
	);
};

export default IsMy;
