import Color = require('color');

const argbRegex = /Color\s*\.\s*FromArgb\s*\(\s*(0[xXbB])?([0-9a-zA-Z_]+),\s*(0[xXbB])?([0-9a-zA-Z_]+)\s*,\s*(0[xXbB])?([0-9a-zA-Z_]+)\s*,\s*(0[xXbB])?([0-9a-zA-Z_]+)\s*\)/g;

export async function findARGB(text) {
    let match = argbRegex.exec(text);
    let result = [];

    while (match != null) {
        const start = match.index + 15;
        const end = argbRegex.lastIndex;
        let Amodifier = match[1];
        const match2 = match[2].replace("_", "");
        let matchedA: number;
        if (Amodifier) {
            Amodifier = Amodifier.toUpperCase();
            if (Amodifier.startsWith("0X"))
                matchedA = parseInt(match2, 16);
            else if (Amodifier.startsWith("0B"))
                matchedA = parseInt(match2, 2);
            else
                throw new Error("This is not supposed to happen");
        }
        else
            matchedA = +match2;

        let Rmodifier = match[3];
        const match4 = match[4].replace("_", "");
        let matchedR: number;
        if (Rmodifier) {
            Rmodifier = Rmodifier.toUpperCase();
            if (Rmodifier.startsWith("0X"))
                matchedR = parseInt(match4, 16);
            else if (Rmodifier.startsWith("0B"))
                matchedR = parseInt(match4, 2);
            else
                throw new Error("This is not supposed to happen");
        }
        else
            matchedR = +match4;

        let Gmodifier = match[5];
        const match6 = match[6].replace("_", "");
        let matchedG: number;
        if (Gmodifier) {
            Gmodifier = Gmodifier.toUpperCase();
            if (Gmodifier.startsWith("0X"))
                matchedG = parseInt(match6, 16);
            else if (Gmodifier.startsWith("0B"))
                matchedG = parseInt(match6, 2);
            else
                throw new Error("This is not supposed to happen");
        }
        else
            matchedG = +match6;

        let Bmodifier = match[7];
        const match8 = match[8].replace("_", "");
        let matchedB: number;
        if (Bmodifier) {
            Bmodifier = Bmodifier.toUpperCase();
            if (Bmodifier.startsWith("0X"))
                matchedB = parseInt(match8, 16);
            else if (Bmodifier.startsWith("0B"))
                matchedB = parseInt(match8, 2);
            else
                throw new Error("This is not supposed to happen");
        }
        else
            matchedB = +match8;

        try {
            const color = Color(`rgba(${matchedR}, ${matchedG}, ${matchedB}, ${matchedA / 255})`).rgb().string();
            result.push({ start, end, color });
        }
        catch { }

        match = argbRegex.exec(text);
    }
    return result;
}
