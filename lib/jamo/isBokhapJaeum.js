import { bokhapJaeum } from './const/jamo.const';
export const isBokhapJaeum = (str) => {
    return bokhapJaeum.includes(str);
};
