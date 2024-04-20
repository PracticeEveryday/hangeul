import {choseong, jongseong, jungseong} from "./const/jamo.const";

export const isHangeul = (str: string) =>{
    let checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    return checkKor.test(str);
};

export const isJaeumMoeum  = (str: string) => {
    return (choseong.includes(str) || jongseong.includes(str) || jungseong.includes(str));
}
