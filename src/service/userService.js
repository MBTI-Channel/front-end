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
			console.log(e);
		}
	};

	getPost = async (accessToken, page, maxResults) => {
		try {
			const res = await this.user.get(`users/posts`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
				params: {
					page: page,
					maxResults: maxResults,
				},
			});
			return res;
		} catch (e) {
			console.log(e);
		}
	};

	getComment = async (accessToken, page, maxResults) => {
		try {
			const res = await this.user.get(`users/comments`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
				params: {
					page: page,
					maxResults: maxResults,
				},
			});
			return res;
		} catch (e) {
			console.log(e);
		}
	};

	changeNickname = async (accessToken, nickname) => {
		try {
			const res = await this.user.patch(
				`users/me/nickname`,
				{ nickname: nickname },
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			);
			return res;
		} catch (e) {
			console.log(e);
		}
	};

	changeMbti = async (accessToken, mbti) => {
		try {
			const res = await this.user.patch(
				`users/me/mbti`,
				{ mbti: mbti },
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			);
			return res;
		} catch (e) {
			console.log(e);
		}
	};
}

const User = new UserService(httpClient);
export default User;
