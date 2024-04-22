import { isJaeum } from './isJaeum';
describe('isJaeum Test', () => {
    test('자음이라면 true를 반환합니다.', () => {
        //ㄱ ㄲ ㄴ ㄷ ㄸ ㄹ ㅁ ㅂ ㅃ ㅅ ㅆ ㅇ ㅈ ㅉ ㅊ ㅋ ㅌ ㅍ ㅎ
        expect(isJaeum('ㄱ')).toEqual(true);
        expect(isJaeum('ㄲ')).toEqual(true);
        expect(isJaeum('ㄴ')).toEqual(true);
        expect(isJaeum('ㄷ')).toEqual(true);
        expect(isJaeum('ㄹ')).toEqual(true);
        expect(isJaeum('ㅁ')).toEqual(true);
        expect(isJaeum('ㅂ')).toEqual(true);
        expect(isJaeum('ㅃ')).toEqual(true);
        expect(isJaeum('ㅅ')).toEqual(true);
        expect(isJaeum('ㅆ')).toEqual(true);
        expect(isJaeum('ㅇ')).toEqual(true);
        expect(isJaeum('ㅈ')).toEqual(true);
        expect(isJaeum('ㅉ')).toEqual(true);
        expect(isJaeum('ㅊ')).toEqual(true);
        expect(isJaeum('ㅋ')).toEqual(true);
        expect(isJaeum('ㅌ')).toEqual(true);
        expect(isJaeum('ㅍ')).toEqual(true);
        expect(isJaeum('ㅎ')).toEqual(true);
    });
    test('자음이 아니면 false를 반환합니다.', () => {
        expect(isJaeum('ㅏ')).toEqual(false);
        expect(isJaeum('a')).toEqual(false);
        expect(isJaeum('ㅁㄴㅇㄹ')).toEqual(false);
        expect(isJaeum('@')).toEqual(false);
        expect(isJaeum('s')).toEqual(false);
        expect(isJaeum('')).toEqual(false);
    });
});
