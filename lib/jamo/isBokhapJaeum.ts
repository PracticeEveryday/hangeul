import { bokhapJaeum } from '../const/jamo.const';

export const isBokhapJaeum = (str: string) => {
    return bokhapJaeum.includes(str);
};
