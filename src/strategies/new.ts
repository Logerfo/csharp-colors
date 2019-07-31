import Color = require("color");

const argbRegex = /(new\s*(?:UnityEngine\s*\.\s*)?Color\s*\()\s*(?:\+?\s*([0-9](?:\.[0-9])?)[fF]\s*,\s*)?\+?\s*([0-9](?:\.[0-9])?)[fF]\s*,\s*\+?\s*([0-9](?:\.[0-9])?)[fF]\s*,\s*\+?\s*([0-9](?:\.[0-9])?)[fF]\s*\)/g;

export async function findNew(text) {
    let match = argbRegex.exec(text);
    let result = [];

    while (match !== null) {
        const start = match.index + match[1].length;
        const end = argbRegex.lastIndex - 1; //cuts the close parenthesis
        let Avalue = match[2];
        let matchedA: number;
        if(Avalue) {
            matchedA = +Avalue.replace("_", "");
        }
        else {
            matchedA = 1;
        }
        let matchedR = +match[3].replace("_", "");
        let matchedG = +match[4].replace("_", "");
        let matchedB = +match[5].replace("_", "");

        try {
            const color = Color(`rgba(${matchedR * 255}, ${matchedG * 255}, ${matchedB * 255}, ${matchedA})`).rgb().string();
            result.push({ start, end, color });
        }
        catch { }

        match = argbRegex.exec(text);
    }
    return result;
}