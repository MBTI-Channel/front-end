import httpClient from './httpClient';

class Board {
	constructor(httpClient) {
		this.auth = httpClient;
	}

	// 게시글 작성
	//TODO: 이미지 업로드 과정 추가
	write = async (accessToken, categoryId, isSecret, title, content) => {
		try {
			const res = await this.auth.post(`/posts`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
				categoryId,
				isSecret,
				title,
				content,
			});
			return res;
		} catch (e) {
			console.log(e);
		}
	};

	search = async ({ category, startId, maxResults, order }) => {
		try {
			const res = await this.auth.get(
				`/posts/search?category=${category}&startId=${startId}&maxResults=${maxResults}&order=${order}`,
				{},
			);
			return res;
		} catch (e) {
			console.log(e);
		}
	};

	trend = async () => {
		try {
			const res = await this.auth.get('/posts/trending');
			return res;
		} catch (e) {
			console.log(e);
		}
	};

	profile = async () => {
		try {
			const res = await this.auth.get('/users/me');
			return res;
		} catch (e) {
			console.log(e);
		}
	};
}

const boardService = new Board(httpClient);
export default boardService;
