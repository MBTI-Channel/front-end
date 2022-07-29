import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';
import { RecoilRoot } from 'recoil';
import { Amplify } from 'aws-amplify';
<<<<<<< HEAD
import awsmobile from '../aws-exports';

=======
import awsmobile from '../aws-export';
import { RecoilRoot } from 'recoil';
>>>>>>> 9300a5a (Fix: 글 작성 페이지 ui 수정 및 일부 컴포넌트 수정)
Amplify.configure({ ...awsmobile, ssr: true });

function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<Component {...pageProps} />
		</RecoilRoot>
	);
}

MyApp.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.any,
};

export default MyApp;
