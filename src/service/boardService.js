import httpClient from './httpClient';

class BoardService {
	constructor(httpClient) {
		this.board = httpClient;
	}

	// 게시글 작성
	//TODO: 이미지 업로드 과정 추가
	write = async (accessToken, category, isSecret, title, content) => {
		console.log(category);
		try {
			const res = await this.board.post(
				`posts`,
				{ category, isSecret, title, content },
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

	detail = async (accessToken, id) => {
		try {
			const res = await this.board.get(`posts/${id}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			return res;
		} catch (e) {
			console.log(e);
		}
	};

	search = async ({ category, startId, maxResults, order }) => {
		try {
			const res = await this.board.get(
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
			const res = await this.board.get('/posts/trending');
			return res;
		} catch (e) {
			console.log(e);
		}
	};

	profile = async () => {
		try {
			const res = await this.board.get('/users/me');
			return res;
		} catch (e) {
			console.log(e);
		}
	};
}

const Board = new BoardService(httpClient);
export default Board;
