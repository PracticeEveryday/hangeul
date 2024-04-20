import { choseong, jungseong, jongseong, HANGEUL_UNICODE_INDEX } from "./const/jamo.const";
import {isHangeul} from "./validate";

export function convertKrToJamoArr(str: string) {
    if(!isHangeul(str)) throw new Error("this is not hangeul");

    let jamoArray = <string[]>[];

    for (let char of str) {
        let unicode = char.charCodeAt(0) - HANGEUL_UNICODE_INDEX;
        const choIdx = Math.floor(unicode / 588);
        const jungIdx = Math.floor((unicode % 588) / 28);
        const jongIdx = unicode % 28;

        jamoArray.push(choseong[choIdx]);
        jamoArray.push(jungseong[jungIdx]);
        jongIdx !== 0 && jamoArray.push(jongseong[jongIdx]);
    }

    return jamoArray;
}

export function convertKrToFullJamoArr(str: string) {
    if(!isHangeul(str)) throw new Error("this is not hangeul");
    const jamoArray = convertKrToJamoArr(str);


}
