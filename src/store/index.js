import { atom } from 'recoil';

export const isBookMarkedState = atom({
	key: 'state/isBookMarkedState',
	default: false,
});
