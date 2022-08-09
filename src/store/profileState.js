import { atom } from 'recoil';

export const isAdminState = atom({
	key: 'profileState/isAdmin',
	default: '0',
});
