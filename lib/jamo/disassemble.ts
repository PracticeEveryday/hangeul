import { choseong, HANGEUL_UNICODE_CHOSEONG_OFFSET, HANGEUL_UNICODE_INDEX, jongseong, jungseong } from './const/jamo.const';
import { isMoeum } from './isMoeum';
import { isJaeum } from './isJaeum';
import { isGyeopbatchim } from './isGyeopbatchim';
import { isBokhapMoeum } from './isBokhapMoeum';
import { isBokhapJaeum } from './isBokhapJaeum';
import { isHangeul } from '../hanguel';

export function disassemble(str: string) {
    if (!isHangeul(str)) throw new Error('한글이 아닙니다.');
    if (isMoeum(str) || isJaeum(str) || isGyeopbatchim(str) || isBokhapMoeum(str) || isBokhapJaeum(str)) return [str];

    let jamoArray = <string[]>[];

    for (let char of str) {
        let unicode = char.charCodeAt(0) - HANGEUL_UNICODE_INDEX;

        const choIdx = Math.floor(unicode / HANGEUL_UNICODE_CHOSEONG_OFFSET);
        jamoArray.push(choseong[choIdx]);

        const jungIdx = Math.floor((unicode % HANGEUL_UNICODE_CHOSEONG_OFFSET) / jongseong.length);
        jamoArray.push(jungseong[jungIdx]);

        const jongIdx = unicode % jongseong.length;
        jongIdx !== 0 && jamoArray.push(jongseong[jongIdx]);
    }

    return jamoArray;
}
