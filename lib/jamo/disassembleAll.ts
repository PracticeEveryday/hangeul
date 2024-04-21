import { disassemble } from './disassemble';
import { bokhapJaeumObj, bokhapMoeumObj, gyeopbatchimObj } from './const/jamo.const';
import { isHangeul } from '../hanguel/isHangeul';

export function disassembleAll(str: string) {
    if (!isHangeul(str)) throw new Error('한글이 아닙니다.');
    const jamoArr = disassemble(str);

    const result = <string[]>[];
    for (let i = 0; i < jamoArr.length; i++) {
        if (Object.prototype.hasOwnProperty.call(bokhapJaeumObj, jamoArr[i])) {
            result.push(...bokhapJaeumObj[jamoArr[i]]);
        } else if (Object.prototype.hasOwnProperty.call(bokhapMoeumObj, jamoArr[i])) {
            result.push(...bokhapMoeumObj[jamoArr[i]]);
        } else if (Object.prototype.hasOwnProperty.call(gyeopbatchimObj, jamoArr[i])) {
            result.push(...gyeopbatchimObj[jamoArr[i]]);
        } else {
            result.push(jamoArr[i]);
        }
    }

    return result;
}
