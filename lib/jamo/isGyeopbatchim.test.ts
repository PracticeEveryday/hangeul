import { isGyeopbatchim } from './isGyeopbatchim';

describe('isGyeopbatchim Test', () => {
    test('겹받침 이라면 true를 반환합니다.', () => {
        //ㄲ, ㅆ, ㄳ, ㄵ, ㄶ, ㄺ, ㄻ, ㄼ, ㄽ, ㄾ, ㄿ, ㅀ, ㅄ
        expect(isGyeopbatchim('ㄲ')).toEqual(true);
        expect(isGyeopbatchim('ㅆ')).toEqual(true);
        expect(isGyeopbatchim('ㄳ')).toEqual(true);
        expect(isGyeopbatchim('ㄵ')).toEqual(true);
        expect(isGyeopbatchim('ㄶ')).toEqual(true);
        expect(isGyeopbatchim('ㄺ')).toEqual(true);
        expect(isGyeopbatchim('ㄻ')).toEqual(true);
        expect(isGyeopbatchim('ㄼ')).toEqual(true);
        expect(isGyeopbatchim('ㄽ')).toEqual(true);
        expect(isGyeopbatchim('ㄾ')).toEqual(true);
        expect(isGyeopbatchim('ㄿ')).toEqual(true);
        expect(isGyeopbatchim('ㅀ')).toEqual(true);
        expect(isGyeopbatchim('ㅄ')).toEqual(true);
    });

    test('겹받침이 아니면 false를 반환합니다.', () => {});
});
