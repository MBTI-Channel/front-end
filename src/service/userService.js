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

	getPost = async (category, startId, size, sort) => {
		try {
			const res = await this.user.get(`posts`, {
				params: {
					category: category,
					startId: startId,
					size: size,
					sort: sort,
				},
			});
			return res;
		} catch (e) {
			console.log(e);
		}
	};

	comment = async (postId, page, maxResults) => {
		try {
			const res = await this.user.get(`comments`, {
				params: {
					postId: postId,
					page: page,
					maxResults: maxResults,
				},
			});
			return res;
		} catch (e) {
			console.log(e);
		}
	};
}

const User = new UserService(httpClient);
export default User;
