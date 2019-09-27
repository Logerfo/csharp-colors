import { parse } from "./argb-parser";

const argbRegex = /(Color\s*\.\s*FromArgb\s*\()\s*(?:\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*,\s*)?\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*,\s*\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*,\s*\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*\)/g;

export async function findARGB(text) {
    return parse(text, argbRegex)
}
