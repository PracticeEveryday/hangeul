import { choseong, HANGEUL_UNICODE_INDEX, jongseong, jungseong } from './const/jamo.const';
import { isHangeul } from './isHangeul';
import { isMoeum } from './isMoeum';
import { isJaeum } from './isJaeum';
import { isGyeopbatchim } from './isGyeopbatchim';
import { isBokhapMoeum } from './isBokhapMoeum';
import { isBokhapJaeum } from './isBokhapJaeum';

export function convertKrToJamoArr(str: string) {
    if (!isHangeul(str)) throw new Error('한글이 아닙니다.');
    if (isMoeum(str) || isJaeum(str) || isGyeopbatchim(str) || isBokhapMoeum(str) || isBokhapJaeum(str)) return [str];

    let jamoArray = <string[]>[];

    for (let char of str) {
        let unicode = char.charCodeAt(0) - HANGEUL_UNICODE_INDEX;

        const choIdx = Math.floor(unicode / 588);
        jamoArray.push(choseong[choIdx]);

        const jungIdx = Math.floor((unicode % 588) / 28);
        jamoArray.push(jungseong[jungIdx]);

        const jongIdx = unicode % 28;
        jongIdx !== 0 && jamoArray.push(jongseong[jongIdx]);
    }

    return jamoArray;
}
