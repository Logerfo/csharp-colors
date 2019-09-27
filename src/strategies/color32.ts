import Color = require("color");

const color32Regex = /(new\s*(?:UnityEngine\s*\.\s*)?Color32\s*\()\s*(?:\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*,\s*)?\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*,\s*\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*,\s*\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*\)/g;

export async function findColor32(text) {
    let match = color32Regex.exec(text);
    let result = [];

    while (match !== null) {
        function parseArgument(index: number): number {
            let hexModifier = match[index];
            if (hexModifier) {
                hexModifier = hexModifier.toUpperCase();
                return parseInt(match[index + 1].replace("_", ""), 16);
            }
            let binaryModifier = match[index + 2];
            if (binaryModifier) {
                binaryModifier = binaryModifier.toUpperCase();
                return parseInt(match[index + 3].replace("_", ""), 2);
            }
            let dec = match[index + 4];
            if (dec) {
                return +dec.replace("_", "");
            }
            return 255;
        }

        const start = match.index + match[1].length;
        const end = color32Regex.lastIndex - 1; //cuts the close parenthesis

        let matchedA = parseArgument(2);
        let matchedR = parseArgument(7);
        let matchedG = parseArgument(12);
        let matchedB = parseArgument(17);

        try {
            const color = Color(`rgba(${matchedR}, ${matchedG}, ${matchedB}, ${matchedA / 255})`).rgb().string();
            result.push({ start, end, color });
        }
        catch { }

        match = color32Regex.exec(text);
    }
    return result;
}
