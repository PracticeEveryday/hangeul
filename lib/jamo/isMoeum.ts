import { moeum } from './const/jamo.const';

export const isMoeum = (str: string) => {
    return moeum.includes(str);
};
