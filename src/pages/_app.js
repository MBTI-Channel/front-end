import '../styles/globals.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Amplify } from 'aws-amplify';
import awsmobile from '..//aws-exports';
Amplify.configure({ ...awsmobile, ssr: true });

function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<Component {...pageProps} />
		</RecoilRoot>
	);
}

export default MyApp;
