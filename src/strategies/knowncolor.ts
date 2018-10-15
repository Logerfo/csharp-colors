import Color = require('color');
import colors = require('./colors.json');
import knownColors = require('./systemcolors.json');

const colorRegex = /KnownColor\s*\.\s*([a-zA-Z]+)/g;

export async function findKnownColor(text) {
    let match = colorRegex.exec(text);
    let result = [];

    while (match != null) {
        const matchedColor = match[1];
        const start = match.index + (match[0].length - matchedColor.length);
        const end = colorRegex.lastIndex;
        let hex = colors[matchedColor];
        if (!hex) {
            hex = knownColors[matchedColor];
        }
        if (hex) {
            const color = Color(hex).rgb().string();
            result.push({ start, end, color });
        }
        match = colorRegex.exec(text);
    }
    return result;
}
