import {isMoeum} from "./isMoeum";

describe("isMoeum Test", () => {
    test("모음이라면 true를 반환합니다.", () => {
        expect(isMoeum('ㅏ')).toEqual(true);
        expect(isMoeum('ㅐ')).toEqual(true);
        expect(isMoeum('ㅣ')).toEqual(true);
        expect(isMoeum('ㅗ')).toEqual(true);
        expect(isMoeum('ㅜ')).toEqual(true);
    })

    test("모음이 아니면 false를 반환합니다.", () => {
        expect(isMoeum('ㅁ')).toEqual(false);
        expect(isMoeum('a')).toEqual(false);
        expect(isMoeum('ㄹ')).toEqual(false);
        expect(isMoeum('@')).toEqual(false);
        expect(isMoeum('')).toEqual(false);
    })
})