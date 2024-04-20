import {
    choseong,
    jungseong,
    jongseong,
    HANGEUL_UNICODE_INDEX,
    gyeopbatchimObj,
    bokhapJaeumObj,
    bokhapMoeumObj
} from "./const/jamo.const";
import {isHangeul, isJaeumMoeum} from "./validate";

export function convertKrToJamoArr(str: string) {
    if(!isHangeul(str)) throw new Error("한글이 아닙니다.");
    if(isJaeumMoeum(str)) return [str];

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

export function convertKrToFullJamoArr(str: string) {
    if(!isHangeul(str)) throw new Error("한글이 아닙니다.");
    const jamoArr = convertKrToJamoArr(str);

    const result = <string[]>[]
    for(let i = 0; i < jamoArr.length; i++) {
        if(Object.prototype.hasOwnProperty.call(bokhapJaeumObj, jamoArr[i])) {
            result.push(...bokhapJaeumObj[jamoArr[i]]);
        } else if(Object.prototype.hasOwnProperty.call(bokhapMoeumObj, jamoArr[i])) {
            result.push(...bokhapMoeumObj[jamoArr[i]]);
        } else if(Object.prototype.hasOwnProperty.call(gyeopbatchimObj, jamoArr[i])) {
            result.push(...gyeopbatchimObj[jamoArr[i]]);
        } else {
            result.push(jamoArr[i]);
        }
    }

    return result;
}