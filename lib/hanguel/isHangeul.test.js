import { isHangeul } from './isHangeul';
describe('한글 여부 유효성 검사', () => {
    test('한글인 경우 true를 반환한다.', () => {
        expect(isHangeul('긕')).toEqual(true);
        expect(isHangeul('ㄱ')).toEqual(true);
        expect(isHangeul('ㄴ')).toEqual(true);
        expect(isHangeul('ㄷ')).toEqual(true);
        expect(isHangeul('ㅣ')).toEqual(true);
        expect(isHangeul('힇')).toEqual(true);
    });
    test('한글이 아닐 경우 false를 반환한다.', () => {
        expect(isHangeul('')).toEqual(false);
        expect(isHangeul('@')).toEqual(false);
        expect(isHangeul('a')).toEqual(false);
        expect(isHangeul('1')).toEqual(false);
        expect(isHangeul('()')).toEqual(false);
        expect(isHangeul('wow')).toEqual(false);
    });
});
