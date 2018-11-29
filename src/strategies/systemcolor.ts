import Color = require('color');
import systemColors = require('./systemcolors.json');
import ffi = require('ffi');

enum GetSysColorIndex {
    COLOR_SCROLLBAR = 0,
    COLOR_BACKGROUND = 1,
    COLOR_ACTIVECAPTION = 2,
    COLOR_INACTIVECAPTION = 3,
    COLOR_MENU = 4,
    COLOR_WINDOW = 5,
    COLOR_WINDOWFRAME = 6,
    COLOR_MENUTEXT = 7,
    COLOR_WINDOWTEXT = 8,
    COLOR_CAPTIONTEXT = 9,
    COLOR_ACTIVEBORDER = 10,
    COLOR_INACTIVEBORDER = 11,
    COLOR_APPWORKSPACE = 12,
    COLOR_HIGHLIGHT = 13,
    COLOR_HIGHLIGHTTEXT = 14,
    COLOR_BTNFACE = 15,
    COLOR_BTNSHADOW = 16,
    COLOR_GRAYTEXT = 17,
    COLOR_BTNTEXT = 18,
    COLOR_INACTIVECAPTIONTEXT = 19,
    COLOR_BTNHIGHLIGHT = 20,
    COLOR_3DDKSHADOW = 21,
    COLOR_3DLIGHT = 22,
    COLOR_INFOTEXT = 23,
    COLOR_INFOBK = 24,

    COLOR_HOTLIGHT = 26,
    COLOR_GRADIENTACTIVECAPTION = 27,
    COLOR_GRADIENTINACTIVECAPTION = 28,
    COLOR_MENUHIGHLIGHT = 29,
    COLOR_MENUBAR = 30,

    COLOR_DESKTOP = 1,
    COLOR_3DFACE = 16,
    COLOR_3DSHADOW = 16,
    COLOR_3DHIGHLIGHT = 20,
    COLOR_3DHILIGHT = 20,
    COLOR_BTNHILIGHT = 20,

    COLOR_MAXVALUE = 30,/* Maximum value */
}

const user32 = ffi.Library('user32', {
    'GetSysColor': ['uint', ['int']]
});

function GetSysColor(index: GetSysColorIndex): string {
    let bgr = user32.GetSysColor(index);
    return `#${0xFF000000 | (bgr & 0xFF) << 16 | (bgr & 0xFF00) | (bgr >> 16)}`;
}

systemColors["ActiveBorder"] = GetSysColor(GetSysColorIndex.COLOR_ACTIVEBORDER);
systemColors["ActiveCaption"] = GetSysColor(GetSysColorIndex.COLOR_ACTIVECAPTION);
systemColors["ActiveCaptionText"] = GetSysColor(GetSysColorIndex.COLOR_CAPTIONTEXT);
systemColors["AppWorkspace"] = GetSysColor(GetSysColorIndex.COLOR_APPWORKSPACE);
systemColors["Control"] = GetSysColor(GetSysColorIndex.COLOR_BTNFACE);
systemColors["ControlDark"] = GetSysColor(GetSysColorIndex.COLOR_BTNSHADOW);
systemColors["ControlDarkDark"] = GetSysColor(GetSysColorIndex.COLOR_3DDKSHADOW);
systemColors["ControlLight"] = GetSysColor(GetSysColorIndex.COLOR_3DLIGHT);
systemColors["ControlLightLight"] = GetSysColor(GetSysColorIndex.COLOR_BTNHIGHLIGHT);
systemColors["ControlText"] = GetSysColor(GetSysColorIndex.COLOR_BTNTEXT);
systemColors["Desktop"] = GetSysColor(GetSysColorIndex.COLOR_DESKTOP);
systemColors["GrayText"] = GetSysColor(GetSysColorIndex.COLOR_GRAYTEXT);
systemColors["Highlight"] = GetSysColor(GetSysColorIndex.COLOR_HIGHLIGHT);
systemColors["HighlightText"] = GetSysColor(GetSysColorIndex.COLOR_HIGHLIGHTTEXT);
systemColors["HotTrack"] = GetSysColor(GetSysColorIndex.COLOR_HOTLIGHT);
systemColors["InactiveBorder"] = GetSysColor(GetSysColorIndex.COLOR_INACTIVEBORDER);
systemColors["InactiveCaption"] = GetSysColor(GetSysColorIndex.COLOR_INACTIVECAPTION);
systemColors["InactiveCaptionText"] = GetSysColor(GetSysColorIndex.COLOR_INACTIVECAPTIONTEXT);
systemColors["Info"] = GetSysColor(GetSysColorIndex.COLOR_INFOBK);
systemColors["InfoText"] = GetSysColor(GetSysColorIndex.COLOR_INFOTEXT);
systemColors["Menu"] = GetSysColor(GetSysColorIndex.COLOR_MENU);
systemColors["MenuText"] = GetSysColor(GetSysColorIndex.COLOR_MENUTEXT);
systemColors["ScrollBar"] = GetSysColor(GetSysColorIndex.COLOR_SCROLLBAR);
systemColors["Window"] = GetSysColor(GetSysColorIndex.COLOR_WINDOW);
systemColors["WindowFrame"] = GetSysColor(GetSysColorIndex.COLOR_WINDOWFRAME);
systemColors["WindowText"] = GetSysColor(GetSysColorIndex.COLOR_WINDOWTEXT);
systemColors["ButtonFace"] = GetSysColor(GetSysColorIndex.COLOR_BTNFACE);
systemColors["ButtonHighlight"] = GetSysColor(GetSysColorIndex.COLOR_BTNHIGHLIGHT);
systemColors["ButtonShadow"] = GetSysColor(GetSysColorIndex.COLOR_BTNSHADOW);
systemColors["GradientActiveCaption"] = GetSysColor(GetSysColorIndex.COLOR_GRADIENTACTIVECAPTION);
systemColors["GradientInactiveCaption"] = GetSysColor(GetSysColorIndex.COLOR_GRADIENTINACTIVECAPTION);
systemColors["MenuBar"] = GetSysColor(GetSysColorIndex.COLOR_MENUBAR);
systemColors["MenuHighlight"] = GetSysColor(GetSysColorIndex.COLOR_MENUHIGHLIGHT);

const colorRegex = /KnownColor\s*\.\s*([a-zA-Z]+)/g;

export async function findSystemColor(text) {
    let match = colorRegex.exec(text);
    let result = [];

    while (match != null) {
        const matchedColor = match[1];
        const start = match.index + (match[0].length - matchedColor.length);
        const end = colorRegex.lastIndex;
        const hex = systemColors[matchedColor];
        if (hex) {
            const color = Color(hex).rgb().string();
            result.push({ start, end, color });
        }
        match = colorRegex.exec(text);
    }
    return result;
}

export { systemColors }
