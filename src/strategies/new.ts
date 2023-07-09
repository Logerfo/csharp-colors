import Color = require("color");

const argbRegex = /(?:(new\s*(?:UnityEngine\s*\.\s*)?Color\s*|(?:UnityEngine\s*\.\s*)?Color\s*@?[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*new\s*)\()\s*(?:r\s*:\s*)?\+?\s*([0-9]*\.?[0-9]+)[fF]\s*,\s*(?:g\s*:\s*)?\+?\s*([0-9]*\.?[0-9]+)[fF]\s*,\s*(?:b\s*:\s*)?\+?\s*([0-9]*\.?[0-9]+)[fF]\s*(?:,\s*(?:a\s*:\s*)?\+?\s*([0-9]*\.?[0-9]+)[fF]\s*)?\)/g;

export async function findNew(text: string) {
    let match = argbRegex.exec(text);
    let result = [];

    while (match !== null) {
        const start = match.index + match[1].length;
        const end = argbRegex.lastIndex - 1; //cuts the close parenthesis

        let matchedR = +match[2].replace("_", "");
        let matchedG = +match[3].replace("_", "");
        let matchedB = +match[4].replace("_", "");

        let Avalue = match[5];
        let matchedA: number;
        if(Avalue) {
            matchedA = +Avalue.replace("_", "");
        }
        else {
            matchedA = 1;
        }

        try {
            const color = Color(`rgba(${Math.floor(matchedR * 255)}, ${Math.floor(matchedG * 255)}, ${Math.floor(matchedB * 255)}, ${matchedA})`).rgb().string();
            result.push({ start, end, color });
        }
        catch { }

        match = argbRegex.exec(text);
    }
    return result;
}
