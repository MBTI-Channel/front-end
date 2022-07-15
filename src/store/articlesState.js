import { atom } from 'recoil';

export const isLoggedInState = atom({
	key: 'articlesState/isLoggedInState',
	default: false,
});
