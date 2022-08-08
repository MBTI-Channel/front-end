import httpClient from './httpClient';

class User {
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
}

const userService = new User(httpClient);
export default userService;
