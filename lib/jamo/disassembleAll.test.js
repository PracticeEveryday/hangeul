import { disassembleAll } from './disassembleAll';
describe('disassembleAll Test', () => {
    test('한글의 복합 자/모음 모두 단일 자/모음으로 분리된 자/모음 배열을 반환한다.', () => {
        const ret = disassembleAll('ㅃ');
        expect(ret).toEqual(['ㅂ', 'ㅂ']);
        const ret1 = disassembleAll('ㄳ');
        expect(ret1).toEqual(['ㄱ', 'ㅅ']);
        const ret2 = disassembleAll('ㅂ');
        expect(ret2).toEqual(['ㅂ']);
        const result = disassembleAll('긳');
        expect(result).toEqual(['ㄱ', 'ㅣ', 'ㄱ', 'ㅅ']);
        const result2 = disassembleAll('웱');
        expect(result2).toEqual(['ㅇ', 'ㅜ', 'ㅓ', 'ㅣ', 'ㄹ', 'ㄱ']);
        const result3 = disassembleAll('쀍');
        expect(result3).toEqual(['ㅂ', 'ㅂ', 'ㅜ', 'ㅓ', 'ㅣ', 'ㄹ', 'ㄱ']);
    });
});
