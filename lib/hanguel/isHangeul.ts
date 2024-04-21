export const isHangeul = (str: string) => {
    let checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    return checkKor.test(str);
};
