import { jaeum } from '../const/jamo.const';

export const isJaeum = (str: string) => {
    if (str === '') return false;
    return jaeum.includes(str);
};
