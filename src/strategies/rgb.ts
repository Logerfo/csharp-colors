import Color = require('color');

const rgbRegex = /Color\s*\.\s*FromArgb\s*\(\s*(0[xXbB])?([0-9a-zA-Z_]+)\s*,\s*(0[xXbB])?([0-9a-zA-Z_]+)\s*,\s*(0[xXbB])?([0-9a-zA-Z_]+)\s*\)/g;

export async function findRGB(text) {
    let match = rgbRegex.exec(text);
    let result = [];

    while (match != null) {
        const start = match.index + 15;
        const end = rgbRegex.lastIndex;
        let Rmodifier = match[1];
        const match2 = match[2].replace("_", "");
        let matchedR: number;
        if (Rmodifier) {
            Rmodifier = Rmodifier.toUpperCase();
            if (Rmodifier.startsWith("0X"))
                matchedR = parseInt(match2, 16);
            else if (Rmodifier.startsWith("0B"))
                matchedR = parseInt(match2, 2);
            else
                throw new Error("This is not supposed to happen");
        }
        else
            matchedR = +match2;

        let Gmodifier = match[3];
        const match4 = match[4].replace("_", "");
        let matchedG: number;
        if (Gmodifier) {
            Gmodifier = Gmodifier.toUpperCase();
            if (Gmodifier.startsWith("0X"))
                matchedG = parseInt(match4, 16);
            else if (Gmodifier.startsWith("0B"))
                matchedG = parseInt(match4, 2);
            else
                throw new Error("This is not supposed to happen");
        }
        else
            matchedG = +match4;

        let Bmodifier = match[5];
        const match6 = match[6].replace("_", "");
        let matchedB: number;
        if (Bmodifier) {
            Bmodifier = Bmodifier.toUpperCase();
            if (Bmodifier.startsWith("0X"))
                matchedB = parseInt(match6, 16);
            else if (Bmodifier.startsWith("0B"))
                matchedB = parseInt(match6, 2);
            else
                throw new Error("This is not supposed to happen");
        }
        else
            matchedB = +match6;

        try {
            const color = Color.rgb(matchedR, matchedG, matchedB).rgb().string();
            result.push({ start, end, color });
        }
        catch { }

        match = rgbRegex.exec(text);
    }
    return result;
}
