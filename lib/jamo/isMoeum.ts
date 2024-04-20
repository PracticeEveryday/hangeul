import {jungseong} from "../const/jamo.const";

export const isMoeum = (str: string) => {
    return jungseong.includes(str);
}
