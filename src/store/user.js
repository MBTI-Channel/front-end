import { atom } from 'recoil';

export const userState = atom({
	key: 'userState',
	default: {},
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

export const userMBTI = atom({
	key: 'userMBTI',
	default: '',
});

export const userName = atom({
	key: 'userName',
	default: { value: '', isValid: false },
});
