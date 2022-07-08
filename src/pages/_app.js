import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';
import { RecoilRoot } from 'recoil';
import { Amplify } from 'aws-amplify';
import awsmobile from '../aws-exports';
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
