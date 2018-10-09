import Color = require('color');

const hexRegex = /Color\s*\.\s*FromArgb\s*\(\s*(0[xXbB])?([0-9a-zA-Z_]+)\s*\)/g;

export async function findInt(text) {
    let match = hexRegex.exec(text);
    let result = [];

    while (match != null) {
        const start = match.index + 15;
        const end = hexRegex.lastIndex;
        let modifier = match[1];
        const match2 = match[2].replace("_", "");
        let matchedColor: string;
        if (modifier) {
            modifier = modifier.toUpperCase();
            if (modifier.startsWith("0X"))
                matchedColor = match2;
            else if (modifier.startsWith("0B"))
                matchedColor = parseInt(match2, 2).toString(16);
            else
                throw new Error("This is not supposed to happen");
        }
        else
            matchedColor = (+match2).toString(16);

        try {
            const color = Color.rgb(`#${matchedColor}`).rgb().string();
            result.push({ start, end, color });
        }
        catch { }

        match = hexRegex.exec(text);
    }
    return result;
}
