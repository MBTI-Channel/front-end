import '../styles/font.css';
import React from 'react';
import PropTypes from 'prop-types';
import { RecoilRoot } from 'recoil';
import { Amplify } from 'aws-amplify';
import awsmobile from '../aws-export';
import GlobalStyle from '../styles/GlobalStyle';

Amplify.configure({ ...awsmobile, ssr: true });

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</>
	);
}

MyApp.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.any,
};

export default MyApp;
