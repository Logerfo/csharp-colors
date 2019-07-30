import Color = require("color");

const argbRegex = /(Color\s*\.\s*FromArgb\s*\()\s*(?:(0[xXbB])?([0-9a-fA-F_]+)\s*,\s*)?(0[xXbB])?([0-9a-fA-F_]+)\s*,\s*(0[xXbB])?([0-9a-fA-F_]+)\s*,\s*(0[xXbB])?([0-9a-fA-F_]+)\s*\)/g;

export async function findARGB(text) {
    let match = argbRegex.exec(text);
    let result = [];

    while (match !== null) {
        const start = match.index + match[1].length;
        const end = argbRegex.lastIndex - 1; //cuts the close parenthesis
        let Amodifier = match[2];
        let Avalue = match[3];
        let matchedA: number;
        if (Avalue) {
            Avalue = match[3].replace("_", "");
            if (Amodifier) {
                Amodifier = Amodifier.toUpperCase();
                if (Amodifier.startsWith("0X")) {
                    matchedA = parseInt(Avalue, 16);
                } else if (Amodifier.startsWith("0B")) {
                    matchedA = parseInt(Avalue, 2);
                } else {
                    throw new Error("This is not supposed to happen");
                }
            }
            else {
                matchedA = +Avalue;
            }
        }
        else {
            matchedA = 255;
        }
        let Rmodifier = match[4];
        const RValue = match[5].replace("_", "");
        let matchedR: number;
        if (Rmodifier) {
            Rmodifier = Rmodifier.toUpperCase();
            if (Rmodifier.startsWith("0X")) {
                matchedR = parseInt(RValue, 16);
            } else if (Rmodifier.startsWith("0B")) {
                matchedR = parseInt(RValue, 2);
            } else {
                throw new Error("This is not supposed to happen");
            }
        }
        else {
            matchedR = +RValue;
        }

        let Gmodifier = match[6];
        const Gvalue = match[7].replace("_", "");
        let matchedG: number;
        if (Gmodifier) {
            Gmodifier = Gmodifier.toUpperCase();
            if (Gmodifier.startsWith("0X")) {
                matchedG = parseInt(Gvalue, 16);
            } else if (Gmodifier.startsWith("0B")) {
                matchedG = parseInt(Gvalue, 2);
            } else {
                throw new Error("This is not supposed to happen");
            }
        }
        else {
            matchedG = +Gvalue;
        }

        let Bmodifier = match[8];
        const Bvalue = match[9].replace("_", "");
        let matchedB: number;
        if (Bmodifier) {
            Bmodifier = Bmodifier.toUpperCase();
            if (Bmodifier.startsWith("0X")) {
                matchedB = parseInt(Bvalue, 16);
            } else if (Bmodifier.startsWith("0B")) {
                matchedB = parseInt(Bvalue, 2);
            } else {
                throw new Error("This is not supposed to happen");
            }
        }
        else {
            matchedB = +Bvalue;
        }

        try {
            const color = Color(`rgba(${matchedR}, ${matchedG}, ${matchedB}, ${matchedA / 255})`).rgb().string();
            result.push({ start, end, color });
        }
        catch { }

        match = argbRegex.exec(text);
    }
    return result;
}
