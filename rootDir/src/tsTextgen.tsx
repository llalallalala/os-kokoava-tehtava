export const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

export const generateText = (len: number) => {
    let templateLtrs: any = {};

    const ltList: string = " abcdefghijklmnopqrstuvwxyz";

    Array.from(ltList.split("")).forEach((val) => {
        templateLtrs[val] = ltList.split("");
    });

    let text = "";
    let ltr = " ";
    let nospace = 0;

    while (text.length <= len) {
        ltr = ltr==undefined?" ":ltr
        nospace += 1;
        text = text + ltr;
        let isSpace: Boolean = ltr == " ";

        ltr = templateLtrs[ltr][random(0, templateLtrs[ltr].length)];
        if (isSpace) {
            ltr = ltr == " " ? "a" : ltr;
            nospace -= 1;
        }

        const condition = nospace > 6;
        ltr = condition ? " " : ltr;
        nospace = condition ? 0 : nospace;
    }

    return text;
};