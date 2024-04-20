import { isBokhapMoeum } from './isBokhapMoeum';

describe('isBokhapMoeum Test', () => {
    test('복합 모음이라면 true를 반환합니다.', () => {
        // ㅐ, ㅒ, ㅔ, ㅖ, ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, ㅢ
        expect(isBokhapMoeum('ㅐ')).toEqual(true);
        expect(isBokhapMoeum('ㅒ')).toEqual(true);
        expect(isBokhapMoeum('ㅔ')).toEqual(true);
        expect(isBokhapMoeum('ㅖ')).toEqual(true);
        expect(isBokhapMoeum('ㅘ')).toEqual(true);
        expect(isBokhapMoeum('ㅙ')).toEqual(true);
        expect(isBokhapMoeum('ㅚ')).toEqual(true);
        expect(isBokhapMoeum('ㅝ')).toEqual(true);
        expect(isBokhapMoeum('ㅞ')).toEqual(true);
        expect(isBokhapMoeum('ㅟ')).toEqual(true);
        expect(isBokhapMoeum('ㅢ')).toEqual(true);
    });

    test('복합 모음이 아니면 false를 반환합니다.', () => {});
});
