import httpClient from './httpClient';

class Board {
	constructor(httpClient) {
		this.auth = httpClient;
	}

	// 게시글 작성
	//TODO: 이미지 업로드 시 과정 처리
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
}

const boardService = new Board(httpClient);
export default boardService;
