import { parse } from "./argb-parser";

const color32Regex = /(new\s*(?:UnityEngine\s*\.\s*)?Color32\s*\()\s*(?:\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*,\s*)?\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*,\s*\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*,\s*\+?\s*(?:(0[xX])([0-9a-fA-F_]+)|(0[bB])([01_]+)|([0-9_]+))\s*\)/g;

export async function findColor32(text) {
    return parse(text, color32Regex)
}
