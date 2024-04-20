import { convertKrToFullJamoArr } from "./convertKrToFullJamoArr";

describe("convertKrToFullJamoArr Test", () => {
    test("한글의 복합 자/모음 모두 단일 자/모음으로 분리된 자/모음 배열을 반환한다.", () => {
        const ret = convertKrToFullJamoArr("ㅃ");
        expect(ret).toEqual(["ㅂ", "ㅂ"]);

        const ret1 = convertKrToFullJamoArr("ㅂ");
        expect(ret1).toEqual(["ㅂ"]);

        const result = convertKrToFullJamoArr("긳");
        expect(result).toEqual(["ㄱ", "ㅣ", "ㄱ", "ㅅ"]);

        const result2 = convertKrToFullJamoArr("웱");
        expect(result2).toEqual(["ㅇ", "ㅜ", "ㅓ", "ㅣ", "ㄹ", "ㄱ"]);

        const result3 = convertKrToFullJamoArr("쀍");
        expect(result3).toEqual(["ㅂ", "ㅂ", "ㅜ", "ㅓ", "ㅣ", "ㄹ", "ㄱ"]);
    });
});
