import Color = require("color");

const hexRegex = /(Color\s*\.\s*FromArgb\s*\()\s*\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*\)/g;

export async function findInt(text: string) {
    let match = hexRegex.exec(text);
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
        const end = hexRegex.lastIndex - 1; //cuts the close parenthesis

        let matchedColor = parseArgument(2);

        try {
            const color = Color.rgb(`#${matchedColor}`).rgb().string();
            result.push({ start, end, color });
        }
        catch { }

        match = hexRegex.exec(text);
    }
    return result;
}
