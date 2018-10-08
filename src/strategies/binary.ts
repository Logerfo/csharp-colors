import Color = require('color');

const hexRegex = /Color\.FromArgb\(0[bB]([01]+)\)/g;

export async function findBinary(text) {
    let match = hexRegex.exec(text);
    let result = [];

    while (match != null) {
        const start = match.index + 15;
        const end = hexRegex.lastIndex;
        const matchedColor = match[1];
        const color = Color.rgb(`#${parseInt(matchedColor, 2).toString(16)}`).rgb().string();
        result.push({ start, end, color });
        match = hexRegex.exec(text);
    }
    return result;
}
