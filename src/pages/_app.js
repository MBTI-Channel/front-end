import '../styles/globals.css';
import React from 'react';
import { Amplify } from 'aws-amplify';
import awsmobile from '../aws-exports';

Amplify.configure({ ...awsmobile, ssr: true });

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
