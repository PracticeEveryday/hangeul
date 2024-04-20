import { isJaeum } from './isJaeum';

describe('isJaeum Test', () => {
    test('자음이라면 true를 반환합니다.', () => {
        expect(isJaeum('ㅁ')).toEqual(true);
        expect(isJaeum('ㄱ')).toEqual(true);
        expect(isJaeum('ㄴ')).toEqual(true);
        expect(isJaeum('ㄹ')).toEqual(true);
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
