import {convertKrToJamoArr} from "./convertKrToJamoArr";

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


