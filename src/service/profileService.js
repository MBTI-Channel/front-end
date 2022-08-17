import httpClient from './httpClient';

class ProfileService {
	constructor(httpClient) {
		this.auth = httpClient;
	}

	profile = async (accessToken) => {
		try {
			const res = await this.auth.get(`users/me`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			return res;
		} catch (e) {
			console.log(e);
		}
	};
}

const profileService = new ProfileService(httpClient);
export default profileService;
