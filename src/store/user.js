import { atom } from 'recoil';

export const userInfo = atom({
	key: 'userInfo',
	default: {},
});

export const userState = atom({
	key: 'userState',
	default: { id: '', uuid: '', mbti: '', nickname: '' },
});

export const EI = atom({
	key: 'EI',
	default: '_',
});

export const NS = atom({
	key: 'NS',
	default: '_',
});

export const FT = atom({
	key: 'FT',
	default: '_',
});

export const PJ = atom({
	key: 'PJ',
	default: '_',
});

export const userName = atom({
	key: 'userName',
	default: { value: '', isValid: false, duplicate: false },
});
