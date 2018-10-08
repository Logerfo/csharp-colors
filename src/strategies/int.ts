import Color = require('color');

const hexRegex = /Color\.FromArgb\((0[xXbB])?(\d+)\)/g;

export async function findInt(text) {
    let match = hexRegex.exec(text);
    let result = [];

    while (match != null) {
        const start = match.index + 15;
        const end = hexRegex.lastIndex;
        if (!match[1]) { //negative lookbehind
            const matchedColor = +match[2];
            const color = Color.rgb(`#${matchedColor.toString(16)}`).rgb().string();
            result.push({ start, end, color });
        }
        match = hexRegex.exec(text);
    }
    return result;
}
