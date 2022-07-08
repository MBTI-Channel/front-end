import { atom } from 'recoil';

export const userState = atom({
	key: 'userState',
	default: {},
});

export const userMBTI = atom({
	key: 'userMBTI',
	default: '',
});

export const userName = atom({
	key: 'userName',
	default: '',
});
