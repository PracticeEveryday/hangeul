import { jaeum } from './const/jamo.const';
export const isJaeum = (str) => {
    if (str === '')
        return false;
    return jaeum.includes(str);
};
