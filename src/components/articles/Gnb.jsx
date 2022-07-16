import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState } from '../../store/articlesState';
import LogoIcon from '../elements/logo/LogoIcon';

const GnbWrapper = styled.header.attrs((props) => ({
	isVisible: props.isVisible,
}))`
	z-index: 10;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 64px;
	background-color: #fff;
	border-bottom: 1px solid #efefef;
	transform: ${(props) =>
		props.isVisible ? 'translateY(0%)' : 'translateY(-100%)'};
	/* transition: all 400ms ease-in-out 0s; */
	& button {
		color: 'black';
		opacity: '100%';
		border: 0;
		padding: 0px;
		background-color: transparent;
		cursor: pointer;
	}
`;

const Gnb = ({ isVisible }) => {
	const router = useRouter();
	const setIsLoggedIn = useSetRecoilState(isLoggedInState);

	const onClick = (e) => {
		const { value } = e.currentTarget;
		if (value === 'logo' || value === 'write') router.push('/write');
		if (value === 'alert') router.push('/alert');
		if (value === 'profile') router.push('/profile');
		if (value === 'logout') {
			setIsLoggedIn(false);
			router.push('/auth/login');
		}
	};
	return (
		<GnbWrapper isVisible={isVisible}>
			<button value='logo' onClick={onClick} style={{ marginLeft: '48px' }}>
				<LogoIcon />
			</button>
			<div
				style={{
					display: 'flex',
					width: '275px',
					justifyContent: 'space-between',
					marginRight: '48px',
				}}
			>
				<div>
					<button
						value='write'
						onClick={onClick}
						style={{
							fontSize: '16px',
							fontWeight: '700',
						}}
					>
						글쓰기
					</button>
				</div>
				<div>
					<button
						value='alert'
						onClick={onClick}
						style={{
							fontSize: '16px',
							fontWeight: '700',
						}}
					>
						알림
					</button>
				</div>
				<div>
					<button
						value='profile'
						onClick={onClick}
						style={{
							fontSize: '16px',
							fontWeight: '700',
						}}
					>
						프로필
					</button>
				</div>
				<div>
					<button
						value='logout'
						onClick={onClick}
						style={{
							fontSize: '16px',
							fontWeight: '700',
						}}
					>
						로그아웃
					</button>
				</div>
			</div>
		</GnbWrapper>
	);
};

export default Gnb;

Gnb.propTypes = {
	isVisible: PropTypes.bool,
};
