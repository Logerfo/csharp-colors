import Color = require('color');

const argbRegex = /Color\.FromArgb\((\d+), (\d+), (\d+), (\d+)\)/g;

export async function findARGB(text) {
    let match = argbRegex.exec(text);
    let result = [];

    while (match != null) {
        const start = match.index + 15;
        const end = argbRegex.lastIndex;
        const A = +match[1] / 255;
        const R = match[2];
        const G = match[3];
        const B = match[4];
        const color = Color(`rgba(${R}, ${G}, ${B}, ${A})`).rgb().string();
        result.push({ start, end, color });
        match = argbRegex.exec(text);
    }
    return result;
}
