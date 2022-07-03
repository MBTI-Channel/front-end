import { atom, selector } from 'recoil';

export const userState = atom({
	key: 'userState',
	default: {},
});

export const userMBTI = atom({
	key: 'userMBTI',
	default: '',
});
