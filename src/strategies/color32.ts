import Color = require("color");

const color32Regex = /(?:(new\s*(?:UnityEngine\s*\.\s*)?Color32\s*|(?:UnityEngine\s*\.\s*)?Color32\s*@?[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*new\s*)\()\s*(?:r\s*:\s*)?\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*,\s*(?:g\s*:\s*)?\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*,\s*(?:b\s*:\s*)?\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*,\s*(?:a\s*:\s*)?\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*\)/g;

export async function findColor32(text: string) {
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

        let matchedR = parseArgument(2);
        let matchedG = parseArgument(7);
        let matchedB = parseArgument(12);
        let matchedA = parseArgument(17);

        try {
            const color = Color(`rgba(${matchedR}, ${matchedG}, ${matchedB}, ${matchedA / 255})`).rgb().string();
            result.push({ start, end, color });
        }
        catch { }

        match = color32Regex.exec(text);
    }
    return result;
}
