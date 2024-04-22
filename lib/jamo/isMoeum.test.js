import { isMoeum } from './isMoeum';
describe('isMoeum Test', () => {
    test('모음이라면 true를 반환합니다.', () => {
        // ㅏ ㅐ ㅑ ㅒ ㅓ ㅔ ㅕ ㅖ ㅗ ㅘ ㅙ ㅚ ㅛ ㅜ ㅝ ㅞ ㅟ ㅠ ㅡ ㅢ ㅣ
        expect(isMoeum('ㅏ')).toEqual(true);
        expect(isMoeum('ㅐ')).toEqual(true);
        expect(isMoeum('ㅑ')).toEqual(true);
        expect(isMoeum('ㅒ')).toEqual(true);
        expect(isMoeum('ㅓ')).toEqual(true);
        expect(isMoeum('ㅔ')).toEqual(true);
        expect(isMoeum('ㅕ')).toEqual(true);
        expect(isMoeum('ㅖ')).toEqual(true);
        expect(isMoeum('ㅗ')).toEqual(true);
        expect(isMoeum('ㅘ')).toEqual(true);
        expect(isMoeum('ㅙ')).toEqual(true);
        expect(isMoeum('ㅚ')).toEqual(true);
        expect(isMoeum('ㅛ')).toEqual(true);
        expect(isMoeum('ㅜ')).toEqual(true);
        expect(isMoeum('ㅝ')).toEqual(true);
        expect(isMoeum('ㅞ')).toEqual(true);
        expect(isMoeum('ㅟ')).toEqual(true);
        expect(isMoeum('ㅠ')).toEqual(true);
        expect(isMoeum('ㅡ')).toEqual(true);
        expect(isMoeum('ㅢ')).toEqual(true);
        expect(isMoeum('ㅣ')).toEqual(true);
    });
    test('모음이 아니면 false를 반환합니다.', () => {
        expect(isMoeum('ㅁ')).toEqual(false);
        expect(isMoeum('a')).toEqual(false);
        expect(isMoeum('ㄹ')).toEqual(false);
        expect(isMoeum('@')).toEqual(false);
        expect(isMoeum('')).toEqual(false);
    });
});
