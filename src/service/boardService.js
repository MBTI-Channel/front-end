import httpClient from './httpClient';

class Board {
	constructor(httpClient) {
		this.auth = httpClient;
	}

	// 게시글 작성
	//TODO: 이미지 업로드 과정 추가
	write = async ({ categoryId, isSecret, title, content }) => {
		try {
			const res = await this.auth.post('/posts', {
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
}

const boardService = new Board(httpClient);
export default boardService;
