import { choseong, jongseong } from '../const/jamo.const';

export const isJaeum = (str: string) => {
    if (str === '') return false;
    return choseong.includes(str) || jongseong.includes(str);
};
