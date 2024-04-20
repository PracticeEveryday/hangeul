import { isBokhapJaeum } from './isBokhapJaeum';

describe('isBokhapJaeum Test', () => {
    test('복합 자음이라면 true를 반환합니다.', () => {
        // ㄲ, ㄸ, ㅃ, ㅆ, ㅉ
        expect(isBokhapJaeum('ㄲ')).toEqual(true);
        expect(isBokhapJaeum('ㄸ')).toEqual(true);
        expect(isBokhapJaeum('ㅃ')).toEqual(true);
        expect(isBokhapJaeum('ㅆ')).toEqual(true);
        expect(isBokhapJaeum('ㅉ')).toEqual(true);
    });

    test('복합 자음이 아니면 false를 반환합니다.', () => {});
});
