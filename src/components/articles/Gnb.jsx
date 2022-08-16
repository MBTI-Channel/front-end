import React from 'react';

const NotLoggedIn = ({ navHandler }) => {
	return (
		<div>
			<button
				value='login'
				onClick={navHandler}
				style={{
					fontSize: '16px',
					fontWeight: '700',
					margin: '0px 13.625px',
				}}
			>
				로그인
			</button>
		</div>
	);
};

const LoggedIn = ({ navHandler }) => (
	<>
		<div>
			<button
				value='write'
				onClick={navHandler}
				style={{
					fontSize: '16px',
					fontWeight: '700',
					margin: '0px 13.625px',
				}}
			>
				글쓰기
			</button>
		</div>
		<div>
			<button
				value='alert'
				onClick={navHandler}
				style={{
					fontSize: '16px',
					fontWeight: '700',
					margin: '0px 13.625px',
				}}
			>
				알림
			</button>
		</div>
		<div>
			<button
				value='profile'
				onClick={navHandler}
				style={{
					fontSize: '16px',
					fontWeight: '700',
					margin: '0px 13.625px',
				}}
			>
				프로필
			</button>
		</div>
		<div>
			<button
				value='logout'
				onClick={navHandler}
				style={{
					fontSize: '16px',
					fontWeight: '700',
					margin: '0px 13.625px',
				}}
			>
				로그아웃
			</button>
		</div>
	</>
);

const Gnb = ({ navHandler, isLoggedIn }) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				marginRight: '48px',
				justifyItems: 'end',
			}}
		>
			{console.log(isLoggedIn)}
			{isLoggedIn ? (
				<LoggedIn navHandler={navHandler} />
			) : (
				<NotLoggedIn navHandler={navHandler} />
			)}
		</div>
	);
};

export default Gnb;
