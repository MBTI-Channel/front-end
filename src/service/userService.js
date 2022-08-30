import httpClient from './httpClient';

class UserService {
	constructor(httpClient) {
		this.user = httpClient;
	}

	nameDuplicateCheck = async (name) => {
		try {
			const res = await this.user.get(`users/check?nickname=${name}`);
			return res;
		} catch (e) {
			console.log(e);
		}
	};

	signUp = async ({ id, uuid, nickname, mbti }) => {
		try {
			const res = await this.user.post(`users`, { id, uuid, nickname, mbti });
			return res;
		} catch (e) {
			console.log(e);
		}
	};

	me = async (accessToken) => {
		try {
			const res = await this.user.get(`users/me`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			return res;
		} catch (e) {
			this.reissue(accessToken)
				.then((res) => {
					console.log(res, 'qwerty');
				})
				.catch((e) => console.log(e));
		}
	};

	reissue = async (accessToken) => {
		try {
			const res = await this.user.get(`users/accessToken`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			return res;
		} catch (e) {
			console.log(e, +'asdasd');
		}
	};
}

const User = new UserService(httpClient);
export default User;
