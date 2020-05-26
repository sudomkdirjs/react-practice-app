import { atom } from 'recoil';

const counterState = atom({
    key: 'counterState',
    default: 0
});

export { counterState };