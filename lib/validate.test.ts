import {isHangeul, isJaeumMoeum} from "./validate";

describe("한글 여부 유효성 검사", () => {
    test("한글인 경우 true를 반환한다.", () => {
        expect(isHangeul('긕')).toEqual(true);
        expect(isHangeul('ㄱ')).toEqual(true);
        expect(isHangeul('ㄴ')).toEqual(true);
        expect(isHangeul('ㄷ')).toEqual(true);
        expect(isHangeul('ㅣ')).toEqual(true);
        expect(isHangeul('힇')).toEqual(true);
    });

    test("한글이 아닐 경우 false를 반환한다.", () => {
        expect(isHangeul('')).toEqual(false);
        expect(isHangeul('@')).toEqual(false);
        expect(isHangeul('a')).toEqual(false);
        expect(isHangeul('1')).toEqual(false);
        expect(isHangeul('()')).toEqual(false);
        expect(isHangeul('wow')).toEqual(false);
    })
})

describe("한 글자 한글 여부", () => {
    test("자/모음 일 경우 true를 반환한다.", () => {
        expect(isJaeumMoeum('ㄱ')).toEqual(true);
        expect(isJaeumMoeum('ㄴ')).toEqual(true);
        expect(isJaeumMoeum('ㄷ')).toEqual(true);
        expect(isJaeumMoeum('ㅎ')).toEqual(true);
    })

    test("자/모음이 아닐경우 false를 반환한다.", () => {
        expect(isJaeumMoeum('1')).toEqual(false);
        expect(isJaeumMoeum('a')).toEqual(false);
        expect(isJaeumMoeum('@')).toEqual(false);
        expect(isJaeumMoeum('김')).toEqual(false);
        expect(isJaeumMoeum('기')).toEqual(false);
        expect(isJaeumMoeum('ㄱㄱ')).toEqual(false);
    })
})