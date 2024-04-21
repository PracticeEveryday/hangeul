import { bokhapMoeum } from './const/jamo.const';

export const isBokhapMoeum = (str: string) => {
    return bokhapMoeum.includes(str);
};
