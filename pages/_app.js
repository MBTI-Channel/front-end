import '../src/styles/globals.css';
import { Amplify } from 'aws-amplify';
import awsmobile from '../src/aws-exports';
Amplify.configure({ ...awsmobile, ssr: true });

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
