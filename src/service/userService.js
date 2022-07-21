import httpClient from './httpClient';

class User {
	constructor(httpClient) {
		this.user = httpClient;
	}

	nameDuplicateCheck = async (name) => {
		try {
			const res = await this.user.get(`users?nickname=${name}`);
			return res;
		} catch (e) {
			console.log(e);
		}
	};
}

const userService = new User(httpClient);
export default userService;
