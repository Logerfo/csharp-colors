import Color = require("color");
import colors = require("./colors.json");

const colorRegex = /Color\s*\.\s*([a-zA-Z]+)/g;

export async function findColor(text) {
    let match = colorRegex.exec(text);
    let result = [];

    while (match !== null) {
        const matchedColor = match[1];
        const start = match.index + (match[0].length - matchedColor.length);
        const end = colorRegex.lastIndex;
        const hex = colors[matchedColor];
        if (hex) {
            const color = Color(hex).rgb().string();
            result.push({ start, end, color });
        }
        match = colorRegex.exec(text);
    }
    return result;
}
