import httpClient from './httpClient';

class Auth {
	constructor(httpClient) {
		this.auth = httpClient;
	}

	// 로그인 요청
	logIn = async (provider, authCode) => {
		try {
			const res = await this.auth.post('/users/login', {
				provider,
				authCode,
			});
			return res;
		} catch (e) {
			console.log(e);
		}
	};

	// 로그아웃 요청
	logOut = () => {};

	// access token을 보내 유저 정보 획득
	getUserInfo = () => {};

	// access toekn이 만료 되었을 때 갱신 요청
	refresh = () => {};
}

const authService = new Auth(httpClient);
export default authService;
