import {convertKrToFullJamoArr, convertKrToJamoArr} from "./jamo";

describe("convertKrToJamoArr Test", () =>{
    test("한글을 전달 받으면 분리된 자음, 모음 배열을 반환한다.", () => {
        const result = convertKrToJamoArr("김동현");
        const result2 = convertKrToJamoArr("기");
        const result3 = convertKrToJamoArr("긳");
        const result4 = convertKrToJamoArr("ㄱ");
        const result5 = convertKrToJamoArr("ㄲ");

        expect(result).toBeInstanceOf(Array);
        expect(result).toEqual(['ㄱ', 'ㅣ', 'ㅁ', 'ㄷ', 'ㅗ', 'ㅇ', 'ㅎ', 'ㅕ', 'ㄴ']);
        expect(result2).toEqual(['ㄱ', 'ㅣ']);
        expect(result3).toEqual(['ㄱ', 'ㅣ', 'ㄳ']);
        expect(result4).toEqual(['ㄱ']);
        expect(result5).toEqual(['ㄲ']);
    })
})


describe("convertKrToFullJamoArr Test", () => {
    test("한글의 복합 자/모음 모두 단일 자/모음으로 분리된 자/모음 배열을 반환한다.", () => {
        const ret = convertKrToFullJamoArr("ㅃ");
        expect(ret).toEqual(['ㅂ', 'ㅂ']);

        const ret1 = convertKrToFullJamoArr("ㅂ");
        expect(ret1).toEqual(['ㅂ']);

        const result = convertKrToFullJamoArr("긳");
        expect(result).toEqual(['ㄱ', 'ㅣ', 'ㄱ', 'ㅅ']);

        const result2 = convertKrToFullJamoArr("웱");
        expect(result2).toEqual(['ㅇ', 'ㅜ', 'ㅓ', 'ㅣ', 'ㄹ', 'ㄱ']);

        const result3 = convertKrToFullJamoArr("쀍");
        expect(result3).toEqual(['ㅂ', 'ㅂ', 'ㅜ', 'ㅓ', 'ㅣ', 'ㄹ', 'ㄱ']);
    })
})