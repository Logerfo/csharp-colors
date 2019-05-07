import Color = require("color");

const hexRegex = /(Color\s*\.\s*FromArgb\s*\()\s*(0[xXbB])?([0-9a-fA-F_]+)\s*\)/g;

export async function findInt(text) {
    let match = hexRegex.exec(text);
    let result = [];

    while (match !== null) {
        const start = match.index + match[1].length;
        const end = hexRegex.lastIndex - 1; //cuts the close parenthesis
        let modifier = match[2];
        const value = match[3].replace("_", "");
        let matchedColor: string;
        if (modifier) {
            modifier = modifier.toUpperCase();
            if (modifier.startsWith("0X")) {
                matchedColor = value;
            } else if (modifier.startsWith("0B")) {
                matchedColor = parseInt(value, 2).toString(16);
            } else {
                throw new Error("This is not supposed to happen");
            }
        }
        else {
            matchedColor = (+value).toString(16);
        }

        try {
            const color = Color.rgb(`#${matchedColor}`).rgb().string();
            result.push({ start, end, color });
        }
        catch { }

        match = hexRegex.exec(text);
    }
    return result;
}
