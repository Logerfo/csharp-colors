import Color = require('color');

const rgbRegex = /Color\.FromArgb\((\d+), (\d+), (\d+)\)/g;

export async function findRGB(text) {
    let match = rgbRegex.exec(text);
    let result = [];

    while (match != null) {
        const start = match.index + 15;
        const end = rgbRegex.lastIndex;
        const R = +match[1];
        const G = +match[2];
        const B = +match[3];
        const color = Color.rgb(R, G, B).rgb().string();
        result.push({ start, end, color });
        match = rgbRegex.exec(text);
    }
    return result;
}
