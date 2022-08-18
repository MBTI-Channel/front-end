import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
	${normalize}

	* {
	box-sizing: border-box;
	}

	html,
	body {
		padding: 0;
		margin: 0;
		font-family: Noto Sans;
		background: #f8fafb;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

`;

export default GlobalStyle;
