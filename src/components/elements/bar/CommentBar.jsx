import styled from 'styled-components';
import {
	WHITE,
	LIGHT_GREY_1,
	RED,
	GREY_2,
	GREY_4,
	DARK_GREY_2,
} from '../../../styles/color';
import CheckedCheckbox from '../../../../public/Icons/Basic/checked.svg';
import CheckBox from '../../../../public/Icons/Basic/checkbox.svg';
import { Row, Column } from '../Wrapper.style';
import LikeIcon from '../../elements/customIcon/LikeIcon';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	width: 795px;
	height: 112px;
	background-color: ${WHITE};
	border-width: 1px 0px;
	border-style: solid;
	border-color: ${LIGHT_GREY_1};
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 32px;
	gap: 4px;
`;

const CommentBar = ({
	isChecked,
	comment,
	time,
	title,
	likesCount,
	replyCount,
}) => {
	// TODO 체크박스 기능 재구현
	return (
		<Wrapper>
			<Row alignItems='center'>
				{isChecked ? (
					<CheckedCheckbox style={{ marginTop: '22px', marginLeft: '38px' }} />
				) : (
					<CheckBox style={{ marginTop: '22px', marginLeft: '38px' }} />
				)}
				<ContentWrapper style={{ marginTop: '22px' }}>
					<div className='parargraph' style={{ color: DARK_GREY_2 }}>
						{comment || 'd'}
					</div>
					<Row alignItems='center'>
						<div className='small-text-regular' style={{ color: GREY_4 }}>
							{time}
						</div>
						<Row marginLeft='4px'>
							<LikeIcon fill={RED} style={{ marginLeft: '4px' }} />
							<span
								className='small-text-regular'
								style={{ marginLeft: '4px', color: RED }}
							>
								{likesCount || '4'}
							</span>
						</Row>
					</Row>
					<div className='parargraph'>
						<span style={{ color: GREY_2 }}>{title || 's'}</span>
						<span style={{ color: RED, marginLeft: '4px' }}>
							[{replyCount || '4'}]
						</span>
					</div>
				</ContentWrapper>
			</Row>
		</Wrapper>
	);
};

CommentBar.propTypes = {
	isChecked: PropTypes.bool,
	comment: PropTypes.string,
	time: PropTypes.string,
	title: PropTypes.string,
	likesCount: PropTypes.number,
	replyCount: PropTypes.number,
};

export default CommentBar;
