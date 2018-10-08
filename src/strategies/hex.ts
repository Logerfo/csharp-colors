import Color = require('color');

const hexRegex = /Color\.FromArgb\(0[xX]((?:[0-9a-fA-F]{2}){3,4}|[0-9a-fA-F]{3})\)/g;

export async function findHex(text) {
    let match = hexRegex.exec(text);
    let result = [];

    while (match != null) {
        const start = match.index + 15;
        const end = hexRegex.lastIndex;
        const matchedColor = match[1];
        const color = Color.rgb(`#${matchedColor}`).rgb().string();
        result.push({ start, end, color });
        match = hexRegex.exec(text);
    }
    return result;
}
