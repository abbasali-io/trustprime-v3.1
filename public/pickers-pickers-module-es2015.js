(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pickers-pickers-module"],{

/***/ "./node_modules/@ctrl/tinycolor/dist/es/conversion.js":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/conversion.js ***!
  \************************************************************/
/*! exports provided: rgbToRgb, rgbToHsl, hslToRgb, rgbToHsv, hsvToRgb, rgbToHex, rgbaToHex, rgbaToArgbHex, convertDecimalToHex, convertHexToDecimal, parseIntFromHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToRgb", function() { return rgbToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsl", function() { return rgbToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsv", function() { return rgbToHsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvToRgb", function() { return hsvToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToHex", function() { return rgbaToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToArgbHex", function() { return rgbaToArgbHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDecimalToHex", function() { return convertDecimalToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertHexToDecimal", function() { return convertHexToDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseIntFromHex", function() { return parseIntFromHex; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/es/util.js");

function rgbToRgb(r, g, b) {
    return {
        r: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255) * 255,
        g: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255) * 255,
        b: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255) * 255,
    };
}
function rgbToHsl(r, g, b) {
    r = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
    g = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
    b = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0;
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = ((g - b) / d) + (g < b ? 6 : 0);
                break;
            case g:
                h = ((b - r) / d) + 2;
                break;
            case b:
                h = ((r - g) / d) + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + ((q - p) * (6 * t));
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + ((q - p) * ((2 / 3) - t) * 6);
    }
    return p;
}
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360);
    s = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
    l = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(l, 100);
    if (s === 0) {
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? (l * (1 + s)) : (l + s - (l * s));
        var p = (2 * l) - q;
        r = hue2rgb(p, q, h + (1 / 3));
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - (1 / 3));
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
    r = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
    g = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
    b = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0;
    }
    else {
        switch (max) {
            case r:
                h = ((g - b) / d) + (g < b ? 6 : 0);
                break;
            case g:
                h = ((b - r) / d) + 2;
                break;
            case b:
                h = ((r - g) / d) + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
function hsvToRgb(h, s, v) {
    h = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360) * 6;
    s = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
    v = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - (f * s));
    var t = v * (1 - ((1 - f) * s));
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
    ];
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a)),
    ];
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
    return parseInt(val, 16);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js ***!
  \*****************************************************************/
/*! exports provided: names */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/format-input.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/format-input.js ***!
  \**************************************************************/
/*! exports provided: inputToRGB, stringInputToObject, isValidCSSUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputToRGB", function() { return inputToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return stringInputToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function() { return isValidCSSUnit; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/es/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/es/util.js");



function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToRgb"])(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
            v = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.v);
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["hsvToRgb"])(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
            l = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.l);
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"])(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = Object(_util__WEBPACK_IMPORTED_MODULE_2__["boundAlpha"])(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
var CSS_INTEGER = '[-\\+]?\\d+%?';
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][color]) {
        color = _css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
            a: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
            a: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/from-ratio.js":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/from-ratio.js ***!
  \************************************************************/
/*! exports provided: fromRatio, legacyRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRatio", function() { return fromRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legacyRandom", function() { return legacyRandom; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/es/util.js");


function fromRatio(ratio, opts) {
    var newColor = {
        r: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.r),
        g: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.g),
        b: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.b),
    };
    if (ratio.a !== undefined) {
        newColor.a = Number(ratio.a);
    }
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](newColor, opts);
}
function legacyRandom() {
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]({
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    });
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/index.js ***!
  \*******************************************************/
/*! exports provided: TinyColor, tinycolor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyColor", function() { return TinyColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tinycolor", function() { return tinycolor; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/es/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js");
/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format-input */ "./node_modules/@ctrl/tinycolor/dist/es/format-input.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/es/util.js");




var TinyColor = (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        if (color instanceof TinyColor) {
            return color;
        }
        this.originalInput = color;
        var rgb = Object(_format_input__WEBPACK_IMPORTED_MODULE_2__["inputToRGB"])(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    TinyColor.prototype.getBrightness = function () {
        var rgb = this.toRgb();
        return ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;
    };
    TinyColor.prototype.getLuminance = function () {
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);
        }
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    };
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = Object(_util__WEBPACK_IMPORTED_MODULE_3__["boundAlpha"])(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    TinyColor.prototype.toHsv = function () {
        var hsv = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    TinyColor.prototype.toHsvString = function () {
        var hsv = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toHsl = function () {
        var hsl = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    TinyColor.prototype.toHslString = function () {
        var hsl = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, allow3Char);
    };
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToHex"])(this.r, this.g, this.b, this.a, allow4Char);
    };
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(" + r + ", " + g + ", " + b + ")" : "rgba(" + r + ", " + g + ", " + b + ", " + this.roundA + ")";
    };
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return Math.round(Object(_util__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100) + "%"; };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round(Object(_util__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100); };
        return this.a === 1 ?
            "rgb(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%)" :
            "rgba(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.keys(_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"]); _i < _a.length; _i++) {
            var key = _a[_i];
            if (_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][key] === hex) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
            g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
            b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
            a: ((rgb2.a - rgb1.a) * p) + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + (i * increment)) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new TinyColor(color, opts);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/public_api.js":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/public_api.js ***!
  \************************************************************/
/*! exports provided: default, TinyColor, tinycolor, names, readability, isReadable, mostReadable, toMsFilter, fromRatio, legacyRandom, inputToRGB, stringInputToObject, isValidCSSUnit, random, bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinyColor", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tinycolor", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]; });

/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "names", function() { return _css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"]; });

/* harmony import */ var _readability__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readability */ "./node_modules/@ctrl/tinycolor/dist/es/readability.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readability", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["readability"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadable", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["isReadable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mostReadable", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["mostReadable"]; });

/* harmony import */ var _to_ms_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-ms-filter */ "./node_modules/@ctrl/tinycolor/dist/es/to-ms-filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMsFilter", function() { return _to_ms_filter__WEBPACK_IMPORTED_MODULE_3__["toMsFilter"]; });

/* harmony import */ var _from_ratio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from-ratio */ "./node_modules/@ctrl/tinycolor/dist/es/from-ratio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromRatio", function() { return _from_ratio__WEBPACK_IMPORTED_MODULE_4__["fromRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "legacyRandom", function() { return _from_ratio__WEBPACK_IMPORTED_MODULE_4__["legacyRandom"]; });

/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format-input */ "./node_modules/@ctrl/tinycolor/dist/es/format-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputToRGB", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["inputToRGB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["stringInputToObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["isValidCSSUnit"]; });

/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random */ "./node_modules/@ctrl/tinycolor/dist/es/random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _random__WEBPACK_IMPORTED_MODULE_6__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounds", function() { return _random__WEBPACK_IMPORTED_MODULE_6__["bounds"]; });









/* harmony default export */ __webpack_exports__["default"] = (_index__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]);


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/random.js":
/*!********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/random.js ***!
  \********************************************************/
/*! exports provided: random, bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounds", function() { return bounds; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");

function random(options) {
    if (options === void 0) { options = {}; }
    if (options.count !== undefined && options.count !== null) {
        var totalColors = options.count;
        var colors = [];
        options.count = undefined;
        while (totalColors > colors.length) {
            options.count = null;
            if (options.seed) {
                options.seed += 1;
            }
            colors.push(random(options));
        }
        options.count = totalColors;
        return colors;
    }
    var h = pickHue(options.hue, options.seed);
    var s = pickSaturation(h, options);
    var v = pickBrightness(h, s, options);
    var res = { h: h, s: s, v: v };
    if (options.alpha !== undefined) {
        res.a = options.alpha;
    }
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](res);
}
function pickHue(hue, seed) {
    var hueRange = getHueRange(hue);
    var res = randomWithin(hueRange, seed);
    if (res < 0) {
        res = 360 + res;
    }
    return res;
}
function pickSaturation(hue, options) {
    if (options.hue === 'monochrome') {
        return 0;
    }
    if (options.luminosity === 'random') {
        return randomWithin([0, 100], options.seed);
    }
    var saturationRange = getColorInfo(hue).saturationRange;
    var sMin = saturationRange[0];
    var sMax = saturationRange[1];
    switch (options.luminosity) {
        case 'bright':
            sMin = 55;
            break;
        case 'dark':
            sMin = sMax - 10;
            break;
        case 'light':
            sMax = 55;
            break;
        default:
            break;
    }
    return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H, S, options) {
    var bMin = getMinimumBrightness(H, S);
    var bMax = 100;
    switch (options.luminosity) {
        case 'dark':
            bMax = bMin + 20;
            break;
        case 'light':
            bMin = (bMax + bMin) / 2;
            break;
        case 'random':
            bMin = 0;
            bMax = 100;
            break;
        default:
            break;
    }
    return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H, S) {
    var lowerBounds = getColorInfo(H).lowerBounds;
    for (var i = 0; i < lowerBounds.length - 1; i++) {
        var s1 = lowerBounds[i][0];
        var v1 = lowerBounds[i][1];
        var s2 = lowerBounds[i + 1][0];
        var v2 = lowerBounds[i + 1][1];
        if (S >= s1 && S <= s2) {
            var m = (v2 - v1) / (s2 - s1);
            var b = v1 - (m * s1);
            return (m * S) + b;
        }
    }
    return 0;
}
function getHueRange(colorInput) {
    var num = parseInt(colorInput, 10);
    if (!Number.isNaN(num) && num < 360 && num > 0) {
        return [num, num];
    }
    if (typeof colorInput === 'string') {
        var namedColor = bounds.find(function (n) { return n.name === colorInput; });
        if (namedColor) {
            var color = defineColor(namedColor);
            if (color.hueRange) {
                return color.hueRange;
            }
        }
        var parsed = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](colorInput);
        if (parsed.isValid) {
            var hue = parsed.toHsv().h;
            return [hue, hue];
        }
    }
    return [0, 360];
}
function getColorInfo(hue) {
    if (hue >= 334 && hue <= 360) {
        hue -= 360;
    }
    for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
        var bound = bounds_1[_i];
        var color = defineColor(bound);
        if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
            return color;
        }
    }
    throw Error('Color not found');
}
function randomWithin(range, seed) {
    if (seed === undefined) {
        return Math.floor(range[0] + (Math.random() * (range[1] + 1 - range[0])));
    }
    var max = range[1] || 1;
    var min = range[0] || 0;
    seed = ((seed * 9301) + 49297) % 233280;
    var rnd = seed / 233280.0;
    return Math.floor(min + (rnd * (max - min)));
}
function defineColor(bound) {
    var sMin = bound.lowerBounds[0][0];
    var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
    var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
    var bMax = bound.lowerBounds[0][1];
    return {
        name: bound.name,
        hueRange: bound.hueRange,
        lowerBounds: bound.lowerBounds,
        saturationRange: [sMin, sMax],
        brightnessRange: [bMin, bMax],
    };
}
var bounds = [
    {
        name: 'monochrome',
        hueRange: null,
        lowerBounds: [[0, 0], [100, 0]],
    },
    {
        name: 'red',
        hueRange: [-26, 18],
        lowerBounds: [
            [20, 100],
            [30, 92],
            [40, 89],
            [50, 85],
            [60, 78],
            [70, 70],
            [80, 60],
            [90, 55],
            [100, 50],
        ],
    },
    {
        name: 'orange',
        hueRange: [19, 46],
        lowerBounds: [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]],
    },
    {
        name: 'yellow',
        hueRange: [47, 62],
        lowerBounds: [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]],
    },
    {
        name: 'green',
        hueRange: [63, 178],
        lowerBounds: [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]],
    },
    {
        name: 'blue',
        hueRange: [179, 257],
        lowerBounds: [
            [20, 100],
            [30, 86],
            [40, 80],
            [50, 74],
            [60, 60],
            [70, 52],
            [80, 44],
            [90, 39],
            [100, 35],
        ],
    },
    {
        name: 'purple',
        hueRange: [258, 282],
        lowerBounds: [
            [20, 100],
            [30, 87],
            [40, 79],
            [50, 70],
            [60, 65],
            [70, 59],
            [80, 52],
            [90, 45],
            [100, 42],
        ],
    },
    {
        name: 'pink',
        hueRange: [283, 334],
        lowerBounds: [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]],
    },
];


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/readability.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/readability.js ***!
  \*************************************************************/
/*! exports provided: readability, isReadable, mostReadable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readability", function() { return readability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadable", function() { return isReadable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mostReadable", function() { return mostReadable; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");

function readability(color1, color2) {
    var c1 = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color1);
    var c2 = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color2);
    return ((Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) /
        (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05));
}
function isReadable(color1, color2, wcag2) {
    if (wcag2 === void 0) { wcag2 = { level: 'AA', size: 'small' }; }
    var _a, _b;
    var readabilityLevel = readability(color1, color2);
    switch (((_a = wcag2.level) !== null && _a !== void 0 ? _a : 'AA') + ((_b = wcag2.size) !== null && _b !== void 0 ? _b : 'small')) {
        case 'AAsmall':
        case 'AAAlarge':
            return readabilityLevel >= 4.5;
        case 'AAlarge':
            return readabilityLevel >= 3;
        case 'AAAsmall':
            return readabilityLevel >= 7;
        default:
            return false;
    }
}
function mostReadable(baseColor, colorList, args) {
    if (args === void 0) { args = { includeFallbackColors: false, level: 'AA', size: 'small' }; }
    var bestColor = null;
    var bestScore = 0;
    var includeFallbackColors = args.includeFallbackColors, level = args.level, size = args.size;
    for (var _i = 0, colorList_1 = colorList; _i < colorList_1.length; _i++) {
        var color = colorList_1[_i];
        var score = readability(baseColor, color);
        if (score > bestScore) {
            bestScore = score;
            bestColor = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color);
        }
    }
    if (isReadable(baseColor, bestColor, { level: level, size: size }) || !includeFallbackColors) {
        return bestColor;
    }
    args.includeFallbackColors = false;
    return mostReadable(baseColor, ['#fff', '#000'], args);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/to-ms-filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/to-ms-filter.js ***!
  \**************************************************************/
/*! exports provided: toMsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMsFilter", function() { return toMsFilter; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/es/conversion.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");


function toMsFilter(firstColor, secondColor) {
    var color = new _index__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](firstColor);
    var hex8String = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(color.r, color.g, color.b, color.a);
    var secondHex8String = hex8String;
    var gradientType = color.gradientType ? 'GradientType = 1, ' : '';
    if (secondColor) {
        var s = new _index__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](secondColor);
        secondHex8String = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(s.r, s.g, s.b, s.a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/util.js":
/*!******************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/util.js ***!
  \******************************************************/
/*! exports provided: bound01, clamp01, isOnePointZero, isPercentage, boundAlpha, convertToPercentage, pad2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bound01", function() { return bound01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp01", function() { return clamp01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnePointZero", function() { return isOnePointZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPercentage", function() { return isPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAlpha", function() { return boundAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToPercentage", function() { return convertToPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad2", function() { return pad2; });
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var processPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    if (processPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    if (max === 360) {
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
    return typeof n === 'string' && n.includes('.') && parseFloat(n) === 1;
}
function isPercentage(n) {
    return typeof n === 'string' && n.includes('%');
}
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
function convertToPercentage(n) {
    if (n <= 1) {
        return Number(n) * 100 + "%";
    }
    return n;
}
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}


/***/ }),

/***/ "./node_modules/material-colors/dist/colors.es2015.js":
/*!************************************************************!*\
  !*** ./node_modules/material-colors/dist/colors.es2015.js ***!
  \************************************************************/
/*! exports provided: red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey, darkText, lightText, darkIcons, lightIcons, white, black, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pink", function() { return pink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepPurple", function() { return deepPurple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo", function() { return indigo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightBlue", function() { return lightBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cyan", function() { return cyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal", function() { return teal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightGreen", function() { return lightGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lime", function() { return lime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amber", function() { return amber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orange", function() { return orange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepOrange", function() { return deepOrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brown", function() { return brown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueGrey", function() { return blueGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkText", function() { return darkText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightText", function() { return lightText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkIcons", function() { return darkIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightIcons", function() { return lightIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
var red = {"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"};
var pink = {"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"};
var purple = {"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"};
var deepPurple = {"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"};
var indigo = {"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"};
var blue = {"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"};
var lightBlue = {"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"};
var cyan = {"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"};
var teal = {"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"};
var green = {"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"};
var lightGreen = {"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"};
var lime = {"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"};
var yellow = {"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"};
var amber = {"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"};
var orange = {"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"};
var deepOrange = {"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"};
var brown = {"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"};
var grey = {"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"};
var blueGrey = {"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"};
var darkText = {"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"};
var lightText = {"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"};
var darkIcons = {"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"};
var lightIcons = {"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"};
var white = "#ffffff";
var black = "#000000";

/* harmony default export */ __webpack_exports__["default"] = ({
  red: red,
  pink: pink,
  purple: purple,
  deepPurple: deepPurple,
  indigo: indigo,
  blue: blue,
  lightBlue: lightBlue,
  cyan: cyan,
  teal: teal,
  green: green,
  lightGreen: lightGreen,
  lime: lime,
  yellow: yellow,
  amber: amber,
  orange: orange,
  deepOrange: deepOrange,
  brown: brown,
  grey: grey,
  blueGrey: blueGrey,
  darkText: darkText,
  lightText: lightText,
  darkIcons: darkIcons,
  lightIcons: lightIcons,
  white: white,
  black: black
});


/***/ }),

/***/ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js ***!
  \********************************************************************/
/*! exports provided: Cmyk, ColorPickerComponent, ColorPickerDirective, ColorPickerModule, ColorPickerService, Hsla, Hsva, Rgba, SliderDirective, TextDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmyk", function() { return Cmyk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerDirective", function() { return ColorPickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function() { return ColorPickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerService", function() { return ColorPickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsla", function() { return Hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsva", function() { return Hsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgba", function() { return Rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDirective", function() { return SliderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDirective", function() { return TextDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ColorFormats = {
    HEX: 0,
    RGBA: 1,
    HSLA: 2,
    CMYK: 3,
};
ColorFormats[ColorFormats.HEX] = 'HEX';
ColorFormats[ColorFormats.RGBA] = 'RGBA';
ColorFormats[ColorFormats.HSLA] = 'HSLA';
ColorFormats[ColorFormats.CMYK] = 'CMYK';
var Rgba = /** @class */ (function () {
    function Rgba(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    return Rgba;
}());
var Hsva = /** @class */ (function () {
    function Hsva(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return Hsva;
}());
var Hsla = /** @class */ (function () {
    function Hsla(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    return Hsla;
}());
var Cmyk = /** @class */ (function () {
    function Cmyk(c, m, y, k, a) {
        if (a === void 0) { a = 1; }
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
        this.a = a;
    }
    return Cmyk;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function detectIE() {
    /** @type {?} */
    var ua = '';
    if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }
    /** @type {?} */
    var msie = ua.indexOf('msie ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    // Other browser
    return false;
}
var TextDirective = /** @class */ (function () {
    function TextDirective() {
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TextDirective.prototype.inputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var value = event.target.value;
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            /** @type {?} */
            var numeric = parseFloat(value);
            this.newValue.emit({ v: numeric, rg: this.rg });
        }
    };
    TextDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[text]'
                },] }
    ];
    TextDirective.propDecorators = {
        rg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        newValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }]
    };
    return TextDirective;
}());
var SliderDirective = /** @class */ (function () {
    function SliderDirective(elRef) {
        var _this = this;
        this.elRef = elRef;
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listenerMove = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.move(event); });
        this.listenerStop = (/**
         * @return {?}
         */
        function () { return _this.stop(); });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.mouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.touchStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.move = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.setCursor(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.start = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.setCursor(event);
        event.stopPropagation();
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
    };
    /**
     * @private
     * @return {?}
     */
    SliderDirective.prototype.stop = /**
     * @private
     * @return {?}
     */
    function () {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getX = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getY = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.setCursor = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var width = this.elRef.nativeElement.offsetWidth;
        /** @type {?} */
        var height = this.elRef.nativeElement.offsetHeight;
        /** @type {?} */
        var x = Math.max(0, Math.min(this.getX(event), width));
        /** @type {?} */
        var y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX !== undefined && this.rgY === undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    };
    SliderDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[slider]'
                },] }
    ];
    /** @nocollapse */
    SliderDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    SliderDirective.propDecorators = {
        rgX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rgY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        newValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        mouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
        touchStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['touchstart', ['$event'],] }]
    };
    return SliderDirective;
}());
var SliderPosition = /** @class */ (function () {
    function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderPosition;
}());
var SliderDimension = /** @class */ (function () {
    function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderDimension;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerService = /** @class */ (function () {
    function ColorPickerService() {
        this.active = null;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    ColorPickerService.prototype.setActive = /**
     * @param {?} active
     * @return {?}
     */
    function (active) {
        if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
            this.active.closeDialog();
        }
        this.active = active;
    };
    /**
     * @param {?} hsva
     * @return {?}
     */
    ColorPickerService.prototype.hsva2hsla = /**
     * @param {?} hsva
     * @return {?}
     */
    function (hsva) {
        /** @type {?} */
        var h = hsva.h;
        /** @type {?} */
        var s = hsva.s;
        /** @type {?} */
        var v = hsva.v;
        /** @type {?} */
        var a = hsva.a;
        if (v === 0) {
            return new Hsla(h, 0, 0, a);
        }
        else if (s === 0 && v === 1) {
            return new Hsla(h, 1, 1, a);
        }
        else {
            /** @type {?} */
            var l = v * (2 - s) / 2;
            return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
    };
    /**
     * @param {?} hsla
     * @return {?}
     */
    ColorPickerService.prototype.hsla2hsva = /**
     * @param {?} hsla
     * @return {?}
     */
    function (hsla) {
        /** @type {?} */
        var h = Math.min(hsla.h, 1);
        /** @type {?} */
        var s = Math.min(hsla.s, 1);
        /** @type {?} */
        var l = Math.min(hsla.l, 1);
        /** @type {?} */
        var a = Math.min(hsla.a, 1);
        if (l === 0) {
            return new Hsva(h, 0, 0, a);
        }
        else {
            /** @type {?} */
            var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
            return new Hsva(h, 2 * (v - l) / v, v, a);
        }
    };
    /**
     * @param {?} hsva
     * @return {?}
     */
    ColorPickerService.prototype.hsvaToRgba = /**
     * @param {?} hsva
     * @return {?}
     */
    function (hsva) {
        /** @type {?} */
        var r;
        /** @type {?} */
        var g;
        /** @type {?} */
        var b;
        /** @type {?} */
        var h = hsva.h;
        /** @type {?} */
        var s = hsva.s;
        /** @type {?} */
        var v = hsva.v;
        /** @type {?} */
        var a = hsva.a;
        /** @type {?} */
        var i = Math.floor(h * 6);
        /** @type {?} */
        var f = h * 6 - i;
        /** @type {?} */
        var p = v * (1 - s);
        /** @type {?} */
        var q = v * (1 - f * s);
        /** @type {?} */
        var t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
            default:
                r = 0, g = 0, b = 0;
        }
        return new Rgba(r, g, b, a);
    };
    /**
     * @param {?} cmyk
     * @return {?}
     */
    ColorPickerService.prototype.cmykToRgb = /**
     * @param {?} cmyk
     * @return {?}
     */
    function (cmyk) {
        /** @type {?} */
        var r = (1 - cmyk.c) * (1 - cmyk.k);
        /** @type {?} */
        var g = (1 - cmyk.m) * (1 - cmyk.k);
        /** @type {?} */
        var b = (1 - cmyk.y) * (1 - cmyk.k);
        return new Rgba(r, g, b, cmyk.a);
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToCmyk = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        /** @type {?} */
        var k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k === 1) {
            return new Cmyk(0, 0, 0, 1, rgba.a);
        }
        else {
            /** @type {?} */
            var c = (1 - rgba.r - k) / (1 - k);
            /** @type {?} */
            var m = (1 - rgba.g - k) / (1 - k);
            /** @type {?} */
            var y = (1 - rgba.b - k) / (1 - k);
            return new Cmyk(c, m, y, k, rgba.a);
        }
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToHsva = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        /** @type {?} */
        var h;
        /** @type {?} */
        var s;
        /** @type {?} */
        var r = Math.min(rgba.r, 1);
        /** @type {?} */
        var g = Math.min(rgba.g, 1);
        /** @type {?} */
        var b = Math.min(rgba.b, 1);
        /** @type {?} */
        var a = Math.min(rgba.a, 1);
        /** @type {?} */
        var max = Math.max(r, g, b);
        /** @type {?} */
        var min = Math.min(r, g, b);
        /** @type {?} */
        var v = max;
        /** @type {?} */
        var d = max - min;
        s = (max === 0) ? 0 : d / max;
        if (max === min) {
            h = 0;
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
                default:
                    h = 0;
            }
            h /= 6;
        }
        return new Hsva(h, s, v, a);
    };
    /**
     * @param {?} rgba
     * @param {?=} allowHex8
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToHex = /**
     * @param {?} rgba
     * @param {?=} allowHex8
     * @return {?}
     */
    function (rgba, allowHex8) {
        /* tslint:disable:no-bitwise */
        /** @type {?} */
        var hex = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
        if (allowHex8) {
            hex += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */
        return hex;
    };
    /**
     * @param {?} cmyk
     * @return {?}
     */
    ColorPickerService.prototype.normalizeCMYK = /**
     * @param {?} cmyk
     * @return {?}
     */
    function (cmyk) {
        return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
    };
    /**
     * @param {?} cmyk
     * @return {?}
     */
    ColorPickerService.prototype.denormalizeCMYK = /**
     * @param {?} cmyk
     * @return {?}
     */
    function (cmyk) {
        return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.denormalizeRGBA = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    };
    /**
     * @param {?=} colorString
     * @param {?=} allowHex8
     * @return {?}
     */
    ColorPickerService.prototype.stringToHsva = /**
     * @param {?=} colorString
     * @param {?=} allowHex8
     * @return {?}
     */
    function (colorString, allowHex8) {
        if (colorString === void 0) { colorString = ''; }
        if (allowHex8 === void 0) { allowHex8 = false; }
        /** @type {?} */
        var hsva = null;
        colorString = (colorString || '').toLowerCase();
        /** @type {?} */
        var stringParsers = [
            {
                re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: (/**
                 * @param {?} execResult
                 * @return {?}
                 */
                function (execResult) {
                    return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                })
            }, {
                re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: (/**
                 * @param {?} execResult
                 * @return {?}
                 */
                function (execResult) {
                    return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                })
            }
        ];
        if (allowHex8) {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
                parse: (/**
                 * @param {?} execResult
                 * @return {?}
                 */
                function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
                })
            });
        }
        else {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: (/**
                 * @param {?} execResult
                 * @return {?}
                 */
                function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                })
            });
        }
        stringParsers.push({
            re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
            parse: (/**
             * @param {?} execResult
             * @return {?}
             */
            function (execResult) {
                return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
            })
        });
        for (var key in stringParsers) {
            if (stringParsers.hasOwnProperty(key)) {
                /** @type {?} */
                var parser = stringParsers[key];
                /** @type {?} */
                var match = parser.re.exec(colorString);
                /** @type {?} */
                var color = match && parser.parse(match);
                if (color) {
                    if (color instanceof Rgba) {
                        hsva = this.rgbaToHsva(color);
                    }
                    else if (color instanceof Hsla) {
                        hsva = this.hsla2hsva(color);
                    }
                    return hsva;
                }
            }
        }
        return hsva;
    };
    /**
     * @param {?} hsva
     * @param {?} outputFormat
     * @param {?} alphaChannel
     * @return {?}
     */
    ColorPickerService.prototype.outputFormat = /**
     * @param {?} hsva
     * @param {?} outputFormat
     * @param {?} alphaChannel
     * @return {?}
     */
    function (hsva, outputFormat, alphaChannel) {
        if (outputFormat === 'auto') {
            outputFormat = hsva.a < 1 ? 'rgba' : 'hex';
        }
        switch (outputFormat) {
            case 'hsla':
                /** @type {?} */
                var hsla = this.hsva2hsla(hsva);
                /** @type {?} */
                var hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' +
                        hslaText.a + ')';
                }
                else {
                    return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                }
            case 'rgba':
                /** @type {?} */
                var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' +
                        Math.round(rgba.a * 100) / 100 + ')';
                }
                else {
                    return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                }
            default:
                /** @type {?} */
                var allowHex8 = (alphaChannel === 'always' || alphaChannel === 'forced');
                return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
        }
    };
    ColorPickerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ColorPickerService.ctorParameters = function () { return []; };
    return ColorPickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent(elRef, cdRef, service) {
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.service = service;
        this.isIE10 = false;
        this.dialogArrowSize = 10;
        this.dialogArrowOffset = 15;
        this.dialogInputFields = [
            ColorFormats.HEX,
            ColorFormats.RGBA,
            ColorFormats.HSLA,
            ColorFormats.CMYK
        ];
        this.useRootViewContainer = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.handleEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
            this.onCancelColor(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.handleEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
            this.onAcceptColor(event);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.slider = new SliderPosition(0, 0, 0, 0);
        /** @type {?} */
        var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
        /** @type {?} */
        var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
        this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
        if (this.cpCmykEnabled) {
            this.format = ColorFormats.CMYK;
        }
        else if (this.cpOutputFormat === 'rgba') {
            this.format = ColorFormats.RGBA;
        }
        else if (this.cpOutputFormat === 'hsla') {
            this.format = ColorFormats.HSLA;
        }
        else {
            this.format = ColorFormats.HEX;
        }
        this.listenerMouseDown = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { _this.onMouseDown(event); });
        this.listenerResize = (/**
         * @return {?}
         */
        function () { _this.onResize(); });
        this.openDialog(this.initialColor, false);
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.closeDialog();
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.cpWidth !== 230 || this.cpDialogDisplay === 'inline') {
            /** @type {?} */
            var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
            /** @type {?} */
            var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
            this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
            this.updateColorPicker(false);
            this.cdRef.detectChanges();
        }
    };
    /**
     * @param {?} color
     * @param {?=} emit
     * @return {?}
     */
    ColorPickerComponent.prototype.openDialog = /**
     * @param {?} color
     * @param {?=} emit
     * @return {?}
     */
    function (color, emit) {
        if (emit === void 0) { emit = true; }
        this.service.setActive(this);
        if (!this.width) {
            this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
        }
        if (!this.height) {
            this.height = 320;
        }
        this.setInitialColor(color);
        this.setColorFromString(color, emit);
        this.openColorPicker();
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        this.closeColorPicker();
    };
    /**
     * @param {?} instance
     * @param {?} elementRef
     * @param {?} color
     * @param {?} cpWidth
     * @param {?} cpHeight
     * @param {?} cpDialogDisplay
     * @param {?} cpFallbackColor
     * @param {?} cpColorMode
     * @param {?} cpCmykEnabled
     * @param {?} cpAlphaChannel
     * @param {?} cpOutputFormat
     * @param {?} cpDisableInput
     * @param {?} cpIgnoredElements
     * @param {?} cpSaveClickOutside
     * @param {?} cpCloseClickOutside
     * @param {?} cpUseRootViewContainer
     * @param {?} cpPosition
     * @param {?} cpPositionOffset
     * @param {?} cpPositionRelativeToArrow
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @param {?} cpPresetColorsClass
     * @param {?} cpMaxPresetColorsLength
     * @param {?} cpPresetEmptyMessage
     * @param {?} cpPresetEmptyMessageClass
     * @param {?} cpOKButton
     * @param {?} cpOKButtonClass
     * @param {?} cpOKButtonText
     * @param {?} cpCancelButton
     * @param {?} cpCancelButtonClass
     * @param {?} cpCancelButtonText
     * @param {?} cpAddColorButton
     * @param {?} cpAddColorButtonClass
     * @param {?} cpAddColorButtonText
     * @param {?} cpRemoveColorButtonClass
     * @return {?}
     */
    ColorPickerComponent.prototype.setupDialog = /**
     * @param {?} instance
     * @param {?} elementRef
     * @param {?} color
     * @param {?} cpWidth
     * @param {?} cpHeight
     * @param {?} cpDialogDisplay
     * @param {?} cpFallbackColor
     * @param {?} cpColorMode
     * @param {?} cpCmykEnabled
     * @param {?} cpAlphaChannel
     * @param {?} cpOutputFormat
     * @param {?} cpDisableInput
     * @param {?} cpIgnoredElements
     * @param {?} cpSaveClickOutside
     * @param {?} cpCloseClickOutside
     * @param {?} cpUseRootViewContainer
     * @param {?} cpPosition
     * @param {?} cpPositionOffset
     * @param {?} cpPositionRelativeToArrow
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @param {?} cpPresetColorsClass
     * @param {?} cpMaxPresetColorsLength
     * @param {?} cpPresetEmptyMessage
     * @param {?} cpPresetEmptyMessageClass
     * @param {?} cpOKButton
     * @param {?} cpOKButtonClass
     * @param {?} cpOKButtonText
     * @param {?} cpCancelButton
     * @param {?} cpCancelButtonClass
     * @param {?} cpCancelButtonText
     * @param {?} cpAddColorButton
     * @param {?} cpAddColorButtonClass
     * @param {?} cpAddColorButtonText
     * @param {?} cpRemoveColorButtonClass
     * @return {?}
     */
    function (instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass) {
        this.setInitialColor(color);
        this.setColorMode(cpColorMode);
        this.isIE10 = (detectIE() === 10);
        this.directiveInstance = instance;
        this.directiveElementRef = elementRef;
        this.cpDisableInput = cpDisableInput;
        this.cpCmykEnabled = cpCmykEnabled;
        this.cpAlphaChannel = cpAlphaChannel;
        this.cpOutputFormat = cpOutputFormat;
        this.cpDialogDisplay = cpDialogDisplay;
        this.cpIgnoredElements = cpIgnoredElements;
        this.cpSaveClickOutside = cpSaveClickOutside;
        this.cpCloseClickOutside = cpCloseClickOutside;
        this.useRootViewContainer = cpUseRootViewContainer;
        this.width = this.cpWidth = parseInt(cpWidth, 10);
        this.height = this.cpHeight = parseInt(cpHeight, 10);
        this.cpPosition = cpPosition;
        this.cpPositionOffset = parseInt(cpPositionOffset, 10);
        this.cpOKButton = cpOKButton;
        this.cpOKButtonText = cpOKButtonText;
        this.cpOKButtonClass = cpOKButtonClass;
        this.cpCancelButton = cpCancelButton;
        this.cpCancelButtonText = cpCancelButtonText;
        this.cpCancelButtonClass = cpCancelButtonClass;
        this.fallbackColor = cpFallbackColor || '#fff';
        this.setPresetConfig(cpPresetLabel, cpPresetColors);
        this.cpPresetColorsClass = cpPresetColorsClass;
        this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
        this.cpPresetEmptyMessage = cpPresetEmptyMessage;
        this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
        this.cpAddColorButton = cpAddColorButton;
        this.cpAddColorButtonText = cpAddColorButtonText;
        this.cpAddColorButtonClass = cpAddColorButtonClass;
        this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
        if (!cpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0;
        }
        if (cpDialogDisplay === 'inline') {
            this.dialogArrowSize = 0;
            this.dialogArrowOffset = 0;
        }
        if (cpOutputFormat === 'hex' &&
            cpAlphaChannel !== 'always' && cpAlphaChannel !== 'forced') {
            this.cpAlphaChannel = 'disabled';
        }
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ColorPickerComponent.prototype.setColorMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        switch (mode.toString().toUpperCase()) {
            case '1':
            case 'C':
            case 'COLOR':
                this.cpColorMode = 1;
                break;
            case '2':
            case 'G':
            case 'GRAYSCALE':
                this.cpColorMode = 2;
                break;
            case '3':
            case 'P':
            case 'PRESETS':
                this.cpColorMode = 3;
                break;
            default:
                this.cpColorMode = 1;
        }
    };
    /**
     * @param {?} color
     * @return {?}
     */
    ColorPickerComponent.prototype.setInitialColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this.initialColor = color;
    };
    /**
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @return {?}
     */
    ColorPickerComponent.prototype.setPresetConfig = /**
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @return {?}
     */
    function (cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
    };
    /**
     * @param {?} value
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    ColorPickerComponent.prototype.setColorFromString = /**
     * @param {?} value
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    function (value, emit, update) {
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
        /** @type {?} */
        var hsva;
        if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'forced') {
            hsva = this.service.stringToHsva(value, true);
            if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(value, false);
            }
        }
        else {
            hsva = this.service.stringToHsva(value, false);
        }
        if (!hsva && !this.hsva) {
            hsva = this.service.stringToHsva(this.fallbackColor, false);
        }
        if (hsva) {
            this.hsva = hsva;
            this.sliderH = this.hsva.h;
            if (this.cpOutputFormat === 'hex' && this.cpAlphaChannel === 'disabled') {
                this.hsva.a = 1;
            }
            this.updateColorPicker(emit, update);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        if (this.position === 'fixed') {
            this.setDialogPosition();
        }
        else if (this.cpDialogDisplay !== 'inline') {
            this.closeColorPicker();
        }
    };
    /**
     * @param {?} slider
     * @return {?}
     */
    ColorPickerComponent.prototype.onDragEnd = /**
     * @param {?} slider
     * @return {?}
     */
    function (slider) {
        this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor });
    };
    /**
     * @param {?} slider
     * @return {?}
     */
    ColorPickerComponent.prototype.onDragStart = /**
     * @param {?} slider
     * @return {?}
     */
    function (slider) {
        this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show &&
            !this.isIE10 && this.cpDialogDisplay === 'popup' &&
            event.target !== this.directiveElementRef.nativeElement &&
            !this.isDescendant(this.elRef.nativeElement, event.target) &&
            !this.isDescendant(this.directiveElementRef.nativeElement, event.target) &&
            this.cpIgnoredElements.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item === event.target; })).length === 0) {
            if (this.cpSaveClickOutside) {
                this.directiveInstance.colorSelected(this.outputColor);
            }
            else {
                this.setColorFromString(this.initialColor, false);
                if (this.cpCmykEnabled) {
                    this.directiveInstance.cmykChanged(this.cmykColor);
                }
                this.directiveInstance.colorChanged(this.outputColor);
            }
            if (this.cpCloseClickOutside) {
                this.closeColorPicker();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onAcceptColor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (this.outputColor) {
            this.directiveInstance.colorSelected(this.outputColor);
        }
        if (this.cpDialogDisplay === 'popup') {
            this.closeColorPicker();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onCancelColor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.setColorFromString(this.initialColor, true);
        if (this.cpDialogDisplay === 'popup') {
            if (this.cpCmykEnabled) {
                this.directiveInstance.cmykChanged(this.cmykColor);
            }
            this.directiveInstance.colorChanged(this.outputColor, true);
            this.closeColorPicker();
        }
        this.directiveInstance.colorCanceled();
    };
    /**
     * @param {?} change
     * @return {?}
     */
    ColorPickerComponent.prototype.onFormatToggle = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        /** @type {?} */
        var availableFormats = this.dialogInputFields.length -
            (this.cpCmykEnabled ? 0 : 1);
        /** @type {?} */
        var nextFormat = (((this.dialogInputFields.indexOf(this.format) + change) %
            availableFormats) + availableFormats) % availableFormats;
        this.format = this.dialogInputFields[nextFormat];
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onColorChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.s = value.s / value.rgX;
        this.hsva.v = value.v / value.rgY;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'lightness',
            value: this.hsva.v,
            color: this.outputColor
        });
        this.directiveInstance.sliderChanged({
            slider: 'saturation',
            value: this.hsva.s,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.h = value.v / value.rgX;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'hue',
            value: this.hsva.h,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onValueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.v = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'value',
            value: this.hsva.v,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAlphaChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.a = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'alpha',
            value: this.hsva.a,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHexInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null) {
            this.updateColorPicker();
        }
        else {
            if (value && value[0] !== '#') {
                value = '#' + value;
            }
            /** @type {?} */
            var validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
            if (this.cpAlphaChannel === 'always') {
                validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
            }
            /** @type {?} */
            var valid = validHex.test(value);
            if (valid) {
                if (value.length < 5) {
                    value = '#' + value.substring(1)
                        .split('')
                        .map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return c + c; }))
                        .join('');
                }
                if (this.cpAlphaChannel === 'forced') {
                    value += Math.round(this.hsva.a * 255).toString(16);
                }
                this.setColorFromString(value, true, false);
            }
            this.directiveInstance.inputChanged({
                input: 'hex',
                valid: valid,
                value: value,
                color: this.outputColor
            });
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onRedInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.r = value.v / value.rg;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'red',
            valid: valid,
            value: rgba.r,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onBlueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.b = value.v / value.rg;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'blue',
            valid: valid,
            value: rgba.b,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onGreenInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.g = value.v / value.rg;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'green',
            valid: valid,
            value: rgba.g,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.h = value.v / value.rg;
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'hue',
            valid: valid,
            value: this.hsva.h,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onValueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.v = value.v / value.rg;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'value',
            valid: valid,
            value: this.hsva.v,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAlphaInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.a = value.v / value.rg;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'alpha',
            valid: valid,
            value: this.hsva.a,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onLightnessInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            hsla.l = value.v / value.rg;
            this.hsva = this.service.hsla2hsva(hsla);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'lightness',
            valid: valid,
            value: hsla.l,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onSaturationInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            hsla.s = value.v / value.rg;
            this.hsva = this.service.hsla2hsva(hsla);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'saturation',
            valid: valid,
            value: hsla.s,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onCyanInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.cmyk.c = value.v;
            this.updateColorPicker(false, true, true);
        }
        this.directiveInstance.inputChanged({
            input: 'cyan',
            valid: true,
            value: this.cmyk.c,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onMagentaInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.cmyk.m = value.v;
            this.updateColorPicker(false, true, true);
        }
        this.directiveInstance.inputChanged({
            input: 'magenta',
            valid: true,
            value: this.cmyk.m,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onYellowInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.cmyk.y = value.v;
            this.updateColorPicker(false, true, true);
        }
        this.directiveInstance.inputChanged({
            input: 'yellow',
            valid: true,
            value: this.cmyk.y,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onBlackInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.cmyk.k = value.v;
            this.updateColorPicker(false, true, true);
        }
        this.directiveInstance.inputChanged({
            input: 'black',
            valid: true,
            value: this.cmyk.k,
            color: this.outputColor
        });
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAddPresetColor = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        event.stopPropagation();
        if (!this.cpPresetColors.filter((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return (color === value); })).length) {
            this.cpPresetColors = this.cpPresetColors.concat(value);
            this.directiveInstance.presetColorsChanged(this.cpPresetColors);
        }
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onRemovePresetColor = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        event.stopPropagation();
        this.cpPresetColors = this.cpPresetColors.filter((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return (color !== value); }));
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    };
    // Private helper functions for the color picker dialog status
    // Private helper functions for the color picker dialog status
    /**
     * @private
     * @return {?}
     */
    ColorPickerComponent.prototype.openColorPicker = 
    // Private helper functions for the color picker dialog status
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.hidden = false;
                _this.setDialogPosition();
                _this.cdRef.detectChanges();
            }), 0);
            this.directiveInstance.stateChanged(true);
            if (!this.isIE10) {
                document.addEventListener('mousedown', this.listenerMouseDown);
                document.addEventListener('touchstart', this.listenerMouseDown);
            }
            window.addEventListener('resize', this.listenerResize);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ColorPickerComponent.prototype.closeColorPicker = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.show) {
            this.show = false;
            this.directiveInstance.stateChanged(false);
            if (!this.isIE10) {
                document.removeEventListener('mousedown', this.listenerMouseDown);
                document.removeEventListener('touchstart', this.listenerMouseDown);
            }
            window.removeEventListener('resize', this.listenerResize);
            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
            }
        }
    };
    /**
     * @private
     * @param {?=} emit
     * @param {?=} update
     * @param {?=} cmykInput
     * @return {?}
     */
    ColorPickerComponent.prototype.updateColorPicker = /**
     * @private
     * @param {?=} emit
     * @param {?=} update
     * @param {?=} cmykInput
     * @return {?}
     */
    function (emit, update, cmykInput) {
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
        if (cmykInput === void 0) { cmykInput = false; }
        if (this.sliderDimMax) {
            if (this.cpColorMode === 2) {
                this.hsva.s = 0;
            }
            /** @type {?} */
            var hue = void 0;
            /** @type {?} */
            var hsla = void 0;
            /** @type {?} */
            var rgba = void 0;
            /** @type {?} */
            var lastOutput = this.outputColor;
            hsla = this.service.hsva2hsla(this.hsva);
            if (!this.cpCmykEnabled) {
                rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
            }
            else {
                if (!cmykInput) {
                    rgba = this.service.hsvaToRgba(this.hsva);
                    this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
                }
                else {
                    rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
                    this.hsva = this.service.rgbaToHsva(rgba);
                }
                rgba = this.service.denormalizeRGBA(rgba);
                this.sliderH = this.hsva.h;
            }
            hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
            if (update) {
                this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
                if (this.cpCmykEnabled) {
                    this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
                }
                /** @type {?} */
                var allowHex8 = this.cpAlphaChannel === 'always';
                this.hexText = this.service.rgbaToHex(rgba, allowHex8);
                this.hexAlpha = this.rgbaText.a;
            }
            if (this.cpOutputFormat === 'auto') {
                if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK) {
                    if (this.hsva.a < 1) {
                        this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
                    }
                }
            }
            this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
            this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
            this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
            this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);
            if (this.format !== ColorFormats.CMYK) {
                this.cmykColor = '';
            }
            else {
                if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'enabled' ||
                    this.cpAlphaChannel === 'forced') {
                    /** @type {?} */
                    var alpha = Math.round(this.cmyk.a * 100) / 100;
                    this.cmykColor = "cmyka(" + this.cmyk.c + "," + this.cmyk.m + "," + this.cmyk.y + "," + this.cmyk.k + "," + alpha + ")";
                }
                else {
                    this.cmykColor = "cmyk(" + this.cmyk.c + "," + this.cmyk.m + "," + this.cmyk.y + "," + this.cmyk.k + ")";
                }
            }
            this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
            if (emit && lastOutput !== this.outputColor) {
                if (this.cpCmykEnabled) {
                    this.directiveInstance.cmykChanged(this.cmykColor);
                }
                this.directiveInstance.colorChanged(this.outputColor);
            }
        }
    };
    // Private helper functions for the color picker dialog positioning
    // Private helper functions for the color picker dialog positioning
    /**
     * @private
     * @return {?}
     */
    ColorPickerComponent.prototype.setDialogPosition = 
    // Private helper functions for the color picker dialog positioning
    /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cpDialogDisplay === 'inline') {
            this.position = 'relative';
        }
        else {
            /** @type {?} */
            var position = 'static';
            /** @type {?} */
            var transform = '';
            /** @type {?} */
            var style = void 0;
            /** @type {?} */
            var parentNode = null;
            /** @type {?} */
            var transformNode = null;
            /** @type {?} */
            var node = this.directiveElementRef.nativeElement.parentNode;
            /** @type {?} */
            var dialogHeight = this.dialogElement.nativeElement.offsetHeight;
            while (node !== null && node.tagName !== 'HTML') {
                style = window.getComputedStyle(node);
                position = style.getPropertyValue('position');
                transform = style.getPropertyValue('transform');
                if (position !== 'static' && parentNode === null) {
                    parentNode = node;
                }
                if (transform && transform !== 'none' && transformNode === null) {
                    transformNode = node;
                }
                if (position === 'fixed') {
                    parentNode = transformNode;
                    break;
                }
                node = node.parentNode;
            }
            /** @type {?} */
            var boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
            if (this.useRootViewContainer || (position === 'fixed' &&
                (!parentNode || parentNode instanceof HTMLUnknownElement))) {
                this.top = boxDirective.top;
                this.left = boxDirective.left;
            }
            else {
                if (parentNode === null) {
                    parentNode = node;
                }
                /** @type {?} */
                var boxParent = this.createDialogBox(parentNode, (position !== 'fixed'));
                this.top = boxDirective.top - boxParent.top;
                this.left = boxDirective.left - boxParent.left;
            }
            if (position === 'fixed') {
                this.position = 'fixed';
            }
            /** @type {?} */
            var usePosition = this.cpPosition;
            if (this.cpPosition === 'auto') {
                /** @type {?} */
                var usePositionX = 'right';
                /** @type {?} */
                var usePositionY = 'bottom';
                /** @type {?} */
                var winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                /** @type {?} */
                var winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                if (this.left + this.cpWidth > winWidth) {
                    usePositionX = 'left';
                }
                if (this.top + dialogHeight > winHeight) {
                    usePositionY = 'top';
                }
                usePosition = usePositionX + '-' + usePositionY;
            }
            this.cpUsePosition = usePosition;
            if (usePosition === 'top') {
                this.arrowTop = dialogHeight - 1;
                this.top -= dialogHeight + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else if (usePosition === 'bottom') {
                this.top += boxDirective.height + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else if (usePosition === 'top-left' || usePosition === 'left-top') {
                this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
                this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
            }
            else if (usePosition === 'top-right' || usePosition === 'right-top') {
                this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
                this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
            }
            else if (usePosition === 'left' || usePosition === 'bottom-left' || usePosition === 'left-bottom') {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left -= this.cpWidth + this.dialogArrowSize - 2;
            }
            else { // usePosition === 'right' || usePosition === 'bottom-right' || usePosition === 'right-bottom'
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left += boxDirective.width + this.dialogArrowSize - 2;
            }
        }
    };
    // Private helper functions for the color picker dialog positioning and opening
    // Private helper functions for the color picker dialog positioning and opening
    /**
     * @private
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    ColorPickerComponent.prototype.isDescendant = 
    // Private helper functions for the color picker dialog positioning and opening
    /**
     * @private
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    function (parent, child) {
        /** @type {?} */
        var node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    /**
     * @private
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    ColorPickerComponent.prototype.createDialogBox = /**
     * @private
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    function (element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };
    ColorPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'color-picker',
                    template: "<div #dialogPopup class=\"color-picker\" [class.open]=\"show\" [style.display]=\"!show ? 'none' : 'block'\" [style.visibility]=\"hidden ? 'hidden' : 'visible'\" [style.top.px]=\"top\" [style.left.px]=\"left\" [style.position]=\"position\" [style.height.px]=\"cpHeight\" [style.width.px]=\"cpWidth\" (click)=\"$event.stopPropagation()\">\n  <div *ngIf=\"cpDialogDisplay=='popup'\" class=\"arrow arrow-{{cpUsePosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n  <div *ngIf=\"(cpColorMode ||\u00A01) === 1\" class=\"saturation-lightness\" [slider] [rgX]=\"1\" [rgY]=\"1\" [style.background-color]=\"hueSliderColor\" (newValue)=\"onColorChange($event)\" (dragStart)=\"onDragStart('saturation-lightness')\" (dragEnd)=\"onDragEnd('saturation-lightness')\">\n    <div class=\"cursor\" [style.top.px]=\"slider?.v\" [style.left.px]=\"slider?.s\"></div>\n  </div>\n\n  <div class=\"hue-alpha box\">\n    <div class=\"left\">\n      <div class=\"selected-color-background\"></div>\n\n      <div class=\"selected-color\" [style.background-color]=\"selectedColor\"></div>\n\n      <button *ngIf=\"cpAddColorButton\" type=\"button\" class=\"{{cpAddColorButtonClass}}\" [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\" (click)=\"onAddPresetColor($event, selectedColor)\">\n        {{cpAddColorButtonText}}\n      </button>\n    </div>\n\n    <div class=\"right\">\n      <div *ngIf=\"cpAlphaChannel==='disabled'\" style=\"height: 16px;\"></div>\n\n      <div #hueSlider class=\"hue\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\u00A01) === 1 ? 'block' : 'none'\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.h\"></div>\n      </div>\n\n      <div #valueSlider class=\"value\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\u00A01) === 2 ? 'block': 'none'\" (newValue)=\"onValueChange($event)\" (dragStart)=\"onDragStart('value')\" (dragEnd)=\"onDragEnd('value')\">\n        <div class=\"cursor\" [style.right.px]=\"slider?.v\"></div>\n      </div>\n\n      <div #alphaSlider class=\"alpha\" [slider] [rgX]=\"1\" [style.display]=\"cpAlphaChannel === 'disabled' ? 'none' : 'block'\" [style.background-color]=\"alphaSliderColor\" (newValue)=\"onAlphaChange($event)\" (dragStart)=\"onDragStart('alpha')\" (dragEnd)=\"onDragEnd('alpha')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.a\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"cmyk-text\" [style.display]=\"format !== 3 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.c\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onCyanInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.m\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onMagentaInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.y\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onYellowInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.k\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlackInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"cmykText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n     <div class=\"box\">\n      <div>C</div><div>M</div><div>Y</div><div>K</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1 \" class=\"hsla-text\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [text] [rg]=\"360\" [value]=\"hslaText?.h\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHueInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.s\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onSaturationInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onLightnessInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>H</div><div>S</div><div>L</div><div *ngIf=\"cpAlphaChannel!=='disabled'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1 \" [style.display]=\"format !== 1 ? 'none' : 'block'\" class=\"rgba-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onRedInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onGreenInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"rgbaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>R</div><div>G</div><div>B</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"hex-text\" [class.hex-alpha]=\"cpAlphaChannel==='forced'\"\n    [style.display]=\"format !== 0 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input [text] [value]=\"hexText\" (blur)=\"onHexInput(null)\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHexInput($event)\"/>\n      <input *ngIf=\"cpAlphaChannel==='forced'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hexAlpha\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\"/>\n    </div>\n\n    <div class=\"box\">\n      <div>Hex</div>\n      <div *ngIf=\"cpAlphaChannel==='forced'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 2\" class=\"value-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onValueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"  [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>V</div><div>A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"type-policy\">\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(-1)\"></span>\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(1)\"></span>\n  </div>\n\n  <div *ngIf=\"cpPresetColors?.length || cpAddColorButton\" class=\"preset-area\">\n    <hr>\n\n    <div class=\"preset-label\">{{cpPresetLabel}}</div>\n\n    <div *ngIf=\"cpPresetColors?.length\" class=\"{{cpPresetColorsClass}}\">\n      <div *ngFor=\"let color of cpPresetColors\" class=\"preset-color\" [style.backgroundColor]=\"color\" (click)=\"setColorFromString(color)\">\n        <span *ngIf=\"cpAddColorButton\" class=\"{{cpRemoveColorButtonClass}}\" (click)=\"onRemovePresetColor($event, color)\"></span>\n      </div>\n    </div>\n\n    <div *ngIf=\"!cpPresetColors?.length && cpAddColorButton\" class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\n  </div>\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: [".color-picker {\n  position: absolute;\n  z-index: 100000;\n\n  width: 230px;\n  height: auto;\n  border: #777 solid 1px;\n\n  cursor: default;\n\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  user-select: none;\n  background-color: #fff;\n}\n\n.color-picker * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n\n  box-sizing: border-box;\n  margin: 0;\n\n  font-size: 11px;\n}\n\n.color-picker input {\n  width: 0;\n  height: 26px;\n  min-width: 0;\n\n  font-size: 13px;\n  text-align: center;\n  color: #000;\n}\n\n.color-picker input:invalid,\n.color-picker input:-moz-ui-invalid,\n.color-picker input:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n.color-picker input::-webkit-inner-spin-button,\n.color-picker input::-webkit-outer-spin-button {\n  margin: 0;\n\n  -webkit-appearance: none;\n}\n\n.color-picker .arrow {\n  position: absolute;\n  z-index: 999999;\n\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.color-picker .arrow.arrow-top {\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-bottom {\n  top: -20px;\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-top-left,\n.color-picker .arrow.arrow-left-top {\n  right: -21px;\n  bottom: 8px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n}\n\n.color-picker .arrow.arrow-top-right,\n.color-picker .arrow.arrow-right-top {\n  bottom: 8px;\n  left: -20px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-left,\n.color-picker .arrow.arrow-left-bottom,\n.color-picker .arrow.arrow-bottom-left {\n  top: 8px;\n  right: -21px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n}\n\n.color-picker .arrow.arrow-right,\n.color-picker .arrow.arrow-right-bottom,\n.color-picker .arrow.arrow-bottom-right {\n  top: 8px;\n  left: -20px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .cursor {\n  position: relative;\n\n  width: 16px;\n  height: 16px;\n  border: #222 solid 2px;\n  border-radius: 50%;\n\n  cursor: default;\n}\n\n.color-picker .box {\n  display: flex;\n  padding: 4px 8px;\n}\n\n.color-picker .left {\n  position: relative;\n\n  padding: 16px 8px;\n}\n\n.color-picker .right {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  padding: 12px 8px;\n}\n\n.color-picker .button-area {\n  padding: 0 16px 16px;\n\n  text-align: right;\n}\n\n.color-picker .preset-area {\n  padding: 4px 15px;\n}\n\n.color-picker .preset-area .preset-label {\n  overflow: hidden;\n  width: 100%;\n  padding: 4px;\n\n  font-size: 11px;\n  white-space: nowrap;\n  text-align: left;\n  text-overflow: ellipsis;\n  color: #555;\n}\n\n.color-picker .preset-area .preset-color {\n  position: relative;\n\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin: 4px 6px 8px;\n  border: #a9a9a9 solid 1px;\n  border-radius: 25%;\n\n  cursor: pointer;\n}\n\n.color-picker .preset-area .preset-empty-message {\n  min-height: 18px;\n  margin-top: 4px;\n  margin-bottom: 8px;\n\n  font-style: italic;\n  text-align: center;\n}\n\n.color-picker .hex-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .hex-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .hex-text .box div {\n  float: left;\n\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  text-align: center;\n  color: #555;\n  clear: left;\n}\n\n.color-picker .hex-text .box input {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  padding: 1px;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .hex-alpha .box div:first-child,\n.color-picker .hex-alpha .box input:first-child {\n  flex-grow: 3;\n  margin-right: 8px;\n}\n\n.color-picker .cmyk-text,\n.color-picker .hsla-text,\n.color-picker .rgba-text,\n.color-picker .value-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .cmyk-text .box,\n.color-picker .hsla-text .box,\n.color-picker .rgba-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .value-text .box {\n  padding: 0 8px 8px;\n}\n\n.color-picker .cmyk-text .box div,\n.color-picker .hsla-text .box div,\n.color-picker .rgba-text .box div,\n.color-picker .value-text .box div {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  margin-right: 8px;\n\n  text-align: center;\n  color: #555;\n}\n\n.color-picker .cmyk-text .box div:last-child,\n.color-picker .hsla-text .box div:last-child,\n.color-picker .rgba-text .box div:last-child,\n.color-picker .value-text .box div:last-child {\n  margin-right: 0;\n}\n\n.color-picker .cmyk-text .box input,\n.color-picker .hsla-text .box input,\n.color-picker .rgba-text .box input,\n.color-picker .value-text .box input {\n  float: left;\n\n  -webkit-flex: 1;\n  -ms-flex: 1;\n\n  flex: 1;\n  padding: 1px;\n  margin: 0 8px 0 0;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .cmyk-text .box input:last-child,\n.color-picker .hsla-text .box input:last-child,\n.color-picker .rgba-text .box input:last-child,\n.color-picker .value-text .box input:last-child {\n  margin-right: 0;\n}\n\n.color-picker .hue-alpha {\n  align-items: center;\n  margin-bottom: 3px;\n}\n\n.color-picker .hue {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC');\n}\n\n.color-picker .value {\n  direction: rtl;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=');\n}\n\n.color-picker .alpha {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==');\n}\n\n.color-picker .type-policy {\n  position: absolute;\n  top: 218px;\n  right: 12px;\n\n  width: 16px;\n  height: 24px;\n\n  background-size: 8px 16px;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.color-picker .type-policy .type-policy-arrow {\n  display: block;\n\n  width: 100%;\n  height: 50%;\n}\n\n.color-picker .selected-color {\n  position: absolute;\n  top: 16px;\n  left: 8px;\n\n  width: 40px;\n  height: 40px;\n  border: 1px solid #a9a9a9;\n  border-radius: 50%;\n}\n\n.color-picker .selected-color-background {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC');\n}\n\n.color-picker .saturation-lightness {\n  direction: ltr;\n\n  width: 100%;\n  height: 130px;\n  border: none;\n\n  cursor: pointer;\n  touch-action: manipulation;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==');\n}\n\n.color-picker .cp-add-color-button-class {\n  position: absolute;\n\n  display: inline;\n  padding: 0;\n  margin: 3px -3px;\n  border: 0;\n\n  cursor: pointer;\n  background: transparent;\n}\n\n.color-picker .cp-add-color-button-class:hover {\n  text-decoration: underline;\n}\n\n.color-picker .cp-add-color-button-class:disabled {\n  cursor: not-allowed;\n  color: #999;\n}\n\n.color-picker .cp-add-color-button-class:disabled:hover {\n  text-decoration: none;\n}\n\n.color-picker .cp-remove-color-button-class {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n\n  cursor: pointer;\n  text-align: center;\n  background: #fff;\n\n  box-shadow: 1px 1px 5px #333;\n}\n\n.color-picker .cp-remove-color-button-class::before {\n  content: 'x';\n\n  position: relative;\n  bottom: 3.5px;\n\n  display: inline-block;\n\n  font-size: 10px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    ColorPickerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: ColorPickerService }
    ]; };
    ColorPickerComponent.propDecorators = {
        dialogElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dialogPopup', { static: true },] }],
        hueSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['hueSlider', { static: true },] }],
        alphaSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['alphaSlider', { static: true },] }],
        handleEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.esc', ['$event'],] }],
        handleEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.enter', ['$event'],] }]
    };
    return ColorPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerDirective = /** @class */ (function () {
    function ColorPickerDirective(injector, cfr, appRef, vcRef, elRef, _service) {
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.vcRef = vcRef;
        this.elRef = elRef;
        this._service = _service;
        this.dialogCreated = false;
        this.ignoreChanges = false;
        this.cpWidth = '230px';
        this.cpHeight = 'auto';
        this.cpToggle = false;
        this.cpDisabled = false;
        this.cpIgnoredElements = [];
        this.cpFallbackColor = '';
        this.cpColorMode = 'color';
        this.cpCmykEnabled = false;
        this.cpOutputFormat = 'auto';
        this.cpAlphaChannel = 'enabled';
        this.cpDisableInput = false;
        this.cpDialogDisplay = 'popup';
        this.cpSaveClickOutside = true;
        this.cpCloseClickOutside = true;
        this.cpUseRootViewContainer = false;
        this.cpPosition = 'auto';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOKButton = false;
        this.cpOKButtonText = 'OK';
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpCancelButton = false;
        this.cpCancelButtonText = 'Cancel';
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpPresetLabel = 'Preset colors';
        this.cpPresetColorsClass = 'cp-preset-colors-class';
        this.cpMaxPresetColorsLength = 6;
        this.cpPresetEmptyMessage = 'No colors added';
        this.cpPresetEmptyMessageClass = 'preset-empty-message';
        this.cpAddColorButton = false;
        this.cpAddColorButtonText = 'Add color';
        this.cpAddColorButtonClass = 'cp-add-color-button-class';
        this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
        this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.cpCmykColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
    }
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.handleClick = /**
     * @return {?}
     */
    function () {
        this.inputFocus();
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.handleFocus = /**
     * @return {?}
     */
    function () {
        this.inputFocus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputChange(event);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.cmpRef !== undefined) {
            this.cmpRef.destroy();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.cpToggle && !this.cpDisabled) {
            if (changes.cpToggle.currentValue) {
                this.openDialog();
            }
            else if (!changes.cpToggle.currentValue) {
                this.closeDialog();
            }
        }
        if (changes.colorPicker) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.cpDialogDisplay === 'inline') {
                    this.dialog.setInitialColor(changes.colorPicker.currentValue);
                }
                this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
                if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                    this.cmpRef.changeDetectorRef.detectChanges();
                }
            }
            this.ignoreChanges = false;
        }
        if (changes.cpPresetLabel || changes.cpPresetColors) {
            if (this.dialog) {
                this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
            }
        }
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        if (!this.dialogCreated) {
            /** @type {?} */
            var vcRef = this.vcRef;
            this.dialogCreated = true;
            if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                /** @type {?} */
                var classOfRootComponent = this.appRef.componentTypes[0];
                /** @type {?} */
                var appInstance = this.injector.get(classOfRootComponent);
                vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                if (vcRef === this.vcRef) {
                    console.warn('You are using cpUseRootViewContainer, ' +
                        'but the root component is not exposing viewContainerRef!' +
                        'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                }
            }
            /** @type {?} */
            var compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
            /** @type {?} */
            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], vcRef.parentInjector);
            this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
            this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass);
            this.dialog = this.cmpRef.instance;
            if (this.vcRef !== vcRef) {
                this.cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.colorPicker);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        if (this.dialog && this.cpDialogDisplay === 'popup') {
            this.dialog.closeDialog();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.cmykChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.cpCmykColorChange.emit(value);
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ColorPickerDirective.prototype.stateChanged = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.cpToggleChange.emit(state);
        if (state) {
            this.colorPickerOpen.emit(this.colorPicker);
        }
        else {
            this.colorPickerClose.emit(this.colorPicker);
        }
    };
    /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    ColorPickerDirective.prototype.colorChanged = /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    function (value, ignore) {
        if (ignore === void 0) { ignore = true; }
        this.ignoreChanges = ignore;
        this.colorPickerChange.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.colorSelected = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.colorPickerSelect.emit(value);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.colorCanceled = /**
     * @return {?}
     */
    function () {
        this.colorPickerCancel.emit();
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.inputFocus = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elRef.nativeElement;
        /** @type {?} */
        var ignored = this.cpIgnoredElements.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item === element; }));
        if (!this.cpDisabled && !ignored.length) {
            if (typeof document !== 'undefined' && element === document.activeElement) {
                this.openDialog();
            }
            else if (!this.dialog || !this.dialog.show) {
                this.openDialog();
            }
            else {
                this.closeDialog();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.inputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dialog) {
            this.dialog.setColorFromString(event.target.value, true);
        }
        else {
            this.colorPicker = event.target.value;
            this.colorPickerChange.emit(this.colorPicker);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.inputChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpInputChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderDragEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderDragEnd.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderDragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderDragStart.emit(event);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.presetColorsChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.cpPresetColorsChange.emit(value);
    };
    ColorPickerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[colorPicker]',
                    exportAs: 'ngxColorPicker'
                },] }
    ];
    /** @nocollapse */
    ColorPickerDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ColorPickerService }
    ]; };
    ColorPickerDirective.propDecorators = {
        colorPicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpIgnoredElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpFallbackColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpColorMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCmykEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOutputFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAlphaChannel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpDisableInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpDialogDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpSaveClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCloseClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpUseRootViewContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPositionOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPositionRelativeToArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOKButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOKButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOKButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCancelButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCancelButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCancelButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetColors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetColorsClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpMaxPresetColorsLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetEmptyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetEmptyMessageClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAddColorButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAddColorButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAddColorButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpRemoveColorButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpToggleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpSliderChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpSliderDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpSliderDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpCmykColorChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpPresetColorsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
        handleFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
        handleInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }]
    };
    return ColorPickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerModule = /** @class */ (function () {
    function ColorPickerModule() {
    }
    ColorPickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    exports: [ColorPickerDirective],
                    providers: [ColorPickerService],
                    declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
                    entryComponents: [ColorPickerComponent]
                },] }
    ];
    return ColorPickerModule;
}());


//# sourceMappingURL=ngx-color-picker.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-color/alpha/fesm2015/ngx-color-alpha.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-color/alpha/fesm2015/ngx-color-alpha.js ***!
  \******************************************************************/
/*! exports provided: AlphaPickerComponent, ColorAlphaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaPickerComponent", function() { return AlphaPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorAlphaModule", function() { return ColorAlphaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");





let AlphaPickerComponent = class AlphaPickerComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"] {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 316;
        /** Pixel value for picker height */
        this.height = 16;
        this.direction = 'horizontal';
        this.pointer = {
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            transform: 'translate(-9px, -2px)',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        };
    }
    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointer.transform = 'translate(-3px, -9px)';
        }
        this.setState(Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["toState"])(this.color, this.oldHue));
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaPickerComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaPickerComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AlphaPickerComponent.prototype, "direction", void 0);
AlphaPickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-alpha-picker',
        template: `
    <div class="alpha-picker {{ className }}"
      [style.width.px]="width" [style.height.px]="height">
      <color-alpha
        [hsl]="hsl"
        [rgb]="rgb"
        [pointer]="pointer"
        [direction]="direction"
        (onChange)="handlePickerChange($event)"
      ></color-alpha>
    </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .alpha-picker {
      position: relative;
    }
    .color-alpha {
      radius: 2px;
    }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AlphaPickerComponent);
let ColorAlphaModule = class ColorAlphaModule {
};
ColorAlphaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [AlphaPickerComponent],
        exports: [AlphaPickerComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["AlphaModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["CheckboardModule"]],
    })
], ColorAlphaModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-alpha.js.map


/***/ }),

/***/ "./node_modules/ngx-color/block/fesm2015/ngx-color-block.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-color/block/fesm2015/ngx-color-block.js ***!
  \******************************************************************/
/*! exports provided: BlockComponent, ColorBlockModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorBlockModule", function() { return ColorBlockModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BlockSwatchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");





let BlockSwatchesComponent = class BlockSwatchesComponent {
    constructor() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
        this.swatchStyle = {
            width: '22px',
            height: '22px',
            float: 'left',
            marginRight: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
        };
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    focusStyle(c) {
        return {
            boxShadow: `${c} 0 0 4px`,
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], BlockSwatchesComponent.prototype, "colors", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BlockSwatchesComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BlockSwatchesComponent.prototype, "onSwatchHover", void 0);
BlockSwatchesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-block-swatches',
        template: `
    <div class="block-swatches">
      <color-swatch
        *ngFor="let c of colors"
        [color]="c"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
      ></color-swatch>
      <div class="clear"></div>
    </div>
  `,
        styles: [`
    .block-swatches {
      margin-right: -10px;
    }
    .clear {
      clear: both;
    }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BlockSwatchesComponent);

let BlockComponent = class BlockComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"] {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 170;
        /** Color squares to display */
        this.colors = [
            '#D9E3F0',
            '#F47373',
            '#697689',
            '#37D67A',
            '#2CCCE4',
            '#555555',
            '#dce775',
            '#ff8a65',
            '#ba68c8',
        ];
        this.triangle = 'top';
        this.input = {
            width: '100%',
            fontSize: '12px',
            color: '#666',
            border: '0px',
            outline: 'none',
            height: '22px',
            boxShadow: 'inset 0 0 0 1px #ddd',
            borderRadius: '4px',
            padding: '0 7px',
            boxSizing: 'border-box',
        };
        this.wrap = {
            position: 'relative',
            width: '100%',
        };
    }
    handleValueChange({ data, $event }) {
        this.handleBlockChange({ hex: data, $event });
    }
    getContrastingColor(hex) {
        return Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["getContrastingColor"])(hex);
    }
    handleBlockChange({ hex, $event }) {
        if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(hex)) {
            // this.hex = hex;
            this.handleChange({
                hex,
                source: 'hex',
            }, $event);
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BlockComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BlockComponent.prototype, "colors", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], BlockComponent.prototype, "triangle", void 0);
BlockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-block',
        template: `
  <div class="block-card block-picker {{ className }}">
    <div class="block-triangle" *ngIf="triangle !== 'hide'"
      [style.border-color]="'transparent transparent ' + this.hex + ' transparent'"
    ></div>

    <div class="block-head" [style.background]="hex">
      <color-checkboard *ngIf="hex === 'transparent'"
        borderRadius="6px 6px 0 0"
      ></color-checkboard>
      <div class="block-label" [style.color]="getContrastingColor(hex)">
        {{ hex }}
      </div>
    </div>

    <div class="block-body">
      <color-block-swatches [colors]="colors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-block-swatches>
      <color-editable-input [value]="hex"
        (onChange)="handleValueChange($event)"
        [style]="{input: input, wrap: wrap}"
      ></color-editable-input>
    </div>
  </div>
  `,
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [`
    .block-card {
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 1px rgba(0, 0, 0, .1);
      position: relative;
    }
    .block-head {
      align-items: center;
      border-radius: 6px 6px 0 0;
      display: flex;
      height: 110px;
      justify-content: center;
      position: relative;
    }
    .block-body {
      padding: 10px;
    }
    .block-label {
      font-size: 18px;
      position: relative;
    }
    .block-triangle {
      border-style: solid;
      border-width: 0 10px 10px 10px;
      height: 0;
      left: 50%;
      margin-left: -10px;
      position: absolute;
      top: -10px;
      width: 0;
    }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BlockComponent);
let ColorBlockModule = class ColorBlockModule {
};
ColorBlockModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [BlockComponent, BlockSwatchesComponent],
        exports: [BlockComponent, BlockSwatchesComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["CheckboardModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"]],
    })
], ColorBlockModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-block.js.map


/***/ }),

/***/ "./node_modules/ngx-color/chrome/fesm2015/ngx-color-chrome.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-color/chrome/fesm2015/ngx-color-chrome.js ***!
  \********************************************************************/
/*! exports provided: ChromeComponent, ColorChromeModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeComponent", function() { return ChromeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorChromeModule", function() { return ColorChromeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ChromeFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");





let ChromeFieldsComponent = class ChromeFieldsComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.view = '';
        this.input = {
            fontSize: '11px',
            color: '#333',
            width: '100%',
            borderRadius: '2px',
            border: 'none',
            boxShadow: 'inset 0 0 0 1px #dadada',
            height: '21px',
            'text-align': 'center',
        };
        this.label = {
            'text-transform': 'uppercase',
            fontSize: '11px',
            'line-height': '11px',
            color: '#969696',
            'text-align': 'center',
            display: 'block',
            marginTop: '12px',
        };
    }
    ngOnInit() {
        if (this.hsl.a === 1 && this.view !== 'hex') {
            this.view = 'hex';
        }
        else if (this.view !== 'rgb' && this.view !== 'hsl') {
            this.view = 'rgb';
        }
    }
    toggleViews() {
        if (this.view === 'hex') {
            this.view = 'rgb';
        }
        else if (this.view === 'rgb') {
            this.view = 'hsl';
        }
        else if (this.view === 'hsl') {
            if (this.hsl.a === 1) {
                this.view = 'hex';
            }
            else {
                this.view = 'rgb';
            }
        }
    }
    round(value) {
        return Math.round(value);
    }
    handleChange({ data, $event }) {
        if (data.hex) {
            if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(data.hex)) {
                this.onChange.emit({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else if (data.r || data.g || data.b) {
            this.onChange.emit({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.a) {
            if (data.a < 0) {
                data.a = 0;
            }
            else if (data.a > 1) {
                data.a = 1;
            }
            this.onChange.emit({
                data: {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: Math.round(data.a * 100) / 100,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.h || data.s || data.l) {
            const s = data.s && data.s.replace('%', '');
            const l = data.l && data.l.replace('%', '');
            this.onChange.emit({
                data: {
                    h: data.h || this.hsl.h,
                    s: Number(s || this.hsl.s),
                    l: Number(l || this.hsl.l),
                    source: 'hsl',
                },
                $event,
            });
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ChromeFieldsComponent.prototype, "disableAlpha", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ChromeFieldsComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ChromeFieldsComponent.prototype, "rgb", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ChromeFieldsComponent.prototype, "hex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ChromeFieldsComponent.prototype, "onChange", void 0);
ChromeFieldsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-chrome-fields',
        template: `
    <div class="chrome-wrap">
      <div class="chrome-fields">
        <ng-template [ngIf]="view === 'hex'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="hex" [value]="hex"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
        <ng-template [ngIf]="view === 'rgb'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="r" [value]="rgb.r"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="g" [value]="rgb.g"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="b" [value]="rgb.b"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input *ngIf="!disableAlpha"
              [style]="{ input: input, label: label }"
              label="a" [value]="rgb.a"
              [arrowOffset]="0.01"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
        <ng-template [ngIf]="view === 'hsl'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="h"
              [value]="round(hsl.h)"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="s" [value]="round(hsl.s * 100) + '%'"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="l" [value]="round(hsl.l * 100) + '%'"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input *ngIf="!disableAlpha"
              [style]="{ input: input, label: label }"
              label="a" [value]="hsl.a"
              [arrowOffset]="0.01"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
      </div>

      <div class="chrome-toggle">
        <div class="chrome-icon" (click)="toggleViews()" #icon>
          <svg class="chrome-toggle-svg" viewBox="0 0 24 24">
            <path #iconUp fill="#333"
              d="M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
            />
            <path #iconDown fill="#333"
              d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z"
            />
          </svg>
        </div>
      </div>
    </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
      .chrome-wrap {
        padding-top: 16px;
        display: flex;
      }
      .chrome-fields {
        flex: 1;
        display: flex;
        margin-left: -6px;
      }
      .chrome-field {
        padding-left: 6px;
        width: 100%;
      }
      .chrome-toggle {
        width: 32px;
        text-align: right;
        position: relative;
      }
      .chrome-icon {
        margin-right: -4px;
        margin-top: 12px;
        cursor: pointer;
        position: relative;
      }
      .chrome-toggle-svg {
        width: 24px;
        height: 24px;
        border: 1px transparent solid;
        border-radius: 5px;
      }
      .chrome-toggle-svg:hover {
        background: #eee;
      }
    `]
    })
], ChromeFieldsComponent);

let ChromeComponent = class ChromeComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"] {
    constructor() {
        super();
        /** Remove alpha slider and options from picker */
        this.disableAlpha = false;
        this.circle = {
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1px inset',
            transform: 'translate(-6px, -8px)',
        };
        this.pointer = {
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            transform: 'translate(-6px, -2px)',
            backgroundColor: 'rgb(248, 248, 248)',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        };
    }
    afterValidChange() {
        this.activeBackground = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${this.rgb.a})`;
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ChromeComponent.prototype, "disableAlpha", void 0);
ChromeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-chrome',
        template: `
  <div class="chrome-picker {{ className }}">
    <div class="saturation">
      <color-saturation
        [hsl]="hsl"
        [hsv]="hsv"
        [circle]="circle"
        (onChange)="handleValueChange($event)"
      ></color-saturation>
    </div>
    <div class="chrome-body">
      <div class="chrome-controls">
        <div class="chrome-color">
          <div class="chrome-swatch">
            <div class="chrome-active"
              [style.background]="activeBackground"
            ></div>
            <color-checkboard></color-checkboard>
          </div>
        </div>
        <div class="chrome-toggles">
          <div class="chrome-hue">
            <color-hue
              [radius]="2"
              [hsl]="hsl"
              [pointer]="pointer"
              (onChange)="handleValueChange($event)"
            ></color-hue>
          </div>
          <div class="chrome-alpha" *ngIf="!disableAlpha">
            <color-alpha
              [radius]="2" [rgb]="rgb" [hsl]="hsl"
              [pointer]="pointer" (onChange)="handleValueChange($event)"
            ></color-alpha>
          </div>
        </div>
      </div>
      <color-chrome-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-chrome-fields>
    </div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
      .chrome-picker {
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3);
        box-sizing: initial;
        width: 225px;
        font-family: 'Menlo';
      }
      .chrome-controls {
        display: flex;
      }
      .chrome-color {
        width: 42px;
      }
      .chrome-body {
        padding: 14px 14px 12px;
      }
      .chrome-active {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 20px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
        z-index: 2;
      }
      .chrome-swatch {
        width: 28px;
        height: 28px;
        border-radius: 15px;
        position: relative;
        overflow: hidden;
      }
      .saturation {
        width: 100%;
        padding-bottom: 55%;
        position: relative;
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }
      .chrome-toggles {
        flex: 1;
      }
      .chrome-hue {
        height: 10px;
        position: relative;
        margin-bottom: 8px;
      }
      .chrome-alpha {
        height: 10px;
        position: relative;
      }
    `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ChromeComponent);
let ColorChromeModule = class ColorChromeModule {
};
ColorChromeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [ChromeComponent, ChromeFieldsComponent],
        exports: [ChromeComponent, ChromeFieldsComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["AlphaModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["CheckboardModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["SaturationModule"],
        ],
    })
], ColorChromeModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-chrome.js.map


/***/ }),

/***/ "./node_modules/ngx-color/circle/fesm2015/ngx-color-circle.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-color/circle/fesm2015/ngx-color-circle.js ***!
  \********************************************************************/
/*! exports provided: CircleComponent, ColorCircleModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleComponent", function() { return CircleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorCircleModule", function() { return ColorCircleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CircleSwatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var material_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-colors */ "./node_modules/material-colors/dist/colors.es2015.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");






let CircleSwatchComponent = class CircleSwatchComponent {
    constructor() {
        this.circleSize = 28;
        this.circleSpacing = 14;
        this.focus = false;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.focusStyle = {};
        this.swatchStyle = {
            borderRadius: '50%',
            background: 'transparent',
            transition: '100ms box-shadow ease 0s',
        };
    }
    ngOnChanges() {
        this.swatchStyle.boxShadow = `inset 0 0 0 ${this.circleSize / 2}px ${this.color}`;
        this.focusStyle.boxShadow = `inset 0 0 0 ${this.circleSize / 2}px ${this.color}, 0 0 5px ${this.color}`;
        if (this.focus) {
            this.focusStyle.boxShadow = `inset 0 0 0 3px ${this.color}, 0 0 5px ${this.color}`;
        }
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleSwatchComponent.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleSwatchComponent.prototype, "circleSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleSwatchComponent.prototype, "circleSpacing", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleSwatchComponent.prototype, "focus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleSwatchComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleSwatchComponent.prototype, "onSwatchHover", void 0);
CircleSwatchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-circle-swatch',
        template: `
  <div class="circle-swatch"
    [style.width.px]="circleSize" [style.height.px]="circleSize"
    [style.margin-right.px]="circleSpacing" [style.margin-bottom.px]="circleSpacing"
    >
    <color-swatch
      [color]="color" [style]="swatchStyle" [focus]="focus" [focusStyle]="focusStyle"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)">
    </color-swatch>
    <div class="clear"></div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
  .circle-swatch {
    transform: scale(1);
    transition: transform 100ms ease;
  }
  .circle-swatch:hover {
    transform: scale(1.2);
  }
  `]
    })
], CircleSwatchComponent);

let CircleComponent = class CircleComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_4__["ColorWrap"] {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 252;
        /** Color squares to display */
        this.colors = [
            material_colors__WEBPACK_IMPORTED_MODULE_3__["red"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["pink"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["purple"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["deepPurple"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["indigo"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["blue"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["lightBlue"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["cyan"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["teal"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["green"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["lightGreen"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["lime"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["yellow"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["amber"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["orange"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["deepOrange"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["brown"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["blueGrey"]['500'],
        ];
        /** Value for circle size */
        this.circleSize = 28;
        /** Value for spacing between circles */
        this.circleSpacing = 14;
    }
    isActive(color) {
        return this.hex === color;
    }
    handleBlockChange({ hex, $event }) {
        if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_4__["isValidHex"])(hex)) {
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], CircleComponent.prototype, "colors", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleComponent.prototype, "circleSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleComponent.prototype, "circleSpacing", void 0);
CircleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-circle',
        template: `
    <div
      class="circle-picker {{ className }}"
      [style.width.px]="width"
      [style.margin-right.px]="-circleSpacing"
      [style.margin-bottom.px]="-circleSpacing"
    >
      <color-circle-swatch
        *ngFor="let color of colors"
        [circleSize]="circleSize"
        [circleSpacing]="circleSpacing"
        [color]="color"
        [focus]="isActive(color)"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-circle-swatch>
    </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
      .circle-picker {
        display: flex;
        flex-wrap: wrap;
      }
    `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CircleComponent);
let ColorCircleModule = class ColorCircleModule {
};
ColorCircleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [CircleComponent, CircleSwatchComponent],
        exports: [CircleComponent, CircleSwatchComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_4__["SwatchModule"]],
    })
], ColorCircleModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-circle.js.map


/***/ }),

/***/ "./node_modules/ngx-color/compact/fesm2015/ngx-color-compact.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-color/compact/fesm2015/ngx-color-compact.js ***!
  \**********************************************************************/
/*! exports provided: ColorCompactModule, CompactComponent, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorCompactModule", function() { return ColorCompactModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompactComponent", function() { return CompactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CompactColorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CompactFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");





let CompactColorComponent = class CompactColorComponent {
    constructor() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.swatchStyle = {
            width: '15px',
            height: '15px',
            float: 'left',
            marginRight: '5px',
            marginBottom: '5px',
            position: 'relative',
            cursor: 'pointer',
        };
        this.swatchFocus = {};
        this.getContrastingColor = ngx_color__WEBPACK_IMPORTED_MODULE_3__["getContrastingColor"];
    }
    ngOnChanges() {
        this.swatchStyle.background = this.color;
        this.swatchFocus.boxShadow = `0 0 4px ${this.color}`;
        if (this.color.toLowerCase() === '#ffffff') {
            this.swatchStyle.boxShadow = 'inset 0 0 0 1px #ddd';
        }
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CompactColorComponent.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CompactColorComponent.prototype, "active", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CompactColorComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CompactColorComponent.prototype, "onSwatchHover", void 0);
CompactColorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-compact-color',
        template: `
  <div class="compact-color">
    <color-swatch class="swatch"
      [color]="color" [style]="swatchStyle"
      [focusStyle]="swatchFocus"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)"
      >
      <div class="compact-dot"
        [class.active]="active" [style.background]="getContrastingColor(color)"
      ></div>
    </color-swatch>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
  .compact-dot {
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    border-radius: 50%;
    opacity: 0;
  }
  .compact-dot.active {
    opacity: 1;
  }
  `]
    })
], CompactColorComponent);

let CompactFieldsComponent = class CompactFieldsComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.HEXWrap = {
            marginTop: '-3px',
            marginBottom: '-3px',
            // flex: '6 1 0%',
            position: 'relative',
        };
        this.HEXinput = {
            width: '80%',
            padding: '0px',
            paddingLeft: '20%',
            border: 'none',
            outline: 'none',
            background: 'none',
            fontSize: '12px',
            color: '#333',
            height: '16px',
        };
        this.HEXlabel = {
            display: 'none',
        };
        this.RGBwrap = {
            marginTop: '-3px',
            marginBottom: '-3px',
            // flex: '3 1 0%',
            position: 'relative',
        };
        this.RGBinput = {
            width: '80%',
            padding: '0px',
            paddingLeft: '30%',
            border: 'none',
            outline: 'none',
            background: 'none',
            fontSize: '12px',
            color: '#333',
            height: '16px',
        };
        this.RGBlabel = {
            position: 'absolute',
            top: '6px',
            left: '0px',
            'line-height': '16px',
            'text-transform': 'uppercase',
            fontSize: '12px',
            color: '#999',
        };
    }
    handleChange({ data, $event }) {
        if (data.hex) {
            if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(data.hex)) {
                this.onChange.emit({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else {
            this.onChange.emit({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event,
            });
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CompactFieldsComponent.prototype, "hex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CompactFieldsComponent.prototype, "rgb", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CompactFieldsComponent.prototype, "onChange", void 0);
CompactFieldsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-compact-fields',
        template: `
  <div class="compact-fields">
    <div class="compact-active" [style.background]="hex"></div>
    <color-editable-input
      style="flex: 6 1 0%;"
      [style]="{ wrap: HEXWrap, input: HEXinput, label: HEXlabel }"
      label="hex"
      [value]="hex"
      (onChange)="handleChange($event)"
    ></color-editable-input>
    <color-editable-input
      style="flex: 3 1 0%"
      [style]="{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }"
      label="r"
      [value]="rgb.r"
      (onChange)="handleChange($event)"
    ></color-editable-input>
    <color-editable-input
      style="flex: 3 1 0%"
      [style]="{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }"
      label="g"
      [value]="rgb.g"
      (onChange)="handleChange($event)"
    ></color-editable-input>
    <color-editable-input
      style="flex: 3 1 0%"
      [style]="{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }"
      label="b"
      [value]="rgb.b"
      (onChange)="handleChange($event)"
    ></color-editable-input>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
  .compact-fields {
    display: flex;
    padding-bottom: 6px;
    padding-right: 5px;
    position: relative;
  }
  .compact-active {
    position: absolute;
    top: 6px;
    left: 5px;
    height: 9px;
    width: 9px;
  }
  `]
    })
], CompactFieldsComponent);

let CompactComponent = class CompactComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"] {
    constructor() {
        super();
        /** Color squares to display */
        this.colors = [
            '#4D4D4D',
            '#999999',
            '#FFFFFF',
            '#F44E3B',
            '#FE9200',
            '#FCDC00',
            '#DBDF00',
            '#A4DD00',
            '#68CCCA',
            '#73D8FF',
            '#AEA1FF',
            '#FDA1FF',
            '#333333',
            '#808080',
            '#cccccc',
            '#D33115',
            '#E27300',
            '#FCC400',
            '#B0BC00',
            '#68BC00',
            '#16A5A5',
            '#009CE0',
            '#7B64FF',
            '#FA28FF',
            '#000000',
            '#666666',
            '#B3B3B3',
            '#9F0500',
            '#C45100',
            '#FB9E00',
            '#808900',
            '#194D33',
            '#0C797D',
            '#0062B1',
            '#653294',
            '#AB149E',
        ];
    }
    handleBlockChange({ hex, $event }) {
        if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(hex)) {
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CompactComponent.prototype, "colors", void 0);
CompactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-compact',
        template: `
  <color-raised class="color-compact">
    <div class="compact-picker {{ className }}">
      <div>
        <color-compact-color
          *ngFor="let color of colors" [color]="color"
          [active]="color.toLowerCase() === hex.toLowerCase()"
          (onClick)="handleBlockChange($event)"
        ></color-compact-color>
        <div class="compact-clear"></div>
      </div>
      <color-compact-fields
        [hex]="hex"
        [rgb]="rgb"
        (onChange)="handleValueChange($event)"
      ></color-compact-fields>
    </div>
  </color-raised>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .color-compact {
      background: #f6f6f6;
      radius: 4px;
    }
    .compact-picker {
      padding-top: 5px;
      padding-left: 5px;
      box-sizing: border-box;
      width: 245px;
    }
    .compact-clear {
      clear: both;
    }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CompactComponent);
let ColorCompactModule = class ColorCompactModule {
};
ColorCompactModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            CompactComponent,
            CompactColorComponent,
            CompactFieldsComponent,
        ],
        exports: [CompactComponent, CompactColorComponent, CompactFieldsComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["RaisedModule"]],
    })
], ColorCompactModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-compact.js.map


/***/ }),

/***/ "./node_modules/ngx-color/fesm2015/ngx-color.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-color/fesm2015/ngx-color.js ***!
  \******************************************************/
/*! exports provided: AlphaComponent, AlphaModule, CheckboardComponent, CheckboardModule, ColorWrap, ColorWrapModule, CoordinatesDirective, CoordinatesModule, EditableInputComponent, EditableInputModule, HueComponent, HueModule, RaisedComponent, RaisedModule, SaturationComponent, SaturationModule, ShadeComponent, ShadeModule, SwatchComponent, SwatchModule, getCheckerboard, getContrastingColor, isValidHex, render, simpleCheckForValidColor, toState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaComponent", function() { return AlphaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaModule", function() { return AlphaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboardComponent", function() { return CheckboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboardModule", function() { return CheckboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorWrap", function() { return ColorWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorWrapModule", function() { return ColorWrapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinatesDirective", function() { return CoordinatesDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinatesModule", function() { return CoordinatesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableInputComponent", function() { return EditableInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableInputModule", function() { return EditableInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HueComponent", function() { return HueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HueModule", function() { return HueModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaisedComponent", function() { return RaisedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaisedModule", function() { return RaisedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturationComponent", function() { return SaturationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturationModule", function() { return SaturationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeComponent", function() { return ShadeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeModule", function() { return ShadeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchComponent", function() { return SwatchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchModule", function() { return SwatchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckerboard", function() { return getCheckerboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrastingColor", function() { return getContrastingColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidHex", function() { return isValidHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleCheckForValidColor", function() { return simpleCheckForValidColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toState", function() { return toState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/es/public_api.js");







const checkboardCache = {};
function render(c1, c2, size) {
    if (typeof document === 'undefined') {
        return null;
    }
    const canvas = document.createElement('canvas');
    canvas.width = size * 2;
    canvas.height = size * 2;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        return null;
    } // If no context can be found, return early.
    ctx.fillStyle = c1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = c2;
    ctx.fillRect(0, 0, size, size);
    ctx.translate(size, size);
    ctx.fillRect(0, 0, size, size);
    return canvas.toDataURL();
}
function getCheckerboard(c1, c2, size) {
    const key = `${c1}-${c2}-${size}`;
    if (checkboardCache[key]) {
        return checkboardCache[key];
    }
    const checkboard = render(c1, c2, size);
    if (!checkboard) {
        return null;
    }
    checkboardCache[key] = checkboard;
    return checkboard;
}

let CheckboardComponent = class CheckboardComponent {
    constructor() {
        this.white = 'transparent';
        this.size = 8;
        this.grey = 'rgba(0,0,0,.08)';
    }
    ngOnInit() {
        const background = getCheckerboard(this.white, this.grey, this.size);
        this.gridStyles = {
            borderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            background: `url(${background}) center left`,
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CheckboardComponent.prototype, "white", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CheckboardComponent.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CheckboardComponent.prototype, "grey", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CheckboardComponent.prototype, "boxShadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CheckboardComponent.prototype, "borderRadius", void 0);
CheckboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-checkboard',
        template: `<div class="grid" [ngStyle]="gridStyles"></div>`,
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [`
  .grid {
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    position: absolute;
  }
  `]
    })
], CheckboardComponent);
let CheckboardModule = class CheckboardModule {
};
CheckboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [CheckboardComponent],
        exports: [CheckboardComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
    })
], CheckboardModule);

let CoordinatesDirective = class CoordinatesDirective {
    constructor(el) {
        this.el = el;
        this.coordinatesChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mousechange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mouseListening = false;
    }
    mousemove($event, x, y, isTouch = false) {
        if (this.mouseListening) {
            $event.preventDefault();
            this.mousechange.next({ $event, x, y, isTouch });
        }
    }
    mouseup() {
        this.mouseListening = false;
    }
    mousedown($event, x, y, isTouch = false) {
        $event.preventDefault();
        this.mouseListening = true;
        this.mousechange.next({ $event, x, y, isTouch });
    }
    ngOnInit() {
        this.sub = this.mousechange
            .pipe(
        // limit times it is updated for the same area
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])((p, q) => p.x === q.x && p.y === q.y))
            .subscribe(n => this.handleChange(n.x, n.y, n.$event, n.isTouch));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    handleChange(x, y, $event, isTouch) {
        const containerWidth = this.el.nativeElement.clientWidth;
        const containerHeight = this.el.nativeElement.clientHeight;
        const left = x -
            (this.el.nativeElement.getBoundingClientRect().left + window.pageXOffset);
        let top = y - this.el.nativeElement.getBoundingClientRect().top;
        if (!isTouch) {
            top = top - window.pageYOffset;
        }
        this.coordinatesChange.next({
            x,
            y,
            top,
            left,
            containerWidth,
            containerHeight,
            $event,
        });
    }
};
CoordinatesDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CoordinatesDirective.prototype, "coordinatesChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:mousemove', ['$event', '$event.pageX', '$event.pageY']),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:touchmove', [
        '$event',
        '$event.touches[0].clientX',
        '$event.touches[0].clientY',
        'true',
    ]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event, Number, Number, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], CoordinatesDirective.prototype, "mousemove", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:mouseup'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:touchend'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], CoordinatesDirective.prototype, "mouseup", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('mousedown', ['$event', '$event.pageX', '$event.pageY']),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('touchstart', [
        '$event',
        '$event.touches[0].clientX',
        '$event.touches[0].clientY',
        'true',
    ]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event, Number, Number, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], CoordinatesDirective.prototype, "mousedown", null);
CoordinatesDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({ selector: '[ngx-color-coordinates]' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
], CoordinatesDirective);
let CoordinatesModule = class CoordinatesModule {
};
CoordinatesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [CoordinatesDirective],
        exports: [CoordinatesDirective],
    })
], CoordinatesModule);

let AlphaComponent = class AlphaComponent {
    constructor() {
        this.direction = 'horizontal';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointerLeft = 0;
            this.pointerTop = this.rgb.a * 100;
            this.gradient = {
                background: `linear-gradient(to bottom, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
        }
        else {
            this.gradient = {
                background: `linear-gradient(to right, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
            this.pointerLeft = this.rgb.a * 100;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let a;
            if (top < 0) {
                a = 0;
            }
            else if (top > containerHeight) {
                a = 1;
            }
            else {
                a = Math.round(top * 100 / containerHeight) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
                    source: 'rgb',
                };
            }
        }
        else {
            let a;
            if (left < 0) {
                a = 0;
            }
            else if (left > containerWidth) {
                a = 1;
            }
            else {
                a = Math.round(left * 100 / containerWidth) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaComponent.prototype, "rgb", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AlphaComponent.prototype, "shadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AlphaComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AlphaComponent.prototype, "direction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaComponent.prototype, "onChange", void 0);
AlphaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-alpha',
        template: `
  <div class="alpha" [style.border-radius]="radius">
    <div class="alpha-checkboard">
      <color-checkboard></color-checkboard>
    </div>
    <div class="alpha-gradient" [ngStyle]="gradient" [style.box-shadow]="shadow" [style.border-radius]="radius"></div>
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="alpha-container color-alpha-{{direction}}">
      <div class="alpha-pointer" [style.left.%]="pointerLeft" [style.top.%]="pointerTop">
        <div class="alpha-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .alpha {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .alpha-checkboard {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }
    .alpha-gradient {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .alpha-container {
      position: relative;
      height: 100%;
      margin: 0 3px;
    }
    .alpha-pointer {
      position: absolute;
    }
    .alpha-slider {
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      margin-top: 1px;
      transform: translateX(-2px);
    },
  `]
    })
], AlphaComponent);
let AlphaModule = class AlphaModule {
};
AlphaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [AlphaComponent],
        exports: [AlphaComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule, CoordinatesModule],
    })
], AlphaModule);

function simpleCheckForValidColor(data) {
    const keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
    let checked = 0;
    let passed = 0;
    keysToCheck.forEach(letter => {
        if (!data[letter]) {
            return;
        }
        checked += 1;
        if (!isNaN(data[letter])) {
            passed += 1;
        }
        if (letter === 's' || letter === 'l') {
            const percentPatt = /^\d+%$/;
            if (percentPatt.test(data[letter])) {
                passed += 1;
            }
        }
    });
    return checked === passed ? data : false;
}
function toState(data, oldHue) {
    const color = data.hex ? new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](data.hex) : new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](data);
    const hsl = color.toHsl();
    const hsv = color.toHsv();
    const rgb = color.toRgb();
    const hex = color.toHex();
    if (hsl.s === 0) {
        hsl.h = oldHue || 0;
        hsv.h = oldHue || 0;
    }
    const transparent = hex === '000000' && rgb.a === 0;
    return {
        hsl,
        hex: transparent ? 'transparent' : `#${hex}`,
        rgb,
        hsv,
        oldHue: data.h || oldHue || hsl.h,
        source: data.source,
    };
}
function isValidHex(hex) {
    return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](hex).isValid;
}
function getContrastingColor(data) {
    if (!data) {
        return '#fff';
    }
    const col = toState(data);
    if (col.hex === 'transparent') {
        return 'rgba(0,0,0,0.4)';
    }
    const yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
    return yiq >= 128 ? '#000' : '#fff';
}

let ColorWrap = class ColorWrap {
    constructor() {
        this.className = '';
        this.color = {
            h: 250,
            s: 0.5,
            l: 0.2,
            a: 1,
        };
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onChangeComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
        this.changes = this.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100))
            .subscribe(x => this.onChangeComplete.emit(x));
        this.setState(toState(this.color, 0));
        this.currentColor = this.hex;
    }
    ngOnChanges() {
        this.setState(toState(this.color, this.oldHue));
    }
    ngOnDestroy() {
        this.changes.unsubscribe();
    }
    setState(data) {
        this.oldHue = data.oldHue;
        this.hsl = data.hsl;
        this.hsv = data.hsv;
        this.rgb = data.rgb;
        this.hex = data.hex;
        this.source = data.source;
        this.afterValidChange();
    }
    handleChange(data, $event) {
        const isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            const color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onChange.emit({ color, $event });
            this.afterValidChange();
        }
    }
    /** hook for components after a complete change */
    afterValidChange() { }
    handleSwatchHover(data, $event) {
        const isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            const color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onSwatchHover.emit({ color, $event });
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "className", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "onChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "onChangeComplete", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "onSwatchHover", void 0);
ColorWrap = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        // create seletor base for test override property
        selector: 'color-wrap',
        template: ``
    })
], ColorWrap);
let ColorWrapModule = class ColorWrapModule {
};
ColorWrapModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [ColorWrap],
        exports: [ColorWrap],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
    })
], ColorWrapModule);

let EditableInputComponent = class EditableInputComponent {
    constructor() {
        this.placeholder = '';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.focus = false;
    }
    ngOnInit() {
        this.wrapStyle = this.style && this.style.wrap ? this.style.wrap : {};
        this.inputStyle = this.style && this.style.input ? this.style.input : {};
        this.labelStyle = this.style && this.style.label ? this.style.label : {};
        if (this.dragLabel) {
            this.labelStyle.cursor = 'ew-resize';
        }
    }
    handleFocus($event) {
        this.focus = true;
    }
    handleFocusOut($event) {
        this.focus = false;
        this.currentValue = this.blurValue;
    }
    handleKeydown($event) {
        // In case `e.target.value` is a percentage remove the `%` character
        // and update accordingly with a percentage
        // https://github.com/casesandberg/react-color/issues/383
        const stringValue = String($event.target.value);
        const isPercentage = stringValue.indexOf('%') > -1;
        const num = Number(stringValue.replace(/%/g, ''));
        if (!isNaN(num)) {
            const amount = this.arrowOffset || 1;
            // Up
            if ($event.keyCode === 38) {
                if (this.label) {
                    this.onChange.emit({
                        data: { [this.label]: num + amount },
                        $event,
                    });
                }
                else {
                    this.onChange.emit({ data: num + amount, $event });
                }
                if (isPercentage) {
                    this.currentValue = `${num + amount}%`;
                }
                else {
                    this.currentValue = num + amount;
                }
            }
            // Down
            if ($event.keyCode === 40) {
                if (this.label) {
                    this.onChange.emit({
                        data: { [this.label]: num - amount },
                        $event,
                    });
                }
                else {
                    this.onChange.emit({ data: num - amount, $event });
                }
                if (isPercentage) {
                    this.currentValue = `${num - amount}%`;
                }
                else {
                    this.currentValue = num - amount;
                }
            }
        }
    }
    handleKeyup($event) {
        if ($event.keyCode === 40 || $event.keyCode === 38) {
            return;
        }
        if (this.label) {
            this.onChange.emit({
                data: { [this.label]: $event.target.value },
                $event,
            });
        }
        else {
            this.onChange.emit({ data: $event.target.value, $event });
        }
    }
    ngOnChanges() {
        if (!this.focus) {
            this.currentValue = String(this.value).toUpperCase();
            this.blurValue = String(this.value).toUpperCase();
        }
        else {
            this.blurValue = String(this.value).toUpperCase();
        }
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    subscribe() {
        this.mousemove = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').subscribe((ev) => this.handleDrag(ev));
        this.mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup').subscribe(() => this.unsubscribe());
    }
    unsubscribe() {
        if (this.mousemove) {
            this.mousemove.unsubscribe();
        }
        if (this.mouseup) {
            this.mouseup.unsubscribe();
        }
    }
    handleMousedown($event) {
        if (this.dragLabel) {
            $event.preventDefault();
            this.handleDrag($event);
            this.subscribe();
        }
    }
    handleDrag($event) {
        if (this.dragLabel) {
            const newValue = Math.round(this.value + $event.movementX);
            if (newValue >= 0 && newValue <= this.dragMax) {
                this.onChange.emit({ data: { [this.label]: newValue }, $event });
            }
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditableInputComponent.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], EditableInputComponent.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditableInputComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], EditableInputComponent.prototype, "arrowOffset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], EditableInputComponent.prototype, "dragLabel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], EditableInputComponent.prototype, "dragMax", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditableInputComponent.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditableInputComponent.prototype, "onChange", void 0);
EditableInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-editable-input',
        template: `
  <div class="wrap" [ngStyle]="wrapStyle">
    <input [ngStyle]="inputStyle" spellCheck="false"
      [value]="currentValue" [placeholder]="placeholder"
      (keydown)="handleKeydown($event)" (keyup)="handleKeyup($event)"
      (focus)="handleFocus($event)" (focusout)="handleFocusOut($event)" />
    <span *ngIf="label" [ngStyle]="labelStyle" (mousedown)="handleMousedown($event)">
      {{ label }}
    </span>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [`
    :host {
      display: flex;
    }
    .wrap {
      position: relative;
    }
  `]
    })
], EditableInputComponent);
let EditableInputModule = class EditableInputModule {
};
EditableInputModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [EditableInputComponent],
        exports: [EditableInputComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
    })
], EditableInputModule);

let HueComponent = class HueComponent {
    constructor() {
        this.hidePointer = false;
        this.direction = 'horizontal';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.left = '0px';
        this.top = '';
    }
    ngOnChanges() {
        if (this.direction === 'horizontal') {
            this.left = `${this.hsl.h * 100 / 360}%`;
        }
        else {
            this.top = `${-(this.hsl.h * 100 / 360) + 100}%`;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let h;
            if (top < 0) {
                h = 359;
            }
            else if (top > containerHeight) {
                h = 0;
            }
            else {
                const percent = -(top * 100 / containerHeight) + 100;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        else {
            let h;
            if (left < 0) {
                h = 0;
            }
            else if (left > containerWidth) {
                h = 359;
            }
            else {
                const percent = left * 100 / containerWidth;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HueComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HueComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], HueComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], HueComponent.prototype, "shadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HueComponent.prototype, "hidePointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], HueComponent.prototype, "direction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HueComponent.prototype, "onChange", void 0);
HueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-hue',
        template: `
  <div class="color-hue color-hue-{{direction}}" [style.border-radius.px]="radius" [style.box-shadow]="shadow">
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="color-hue-container">
      <div class="color-hue-pointer" [style.left]="left" [style.top]="top" *ngIf="!hidePointer">
        <div class="color-hue-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `,
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [`
    .color-hue {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .color-hue-container {
      margin: 0 2px;
      position: relative;
      height: 100%;
    }
    .color-hue-pointer {
      position: absolute;
    }
    .color-hue-slider {
      margin-top: 1px;
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      transform: translateX(-2px);
    }
    .color-hue-horizontal {
      background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
        33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    }
    .color-hue-vertical {
      background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    }
  `]
    })
], HueComponent);
let HueModule = class HueModule {
};
HueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [HueComponent],
        exports: [HueComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule],
    })
], HueModule);

let RaisedComponent = class RaisedComponent {
    constructor() {
        this.zDepth = 1;
        this.radius = 1;
        this.background = '#fff';
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], RaisedComponent.prototype, "zDepth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RaisedComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RaisedComponent.prototype, "background", void 0);
RaisedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-raised',
        template: `
  <div class="raised-wrap">
    <div class="raised-bg zDepth-{{zDepth}}" [style.background]="background"></div>
    <div class="raised-content">
      <ng-content></ng-content>
    </div>
  </div>
  `,
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [`
    .raised-wrap {
      position: relative;
      display: inline-block;
    }
    .raised-bg {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
    .raised-content {
      position: relative;
    }
    .zDepth-0 {
      box-shadow: none;
    }
    .zDepth-1 {
      box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
    }
    .zDepth-2 {
      box-shadow: 0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2);
    }
    .zDepth-3 {
      box-shadow: 0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24);
    }
    .zDepth-4 {
      box-shadow: 0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22);
    }
    .zDepth-5 {
      box-shadow: 0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2);
    }
  `]
    })
], RaisedComponent);
let RaisedModule = class RaisedModule {
};
RaisedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [RaisedComponent],
        exports: [RaisedComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
    })
], RaisedModule);

let SaturationComponent = class SaturationComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 100%, 50%)`;
        this.pointerTop = -(this.hsv.v * 100) + 1 + 100 + '%';
        this.pointerLeft = this.hsv.s * 100 + '%';
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        if (left < 0) {
            left = 0;
        }
        else if (left > containerWidth) {
            left = containerWidth;
        }
        else if (top < 0) {
            top = 0;
        }
        else if (top > containerHeight) {
            top = containerHeight;
        }
        const saturation = left / containerWidth;
        let bright = -(top / containerHeight) + 1;
        bright = bright > 0 ? bright : 0;
        bright = bright > 1 ? 1 : bright;
        const data = {
            h: this.hsl.h,
            s: saturation,
            v: bright,
            a: this.hsl.a,
            source: 'hsva',
        };
        this.onChange.emit({ data, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "hsv", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], SaturationComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "circle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "onChange", void 0);
SaturationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-saturation',
        template: `
  <div class="color-saturation" ngx-color-coordinates (coordinatesChange)="handleChange($event)" [style.background]="background">
    <div class="saturation-white">
      <div class="saturation-black"></div>
      <div class="saturation-pointer" [ngStyle]="pointer" [style.top]="pointerTop" [style.left]="pointerLeft">
        <div class="saturation-circle" [ngStyle]="circle"></div>
      </div>
    </div>
  </div>
  `,
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [`
    .saturation-white {
      background: linear-gradient(to right, #fff, rgba(255,255,255,0));
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .saturation-black {
      background: linear-gradient(to top, #000, rgba(0,0,0,0));
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .color-saturation {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .saturation-pointer {
      position: absolute;
      cursor: default;
    }
    .saturation-circle {
      width: 4px;
      height: 4px;
      box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);
      border-radius: 50%;
      cursor: hand;
      transform: translate(-2px, -4px);
    }
  `]
    })
], SaturationComponent);
let SaturationModule = class SaturationModule {
};
SaturationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [SaturationComponent],
        exports: [SaturationComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule],
    })
], SaturationModule);

let SwatchComponent = class SwatchComponent {
    constructor() {
        this.style = {};
        this.focusStyle = {};
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.divStyles = {};
        this.focusStyles = {};
        this.inFocus = false;
    }
    ngOnInit() {
        this.divStyles = Object.assign({ background: this.color, height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none' }, this.style);
    }
    currentStyles() {
        this.focusStyles = Object.assign({}, this.divStyles, this.focusStyle);
        return this.focus || this.inFocus ? this.focusStyles : this.divStyles;
    }
    handleFocusOut() {
        this.inFocus = false;
    }
    handleFocus() {
        this.inFocus = true;
    }
    handleHover(hex, $event) {
        this.onHover.emit({ hex, $event });
    }
    handleClick(hex, $event) {
        this.onClick.emit({ hex, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "focusStyle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], SwatchComponent.prototype, "focus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "onHover", void 0);
SwatchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-swatch',
        template: `
    <div
      class="swatch"
      [ngStyle]="currentStyles()"
      [attr.title]="color"
      (click)="handleClick(color, $event)"
      (keydown.enter)="handleClick(color, $event)"
      (focus)="handleFocus()"
      (blur)="handleFocusOut()"
      (mouseover)="handleHover(color, $event)"
      tabindex="0"
    >
      <ng-content></ng-content>
      <color-checkboard
        *ngIf="color === 'transparent'"
        boxShadow="inset 0 0 0 1px rgba(0,0,0,0.1)"
      ></color-checkboard>
    </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
    })
], SwatchComponent);
let SwatchModule = class SwatchModule {
};
SwatchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [SwatchComponent],
        exports: [SwatchComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule],
    })
], SwatchModule);

let ShadeComponent = class ShadeComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnChanges() {
        this.gradient = {
            background: `linear-gradient(to right,
          hsl(${this.hsl.h}, 90%, 55%),
          #000)`,
        };
        const hsv = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](this.hsl).toHsv();
        this.pointerLeft = 100 - (hsv.v * 100);
    }
    handleChange({ left, containerWidth, $event }) {
        let data;
        let v;
        if (left < 0) {
            v = 0;
        }
        else if (left > containerWidth) {
            v = 1;
        }
        else {
            v = Math.round((left * 100) / containerWidth) / 100;
        }
        const hsv = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](this.hsl).toHsv();
        if (hsv.v !== v) {
            data = {
                h: this.hsl.h,
                s: 100,
                v: 1 - v,
                l: this.hsl.l,
                a: this.hsl.a,
                source: 'rgb',
            };
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ShadeComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ShadeComponent.prototype, "rgb", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ShadeComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ShadeComponent.prototype, "shadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ShadeComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ShadeComponent.prototype, "onChange", void 0);
ShadeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-shade',
        template: `
    <div class="shade" [style.border-radius]="radius">
      <div
        class="shade-gradient"
        [ngStyle]="gradient"
        [style.box-shadow]="shadow"
        [style.border-radius]="radius"
      ></div>
      <div
        ngx-color-coordinates
        (coordinatesChange)="handleChange($event)"
        class="shade-container"
      >
        <div
          class="shade-pointer"
          [style.left.%]="pointerLeft"
          [style.top.%]="pointerTop"
        >
          <div class="shade-slider" [ngStyle]="pointer"></div>
        </div>
      </div>
    </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .shade {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .shade-gradient {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .shade-container {
      position: relative;
      height: 100%;
      margin: 0 3px;
    }
    .shade-pointer {
      position: absolute;
    }
    .shade-slider {
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      margin-top: 1px;
      transform: translateX(-2px);
    },
  `]
    })
], ShadeComponent);
let ShadeModule = class ShadeModule {
};
ShadeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [ShadeComponent],
        exports: [ShadeComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule],
    })
], ShadeModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color.js.map


/***/ }),

/***/ "./node_modules/ngx-color/github/fesm2015/ngx-color-github.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-color/github/fesm2015/ngx-color-github.js ***!
  \********************************************************************/
/*! exports provided: ColorGithubModule, GithubComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorGithubModule", function() { return ColorGithubModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubComponent", function() { return GithubComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GithubSwatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");





let GithubSwatchComponent = class GithubSwatchComponent {
    constructor() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], GithubSwatchComponent.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GithubSwatchComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GithubSwatchComponent.prototype, "onSwatchHover", void 0);
GithubSwatchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-github-swatch',
        template: `
  <div class="github-swatch">
    <color-swatch
      [color]="color"
      [style]="swatchStyle"
      (onClick)="handleClick($event)"
      (onHover)="onSwatchHover.emit($event)"
      class="swatch"
    ></color-swatch>
    <div class="clear"></div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .github-swatch {
      width: 25px;
      height: 25px;
      font-size: 0;
    }
    .github-swatch:hover {
      position: relative;
      z-index: 2;
      outline: 2px solid #fff;
      box-shadow: 0 0 5px 2px rgba(0,0,0,0.25);
    }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], GithubSwatchComponent);

let GithubComponent = class GithubComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"] {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 212;
        /** Color squares to display */
        this.colors = [
            '#B80000',
            '#DB3E00',
            '#FCCB00',
            '#008B02',
            '#006B76',
            '#1273DE',
            '#004DCF',
            '#5300EB',
            '#EB9694',
            '#FAD0C3',
            '#FEF3BD',
            '#C1E1C5',
            '#BEDADC',
            '#C4DEF6',
            '#BED3F3',
            '#D4C4FB',
        ];
        this.triangle = 'top-left';
    }
    handleBlockChange({ hex, $event }) {
        if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(hex)) {
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GithubComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], GithubComponent.prototype, "colors", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], GithubComponent.prototype, "triangle", void 0);
GithubComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-github',
        template: `
  <div class="github-picker {{ triangle }}-triangle {{ className }}"
    [style.width.px]="width"
  >
    <div class="triangleShadow"></div>
    <div class="triangle"></div>
    <color-github-swatch *ngFor="let color of colors"
      [color]="color"
      (onClick)="handleBlockChange($event)"
      (onSwatchHover)="onSwatchHover.emit($event)"
    ></color-github-swatch>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
  .github-picker {
    background: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 12px;
    border-radius: 4px;
    position: relative;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .triangleShadow {
    position: absolute;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.15);
    border-image: initial;
  }
  .triangle {
    position: absolute;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgb(255, 255, 255);
    border-image: initial;
  }
  .hide-triangle > .triangle {
    display: none;
  }
  .hide-triangle > .triangleShadow {
    display: none;
  }
  .top-left-triangle > .triangle {
    top: -14px;
    left: 10px;
  }
  .top-left-triangle > .triangleShadow {
    top: -16px;
    left: 9px;
  }
  .top-right-triangle > .triangle {
    top: -14px;
    right: 10px;
  }
  .top-right-triangle > .triangleShadow {
    top: -16px;
    right: 9px;
  }
  .bottom-right-triangle > .triangle {
    top: 35px;
    right: 10px;
    transform: rotate(180deg);
  }
  .bottom-right-triangle > .triangleShadow {
    top: 37px;
    right: 9px;
    transform: rotate(180deg);
  }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], GithubComponent);
let ColorGithubModule = class ColorGithubModule {
};
ColorGithubModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [GithubComponent, GithubSwatchComponent],
        exports: [GithubComponent, GithubSwatchComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"]],
    })
], ColorGithubModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-github.js.map


/***/ }),

/***/ "./node_modules/ngx-color/hue/fesm2015/ngx-color-hue.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-color/hue/fesm2015/ngx-color-hue.js ***!
  \**************************************************************/
/*! exports provided: ColorHueModule, HuePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorHueModule", function() { return ColorHueModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuePickerComponent", function() { return HuePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");





let HuePickerComponent = class HuePickerComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"] {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 316;
        /** Pixel value for picker height */
        this.height = 16;
        this.radius = 2;
        this.direction = 'horizontal';
        this.pointer = {
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            transform: 'translate(-9px, -2px)',
            backgroundColor: 'rgb(248, 248, 248)',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        };
    }
    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointer.transform = 'translate(-3px, -9px)';
        }
        this.setState(Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["toState"])(this.color, this.oldHue));
    }
    handlePickerChange({ data, $event }) {
        this.handleChange({ a: 1, h: data.h, l: 0.5, s: 1 }, $event);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HuePickerComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HuePickerComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HuePickerComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], HuePickerComponent.prototype, "direction", void 0);
HuePickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-hue-picker',
        template: `
  <div class="hue-picker {{ className }}"
    [style.width.px]="width" [style.height.px]="height"
  >
    <color-hue [hsl]="hsl" [pointer]="pointer"
      [direction]="direction" [radius]="radius"
      (onChange)="handlePickerChange($event)"
    ></color-hue>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .hue-picker {
      position: relative;
    }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HuePickerComponent);
let ColorHueModule = class ColorHueModule {
};
ColorHueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [HuePickerComponent],
        exports: [HuePickerComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueModule"]],
    })
], ColorHueModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-hue.js.map


/***/ }),

/***/ "./node_modules/ngx-color/material/fesm2015/ngx-color-material.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-color/material/fesm2015/ngx-color-material.js ***!
  \************************************************************************/
/*! exports provided: ColorMaterialModule, MaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorMaterialModule", function() { return ColorMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponent", function() { return MaterialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");





let MaterialComponent = class MaterialComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"] {
    constructor() {
        super();
        this.HEXinput = {
            width: '100%',
            marginTop: '12px',
            fontSize: '15px',
            color: 'rgb(51, 51, 51)',
            padding: '0px',
            'border-width': '0px 0px 2px',
            outline: 'none',
            height: '30px',
        };
        this.HEXlabel = {
            position: 'absolute',
            top: '0px',
            left: '0px',
            fontSize: '11px',
            color: 'rgb(153, 153, 153)',
            'text-transform': 'capitalize',
        };
        this.RGBinput = {
            width: '100%',
            marginTop: '12px',
            fontSize: '15px',
            color: '#333',
            padding: '0px',
            border: '0px',
            'border-bottom': '1px solid #eee',
            outline: 'none',
            height: '30px',
        };
        this.RGBlabel = {
            position: 'absolute',
            top: '0px',
            left: '0px',
            fontSize: '11px',
            color: '#999999',
            'text-transform': 'capitalize',
        };
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    handleInputChange({ data, $event }) {
        if (data.hex) {
            if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(data.hex)) {
                this.handleValueChange({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else if (data.r || data.g || data.b) {
            this.handleValueChange({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event,
            });
        }
    }
    afterValidChange() {
        this.HEXinput['border-bottom-color'] = this.hex;
    }
};
MaterialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-material',
        template: `
  <color-raised>
    <div class="material-picker {{ className }}">
      <color-editable-input label="hex" [value]="hex"
        (onChange)="handleValueChange($event)"
        [style]="{input: HEXinput, label: HEXlabel}"
      ></color-editable-input>
      <div class="material-split">
        <div class="material-third">
          <color-editable-input label="r" [value]="rgb.r"
            [style]="{ input: RGBinput, label: RGBlabel }"
            (onChange)="handleInputChange($event)"
          ></color-editable-input>
        </div>
        <div class="material-third">
          <color-editable-input label="g" [value]="rgb.g"
            [style]="{ input: RGBinput, label: RGBlabel }"
            (onChange)="handleInputChange($event)"
          ></color-editable-input>
        </div>
        <div class="material-third">
          <color-editable-input label="b" [value]="rgb.b"
            [style]="{ input: RGBinput, label: RGBlabel }"
            (onChange)="handleInputChange($event)"
          ></color-editable-input>
        </div>
      </div>
    </div>
  </color-raised>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
  .material-picker {
    width: 130px;
    height: 130px;
    padding: 16px;
    font-family: Roboto;
  }
  .material-split {
    display: flex;
    margin-right: -10px;
    padding-top: 11px;
  }
  .material-third {
    flex: 1 1 0%;
    padding-right: 10px;
  }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MaterialComponent);
let ColorMaterialModule = class ColorMaterialModule {
};
ColorMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        exports: [MaterialComponent],
        declarations: [MaterialComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["RaisedModule"]],
    })
], ColorMaterialModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-material.js.map


/***/ }),

/***/ "./node_modules/ngx-color/photoshop/fesm2015/ngx-color-photoshop.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-color/photoshop/fesm2015/ngx-color-photoshop.js ***!
  \**************************************************************************/
/*! exports provided: ColorPhotoshopModule, PhotoshopComponent, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPhotoshopModule", function() { return ColorPhotoshopModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoshopComponent", function() { return PhotoshopComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PhotoshopPreviewsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PhotoshopButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return PhotoshopFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");





let PhotoshopButtonComponent = class PhotoshopButtonComponent {
    constructor() {
        this.label = '';
        this.active = false;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PhotoshopButtonComponent.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PhotoshopButtonComponent.prototype, "active", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PhotoshopButtonComponent.prototype, "onClick", void 0);
PhotoshopButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-photoshop-button',
        template: `
    <div class="photoshop-button"  [class.active]="active"
      (click)="onClick.emit($event)"
    >
      {{ label }}
    </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .photoshop-button {
      background-image: linear-gradient(
        -180deg,
        rgb(255, 255, 255) 0%,
        rgb(230, 230, 230) 100%
      );
      border: 1px solid rgb(135, 135, 135);
      border-radius: 2px;
      height: 22px;
      box-shadow: rgb(234, 234, 234) 0px 1px 0px 0px;
      font-size: 14px;
      color: rgb(0, 0, 0);
      line-height: 20px;
      text-align: center;
      margin-bottom: 10px;
      cursor: pointer;
    }
    .photoshop-button.active {
      box-shadow: 0 0 0 1px #878787;
    }
  `]
    })
], PhotoshopButtonComponent);

let PhotoshopFieldsComponent = class PhotoshopFieldsComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.RGBinput = {
            marginLeft: '35%',
            width: '40%',
            height: '22px',
            border: '1px solid rgb(136, 136, 136)',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px inset, rgb(236, 236, 236) 0px 1px 0px 0px',
            marginBottom: '2px',
            fontSize: '13px',
            paddingLeft: '3px',
            marginRight: '10px',
        };
        this.RGBwrap = {
            position: 'relative',
        };
        this.RGBlabel = {
            left: '0px',
            width: '34px',
            textTransform: 'uppercase',
            fontSize: '13px',
            height: '24px',
            lineHeight: '24px',
            position: 'absolute',
        };
        this.HEXinput = {
            marginLeft: '20%',
            width: '80%',
            height: '22px',
            border: '1px solid #888888',
            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
            marginBottom: '3px',
            fontSize: '13px',
            paddingLeft: '3px',
        };
        this.HEXwrap = {
            position: 'relative',
        };
        this.HEXlabel = {
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '14px',
            textTransform: 'uppercase',
            fontSize: '13px',
            height: '24px',
            lineHeight: '24px',
        };
    }
    round(v) {
        return Math.round(v);
    }
    handleValueChange({ data, $event }) {
        if (data['#']) {
            if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(data['#'])) {
                this.onChange.emit({
                    data: {
                        hex: data['#'],
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else if (data.r || data.g || data.b) {
            this.onChange.emit({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.h || data.s || data.v) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsv.h,
                    s: data.s || this.hsv.s,
                    v: data.v || this.hsv.v,
                    source: 'hsv',
                },
                $event,
            });
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PhotoshopFieldsComponent.prototype, "rgb", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PhotoshopFieldsComponent.prototype, "hsv", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PhotoshopFieldsComponent.prototype, "hex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PhotoshopFieldsComponent.prototype, "onChange", void 0);
PhotoshopFieldsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-photoshop-fields',
        template: `
  <div class="photoshop-fields">
    <color-editable-input
      [value]="round(hsv.h)"
      label="h"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="round(hsv.s * 100)"
      label="s"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="round(hsv.v * 100)"
      label="v"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <div class="photoshop-divider"></div>
    <color-editable-input
      [value]="rgb.r"
      label="r"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="rgb.g"
      label="g"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="rgb.b"
      label="b"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <div class="photoshop-divider"></div>
    <color-editable-input
      [value]="hex.replace('#', '')"
      label="#"
      (onChange)="handleValueChange($event)"
      [style]="{input: HEXinput, wrap: HEXwrap, label: HEXlabel}"
    ></color-editable-input>
    <div class="photoshop-field-symbols">
      <div class="photoshop-symbol">°</div>
      <div class="photoshop-symbol">%</div>
      <div class="photoshop-symbol">%</div>
    </div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .photoshop-fields {
      padding-top: 5px;
      padding-bottom: 9px;
      width: 85px;
      position: relative;
    }
    .photoshop-field-symbols {
      position: absolute;
      top: 5px;
      right: -7px;
      font-size: 13px;
    }
    .photoshop-symbol {
      height: 24px;
      line-height: 24px;
      padding-bottom: 7px;
    }
    .photoshop-divider {
      height: 5px;
    }
  `]
    })
], PhotoshopFieldsComponent);

let PhotoshopPreviewsComponent = class PhotoshopPreviewsComponent {
    constructor() {
        this.currentColor = '';
        this.backgroundNew = '';
    }
    ngOnChanges() {
        this.backgroundNew = `rgb(${this.rgb.r},${this.rgb.g}, ${this.rgb.b})`;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PhotoshopPreviewsComponent.prototype, "rgb", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PhotoshopPreviewsComponent.prototype, "currentColor", void 0);
PhotoshopPreviewsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-photoshop-previews',
        template: `
  <div>
    <div class="photoshop-label">new</div>
    <div class="photoshop-swatches">
      <div class="photoshop-new" [style.background]="backgroundNew"></div>
      <div class="photoshop-current" [style.background]="currentColor"></div>
    </div>
    <div class="photoshop-label">current</div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
  .photoshop-swatches {
    border: 1px solid #B3B3B3;
    border-bottom: 1px solid #F0F0F0;
    margin-bottom: 2px;
    margin-top: 1px;
  }
  .photoshop-new {
    height: 34px;
    box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;
  }
  .photoshop-current {
    height: 34px;
    box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000;
  }
  .photoshop-label {
    font-size: 14px;
    color: #000;
    text-align: center;
  }
  `]
    })
], PhotoshopPreviewsComponent);

let PhotoshopComponent = class PhotoshopComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"] {
    constructor() {
        super();
        /** Title text */
        this.header = 'Color Picker';
        this.onAccept = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.circle = {
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1px inset',
            transform: 'translate(-6px, -10px)',
        };
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PhotoshopComponent.prototype, "header", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PhotoshopComponent.prototype, "onAccept", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PhotoshopComponent.prototype, "onCancel", void 0);
PhotoshopComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-photoshop',
        template: `
  <div class="photoshop-picker {{ className }}">
    <div class="photoshop-head">{{ header }}</div>
    <div class="photoshop-body">
      <div class="photoshop-saturation">
        <color-saturation
          [hsl]="hsl" [hsv]="hsv" [circle]="circle"
          (onChange)="handleValueChange($event)"
        ></color-saturation>
      </div>
      <div class="photoshop-hue">
        <color-hue direction="vertical"
          [hsl]="hsl" [hidePointer]="true"
          (onChange)="handleValueChange($event)"
        ></color-hue>
      </div>
      <div class="photoshop-controls">
        <div class="photoshop-top">
          <div class="photoshop-previews">
            <color-photoshop-previews
              [rgb]="rgb" [currentColor]="currentColor"
            ></color-photoshop-previews>
          </div>
          <div class="photoshop-actions">
            <color-photoshop-button label="OK"
              [active]="true" (onClick)="onAccept.emit($event)"
            ></color-photoshop-button>
            <color-photoshop-button label="Cancel"
              (onClick)="onCancel.emit($event)"
            >
            </color-photoshop-button>
            <color-photoshop-fields
              [rgb]="rgb" [hex]="hex" [hsv]="hsv"
              (onChange)="handleValueChange($event)"
            ></color-photoshop-fields>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .photoshop-picker {
      background: rgb(220, 220, 220);
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px;
      box-sizing: initial; width: 513px;
    }
    .photoshop-head {
      background-image: linear-gradient(
        -180deg,
        rgb(240, 240, 240) 0%,
        rgb(212, 212, 212) 100%
      );
      border-bottom: 1px solid rgb(177, 177, 177);
      box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset,
        rgba(0, 0, 0, 0.02) 0px -1px 0px 0px inset;
      height: 23px;
      line-height: 24px;
      border-radius: 4px 4px 0px 0px;
      font-size: 13px;
      color: rgb(77, 77, 77);
      text-align: center;
    }
    .photoshop-body {
      padding: 15px 15px 0px;
      display: flex;
    }
    .photoshop-saturation {
      width: 256px;
      height: 256px;
      position: relative;
      border-width: 2px;
      border-style: solid;
      border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240);
      border-image: initial;
      overflow: hidden;
    }
    .photoshop-hue {
      position: relative;
      height: 256px;
      width: 23px;
      margin-left: 10px;
      border-width: 2px;
      border-style: solid;
      border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240);
      border-image: initial;
    }
    .photoshop-controls {
      width: 180px;
      margin-left: 10px;
    }
    .photoshop-top {
      display: flex;
    }
    .photoshop-previews {
      width: 60px;
    }
    .photoshop-actions {
      -webkit-box-flex: 1;
      flex: 1 1 0%;
      margin-left: 20px;
    }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PhotoshopComponent);
let ColorPhotoshopModule = class ColorPhotoshopModule {
};
ColorPhotoshopModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            PhotoshopComponent,
            PhotoshopPreviewsComponent,
            PhotoshopButtonComponent,
            PhotoshopFieldsComponent,
        ],
        exports: [
            PhotoshopComponent,
            PhotoshopPreviewsComponent,
            PhotoshopButtonComponent,
            PhotoshopFieldsComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["AlphaModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["SaturationModule"],
        ],
    })
], ColorPhotoshopModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-photoshop.js.map


/***/ }),

/***/ "./node_modules/ngx-color/sketch/fesm2015/ngx-color-sketch.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-color/sketch/fesm2015/ngx-color-sketch.js ***!
  \********************************************************************/
/*! exports provided: ColorSketchModule, SketchComponent, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSketchModule", function() { return ColorSketchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SketchComponent", function() { return SketchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SketchFieldsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SketchPresetColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");





let SketchFieldsComponent = class SketchFieldsComponent {
    constructor() {
        this.disableAlpha = false;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.input = {
            width: '100%',
            padding: '4px 10% 3px',
            border: 'none',
            boxSizing: 'border-box',
            boxShadow: 'inset 0 0 0 1px #ccc',
            fontSize: '11px',
        };
        this.label = {
            display: 'block',
            textAlign: 'center',
            fontSize: '11px',
            color: '#222',
            paddingTop: '3px',
            paddingBottom: '4px',
            textTransform: 'capitalize',
        };
    }
    round(value) {
        return Math.round(value);
    }
    handleChange({ data, $event }) {
        if (data.hex) {
            if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(data.hex)) {
                this.onChange.emit({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else if (data.r || data.g || data.b) {
            this.onChange.emit({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.a) {
            if (data.a < 0) {
                data.a = 0;
            }
            else if (data.a > 100) {
                data.a = 100;
            }
            data.a /= 100;
            this.onChange.emit({
                data: {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: Math.round(data.a * 100) / 100,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.h || data.s || data.l) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsl.h,
                    s: Number((data.s && data.s) || this.hsl.s),
                    l: Number((data.l && data.l) || this.hsl.l),
                    source: 'hsl',
                },
                $event,
            });
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchFieldsComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchFieldsComponent.prototype, "rgb", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SketchFieldsComponent.prototype, "hex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchFieldsComponent.prototype, "disableAlpha", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchFieldsComponent.prototype, "onChange", void 0);
SketchFieldsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-sketch-fields',
        template: `
  <div class="sketch-fields">
    <div class="sketch-double">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="hex"
        [value]="hex.replace('#', '')"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="r"
        [value]="rgb.r"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="g"
        [value]="rgb.g"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="b"
        [value]="rgb.b"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-alpha" *ngIf="disableAlpha === false">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="a"
        [value]="round(rgb.a * 100)"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="100"
      ></color-editable-input>
    </div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .sketch-fields {
      display: flex;
      padding-top: 4px;
    }
    .sketch-double {
      -webkit-box-flex: 2;
      flex: 2 1 0%;
    }
    .sketch-single {
      flex: 1 1 0%;
      padding-left: 6px;
    }
    .sketch-alpha {
      -webkit-box-flex: 1;
      flex: 1 1 0%;
      padding-left: 6px;
    }
  `]
    })
], SketchFieldsComponent);

let SketchPresetColorsComponent = class SketchPresetColorsComponent {
    constructor() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.swatchStyle = {
            borderRadius: '3px',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
        };
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    normalizeValue(val) {
        if (typeof val === 'string') {
            return { color: val };
        }
        return val;
    }
    focusStyle(val) {
        const c = this.normalizeValue(val);
        return {
            boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${c.color}`,
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], SketchPresetColorsComponent.prototype, "colors", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchPresetColorsComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchPresetColorsComponent.prototype, "onSwatchHover", void 0);
SketchPresetColorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-sketch-preset-colors',
        template: `
  <div class="sketch-swatches">
    <div class="sketch-wrap" *ngFor="let c of colors">
      <color-swatch
        [color]="normalizeValue(c).color"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
    </div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .sketch-swatches {
      margin: 0px -10px;
      padding: 10px 0px 0px 10px;
      border-top: 1px solid rgb(238, 238, 238);
      display: flex;
      flex-wrap: wrap;
      position: relative;
    }
    .sketch-wrap {
      width: 16px;
      height: 16px;
      margin: 0px 10px 10px 0px;
    }
  `]
    })
], SketchPresetColorsComponent);

let SketchComponent = class SketchComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"] {
    constructor() {
        super();
        /** Remove alpha slider and options from picker */
        this.disableAlpha = false;
        /** Hex strings for default colors at bottom of picker */
        this.presetColors = [
            '#D0021B',
            '#F5A623',
            '#F8E71C',
            '#8B572A',
            '#7ED321',
            '#417505',
            '#BD10E0',
            '#9013FE',
            '#4A90E2',
            '#50E3C2',
            '#B8E986',
            '#000000',
            '#4A4A4A',
            '#9B9B9B',
            '#FFFFFF',
        ];
        /** Width of picker */
        this.width = 200;
    }
    afterValidChange() {
        this.activeBackground = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${this.rgb.a})`;
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    handleBlockChange({ hex, $event }) {
        if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(hex)) {
            // this.hex = hex;
            this.handleChange({
                hex,
                source: 'hex',
            }, $event);
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchComponent.prototype, "disableAlpha", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchComponent.prototype, "presetColors", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SketchComponent.prototype, "width", void 0);
SketchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-sketch',
        template: `
  <div class="sketch-picker {{ className }}" [style.width]="width">
    <div class="sketch-saturation">
      <color-saturation [hsl]="hsl" [hsv]="hsv"
        (onChange)="handleValueChange($event)"
      >
      </color-saturation>
    </div>
    <div class="sketch-controls">
      <div class="sketch-sliders">
        <div class="sketch-hue">
          <color-hue [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-hue>
        </div>
        <div class="sketch-alpha" *ngIf="disableAlpha === false">
          <color-alpha
            [radius]="2" [rgb]="rgb" [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-alpha>
        </div>
      </div>
      <div class="sketch-color">
        <color-checkboard></color-checkboard>
        <div class="sketch-active" [style.background]="activeBackground"></div>
      </div>
    </div>
    <div class="sketch-controls">
      <color-sketch-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-sketch-fields>
    </div>
    <div class="sketch-controls">
      <color-sketch-preset-colors
        [colors]="presetColors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-sketch-preset-colors>
    </div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .sketch-picker {
      padding: 10px 10px 0;
      box-sizing: initial;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15);
    }
    .sketch-saturation {
      width: 100%;
      padding-bottom: 75%;
      position: relative;
      overflow: hidden;
    }
    .sketch-controls {
      display: flex;
    }
    .sketch-sliders {
      padding: 4px 0px;
      -webkit-box-flex: 1;
      flex: 1 1 0%;
    }
    .sketch-hue {
      position: relative;
      height: 10px;
      overflow: hidden;
    }
    .sketch-alpha {
      position: relative;
      height: 10px;
      margin-top: 4px;
      overflow: hidden;
    }
    .sketch-color {
      width: 24px;
      height: 24px;
      position: relative;
      margin-top: 4px;
      margin-left: 4px;
      border-radius: 3px;
    }
    .sketch-active {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      border-radius: 2px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px 4px inset;
    }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SketchComponent);
let ColorSketchModule = class ColorSketchModule {
};
ColorSketchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            SketchComponent,
            SketchFieldsComponent,
            SketchPresetColorsComponent,
        ],
        exports: [
            SketchComponent,
            SketchFieldsComponent,
            SketchPresetColorsComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["AlphaModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["CheckboardModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["SaturationModule"],
            ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"],
        ],
    })
], ColorSketchModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-sketch.js.map


/***/ }),

/***/ "./node_modules/ngx-color/slider/fesm2015/ngx-color-slider.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-color/slider/fesm2015/ngx-color-slider.js ***!
  \********************************************************************/
/*! exports provided: ColorSliderModule, SliderComponent, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSliderModule", function() { return ColorSliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SliderSwatchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SliderSwatchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");





let SliderSwatchComponent = class SliderSwatchComponent {
    constructor() {
        this.first = false;
        this.last = false;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 50%, ${this.offset * 100}%)`;
    }
    handleClick($event) {
        this.onClick.emit({
            data: {
                h: this.hsl.h,
                s: 0.5,
                l: this.offset,
                source: 'hsl',
            },
            $event,
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SliderSwatchComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], SliderSwatchComponent.prototype, "active", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], SliderSwatchComponent.prototype, "offset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SliderSwatchComponent.prototype, "first", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SliderSwatchComponent.prototype, "last", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SliderSwatchComponent.prototype, "onClick", void 0);
SliderSwatchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-slider-swatch',
        template: `
  <div class="slider-swatch" [style.background]="background"
    [class.first]="first" [class.last]="last" [class.active]="active"
    (click)="handleClick($event)"
  ></div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .slider-swatch {
      height: 12px;
      background: rgb(121, 211, 166);
      cursor: pointer;
    }
    .slider-swatch.active {
      transform: scaleY(1.8);
      border-top-right-radius: 3.6px 2px;
      border-top-left-radius: 3.6px 2px;
      border-bottom-right-radius: 3.6px 2px;
      border-bottom-left-radius: 3.6px 2px;
    }
    .slider-swatch.first {
      border-radius: 2px 0px 0px 2px;
    }
    .slider-swatch.last {
      border-radius: 0px 2px 2px 0px;
    }

  `]
    })
], SliderSwatchComponent);

let SliderSwatchesComponent = class SliderSwatchesComponent {
    constructor() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    active(l, s) {
        return (Math.round(this.hsl.l * 100) / 100 === l &&
            Math.round(this.hsl.s * 100) / 100 === s);
    }
    handleClick({ data, $event }) {
        this.onClick.emit({ data, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SliderSwatchesComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SliderSwatchesComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SliderSwatchesComponent.prototype, "onSwatchHover", void 0);
SliderSwatchesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-slider-swatches',
        template: `
  <div class="slider-swatches">
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        offset=".80"
        [active]="active(0.80, 0.50)"
        (onClick)="handleClick($event)"
        first="true"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        offset=".65"
        [active]="active(0.65, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        offset=".50"
        [active]="active(0.50, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        offset=".35"
        [active]="active(0.35, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        offset=".20"
        [active]="active(0.20, 0.50)"
        (onClick)="handleClick($event)"
        last="true"
      ></color-slider-swatch>
    </div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .slider-swatches {
      margin-top: 20px;
    }
    .slider-swatch-wrap {
      box-sizing: border-box;
      width: 20%;
      padding-right: 1px;
      float: left;
    }
  `]
    })
], SliderSwatchesComponent);

let SliderComponent = class SliderComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"] {
    constructor() {
        super();
        this.pointer = {
            width: '14px',
            height: '14px',
            borderRadius: '6px',
            transform: 'translate(-7px, -2px)',
            backgroundColor: 'rgb(248, 248, 248)',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        };
        this.radius = 2;
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SliderComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SliderComponent.prototype, "radius", void 0);
SliderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-slider',
        template: `
  <div class="slider-picker {{ className }}">
    <div class="slider-hue">
      <color-hue
        [hsl]="hsl" [radius]="radius" [pointer]="pointer"
        (onChange)="handlePickerChange($event)"
      ></color-hue>
    </div>
    <div class="slider-swatches">
      <color-slider-swatches [hsl]="hsl"
        (onClick)="handlePickerChange($event)"
      ></color-slider-swatches>
    </div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .slider-hue {
      height: 12px;
      position: relative;
    }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SliderComponent);
let ColorSliderModule = class ColorSliderModule {
};
ColorSliderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            SliderComponent,
            SliderSwatchComponent,
            SliderSwatchesComponent,
        ],
        exports: [SliderComponent, SliderSwatchComponent, SliderSwatchesComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"]],
    })
], ColorSliderModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-slider.js.map


/***/ }),

/***/ "./node_modules/ngx-color/swatches/fesm2015/ngx-color-swatches.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-color/swatches/fesm2015/ngx-color-swatches.js ***!
  \************************************************************************/
/*! exports provided: ColorSwatchesModule, SwatchesComponent, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSwatchesModule", function() { return ColorSwatchesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchesComponent", function() { return SwatchesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SwatchesGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SwatchesColorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var material_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-colors */ "./node_modules/material-colors/dist/colors.es2015.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");






let SwatchesColorComponent = class SwatchesColorComponent {
    constructor() {
        this.first = false;
        this.last = false;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.getContrastingColor = ngx_color__WEBPACK_IMPORTED_MODULE_4__["getContrastingColor"];
        this.colorStyle = {
            width: '40px',
            height: '24px',
            cursor: 'pointer',
            marginBottom: '1px',
        };
        this.focusStyle = {};
    }
    ngOnInit() {
        this.colorStyle.background = this.color;
        this.focusStyle.boxShadow = `0 0 4px ${this.color}`;
        if (this.first) {
            this.colorStyle.borderRadius = '2px 2px 0 0';
        }
        if (this.last) {
            this.colorStyle.borderRadius = '0 0 2px 2px';
        }
        if (this.color === '#FFFFFF') {
            this.colorStyle.boxShadow = 'inset 0 0 0 1px #ddd';
        }
    }
    handleClick($event) {
        this.onClick.emit({
            data: {
                hex: this.color,
                source: 'hex',
            },
            $event,
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SwatchesColorComponent.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchesColorComponent.prototype, "first", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchesColorComponent.prototype, "last", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], SwatchesColorComponent.prototype, "active", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchesColorComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchesColorComponent.prototype, "onSwatchHover", void 0);
SwatchesColorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-swatches-color',
        template: `
  <color-swatch [color]="color" [style]="colorStyle" [focusStyle]="focusStyle"
    [class.first]="first" [class.last]="last"
    (click)="handleClick($event)" (onHover)="onSwatchHover.emit($event)">
    <div class="swatch-check" *ngIf="active" [class.first]="first" [class.last]="last">
      <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" [style.fill]="getContrastingColor(color)">
        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
      </svg>
    </div>
  </color-swatch>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .swatches-group {
      padding-bottom: 10px;
      width: 40px;
      float: left;
      margin-right: 10px;
    }
    .swatch-check {
      margin-left: 8px;
    }
  `]
    })
], SwatchesColorComponent);

let SwatchesGroupComponent = class SwatchesGroupComponent {
    constructor() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], SwatchesGroupComponent.prototype, "group", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SwatchesGroupComponent.prototype, "active", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchesGroupComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchesGroupComponent.prototype, "onSwatchHover", void 0);
SwatchesGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-swatches-group',
        template: `
  <div class="swatches-group">
    <color-swatches-color
      *ngFor="let color of group; let idx = index;"
      [active]="color.toLowerCase() === active"
      [color]="color"
      [first]="idx === 0"
      [last]="idx === group.length - 1"
      (onClick)="onClick.emit($event)"
    >
    </color-swatches-color>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .swatches-group {
      padding-bottom: 10px;
      width: 40px;
      float: left;
      margin-right: 10px;
    }
  `]
    })
], SwatchesGroupComponent);

let SwatchesComponent = class SwatchesComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_4__["ColorWrap"] {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 320;
        /** Color squares to display */
        this.height = 240;
        /** An array of color groups, each with an array of colors */
        this.colors = [
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["red"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["red"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["red"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["red"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["red"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["pink"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["pink"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["pink"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["pink"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["pink"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["purple"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["purple"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["purple"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["purple"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["purple"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["deepPurple"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["deepPurple"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["deepPurple"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["deepPurple"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["deepPurple"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["indigo"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["indigo"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["indigo"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["indigo"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["indigo"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["blue"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["blue"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["blue"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["blue"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["blue"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lightBlue"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lightBlue"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lightBlue"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lightBlue"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lightBlue"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["cyan"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["cyan"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["cyan"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["cyan"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["cyan"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["teal"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["teal"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["teal"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["teal"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["teal"]['100'],
            ],
            [
                '#194D33',
                material_colors__WEBPACK_IMPORTED_MODULE_3__["green"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["green"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["green"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["green"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lightGreen"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lightGreen"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lightGreen"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lightGreen"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lightGreen"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lime"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lime"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lime"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lime"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["lime"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["yellow"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["yellow"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["yellow"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["yellow"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["yellow"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["amber"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["amber"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["amber"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["amber"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["amber"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["orange"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["orange"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["orange"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["orange"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["orange"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["deepOrange"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["deepOrange"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["deepOrange"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["deepOrange"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["deepOrange"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["brown"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["brown"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["brown"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["brown"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["brown"]['100'],
            ],
            [
                material_colors__WEBPACK_IMPORTED_MODULE_3__["blueGrey"]['900'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["blueGrey"]['700'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["blueGrey"]['500'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["blueGrey"]['300'],
                material_colors__WEBPACK_IMPORTED_MODULE_3__["blueGrey"]['100'],
            ],
            ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF'],
        ];
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchesComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchesComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], SwatchesComponent.prototype, "colors", void 0);
SwatchesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-swatches',
        template: `
  <div class="swatches-picker {{ className }}"
    [style.width.px]="width" [style.height.px]="height">
    <color-raised>
      <div class="swatches-overflow" [style.height.px]="height">
        <div class="swatches-body">
          <color-swatches-group
            *ngFor="let group of colors"
            [group]="group" [active]="hex"
            (onClick)="handlePickerChange($event)"
          ></color-swatches-group>
        </div>
      </div>
    </color-raised>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
      .swatches-overflow {
        overflow-y: scroll;
      }
      .swatches-overflow {
        padding: 16px 0 6px 16px;
      }
    `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SwatchesComponent);
let ColorSwatchesModule = class ColorSwatchesModule {
};
ColorSwatchesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            SwatchesComponent,
            SwatchesGroupComponent,
            SwatchesColorComponent,
        ],
        exports: [SwatchesComponent, SwatchesGroupComponent, SwatchesColorComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_4__["SwatchModule"], ngx_color__WEBPACK_IMPORTED_MODULE_4__["RaisedModule"]],
    })
], ColorSwatchesModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-swatches.js.map


/***/ }),

/***/ "./node_modules/ngx-color/twitter/fesm2015/ngx-color-twitter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-color/twitter/fesm2015/ngx-color-twitter.js ***!
  \**********************************************************************/
/*! exports provided: ColorTwitterModule, TwitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorTwitterModule", function() { return ColorTwitterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterComponent", function() { return TwitterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");





let TwitterComponent = class TwitterComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"] {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 276;
        /** Color squares to display */
        this.colors = [
            '#FF6900',
            '#FCB900',
            '#7BDCB5',
            '#00D084',
            '#8ED1FC',
            '#0693E3',
            '#ABB8C3',
            '#EB144C',
            '#F78DA7',
            '#9900EF',
        ];
        this.triangle = 'top-left';
        this.swatchStyle = {
            width: '30px',
            height: '30px',
            borderRadius: '4px',
            fontSize: '0',
        };
        this.input = {
            borderRadius: '4px',
            borderBottomLeftRadius: '0',
            borderTopLeftRadius: '0',
            border: '1px solid #e6ecf0',
            boxSizing: 'border-box',
            display: 'inline',
            fontSize: '14px',
            height: '30px',
            padding: '0',
            paddingLeft: '6px',
            width: '100%',
            color: '#657786',
        };
    }
    focus(color) {
        return { boxShadow: `0 0 4px ${color}` };
    }
    handleBlockChange({ hex, $event }) {
        if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(hex)) {
            // this.hex = hex;
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleBlockChange({ hex: data, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TwitterComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TwitterComponent.prototype, "colors", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TwitterComponent.prototype, "triangle", void 0);
TwitterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-twitter',
        template: `
  <div class="twitter-picker {{ triangle }}-triangle {{ className }}" [style.width.px]="width">
    <div class="triangleShadow"></div>
    <div class="triangle"></div>
    <div class="twitter-body">
      <div class="twitter-swatch" *ngFor="let color of colors">
        <color-swatch
          [color]="color"
          [style]="swatchStyle"
          [focusStyle]="focus(color)"
          (onClick)="handleBlockChange($event)"
        ></color-swatch>
      </div>
      <div class="twitter-hash">
        <div>#</div>
      </div>
      <div class="twitter-input">
        <color-editable-input
          [style]="{ input: input }"
          [value]="hex.replace('#', '')"
          (onChange)="handleValueChange($event)"
        ></color-editable-input>
      </div>
    </div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .twitter-picker {
      background: rgb(255, 255, 255);
      border: 0px solid rgba(0, 0, 0, 0.25);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
      border-radius: 4px;
      position: relative;
      box-sizing: border-box;
    }
    .triangleShadow {
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 0px 9px 10px;
      border-color: transparent transparent rgba(0, 0, 0, 0.1);
      position: absolute;
    }
    .triangle {
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 0px 9px 10px;
      border-color: transparent transparent rgb(255, 255, 255);
      position: absolute;
    }
    .hide-triangle > .triangle {
      display: none;
    }
    .hide-triangle > .triangleShadow {
      display: none;
    }
    .top-left-triangle > .triangle {
      top: -10px;
      left: 12px;
    }
    .top-left-triangle > .triangleShadow {
      top: -11px;
      left: 12px;
    }
    .top-right-triangle > .triangle {
      top: -10px;
      right: 12px;
    }
    .top-right-triangle > .triangleShadow {
      top: -11px;
      right: 12px;
    }
    .twitter-body {
      padding: 15px 9px 9px 15px;
    }
    .twitter-swatch {
      width: 30px;
      height: 30px;
      display: inline-block;
      margin: 0 6px 0 0;
    }
    .twitter-hash {
      background: rgb(240, 240, 240);
      height: 30px;
      width: 30px;
      border-radius: 4px 0px 0px 4px;
      color: rgb(152, 161, 164);
      margin-left: -3px;
      display: inline-block;

    }
    .twitter-hash > div {
      position: absolute;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
      display: flex;
    }
    .twitter-input {
      position: relative;
      display: inline-block;
      margin-top: -6px;
      font-size: 10px;
      height: 27px;
      padding: 0;
      position: relative;
      top: 6px;
      vertical-align: top;
      width: 108px;
      margin-left: -4px;
    }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TwitterComponent);
let ColorTwitterModule = class ColorTwitterModule {
};
ColorTwitterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [TwitterComponent],
        exports: [TwitterComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"]],
    })
], ColorTwitterModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-twitter.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/pickers/color-picker-advanced/color-picker-advanced.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/pickers/color-picker-advanced/color-picker-advanced.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Color Pickers Advanced</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<ng-masonry-grid class=\"row\"\r\n                 [@visibleInOut]=\"showMasonry\"\r\n                 (onNgMasonryInit)=\"onNgMasonryInit($event)\">\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Block\">\r\n\r\n      <color-block\r\n        [color]=\"state\"\r\n        (onChangeComplete)=\"changeComplete($event)\">\r\n      </color-block>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Chrome\">\r\n\r\n      <color-chrome\r\n        [color]=\"state\"\r\n        (onChangeComplete)=\"changeComplete($event)\">\r\n      </color-chrome>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Sketch\">\r\n\r\n      <color-sketch [color]=\"state\" (onChangeComplete)=\"changeComplete($event)\"></color-sketch>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Twitter\">\r\n\r\n      <color-twitter\r\n        [color]=\"state\"\r\n        triangle=\"top-right\"\r\n        (onChangeComplete)=\"changeComplete($event)\"\r\n        (onChange)=\"changeComplete($event)\"\r\n      ></color-twitter>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Circle\">\r\n\r\n      <color-circle\r\n        [color]=\"state\"\r\n        (onChangeComplete)=\"changeComplete($event)\"\r\n        (onChange)=\"changeComplete($event)\"\r\n      ></color-circle>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Compact\">\r\n\r\n      <color-compact\r\n        [color]=\"state\"\r\n        (onChangeComplete)=\"changeComplete($event)\"\r\n        (onChange)=\"changeComplete($event)\"\r\n      ></color-compact>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Material\">\r\n\r\n      <color-material\r\n        [color]=\"state\"\r\n        (onChangeComplete)=\"changeComplete($event)\"\r\n        (onChange)=\"changeComplete($event)\"\r\n      ></color-material>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Github\">\r\n\r\n      <color-github\r\n        [color]=\"state\"\r\n        triangle=\"top-right\"\r\n        (onChangeComplete)=\"changeComplete($event)\"\r\n        (onChange)=\"changeComplete($event)\"\r\n      ></color-github>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n</ng-masonry-grid>\r\n<!-- /Grid -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Hue Picker\">\r\n\r\n      <color-hue-picker\r\n        [color]=\"state\"\r\n        [width]=\"'100%'\"\r\n        (onChangeComplete)=\"changeComplete($event)\"\r\n        (onChange)=\"changeComplete($event)\"\r\n      ></color-hue-picker>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Alpha Picker\">\r\n\r\n      <color-alpha-picker\r\n        [color]=\"state\"\r\n        [width]=\"'100%'\"\r\n        (onChangeComplete)=\"changeComplete($event)\"\r\n        (onChange)=\"changeComplete($event)\"\r\n      ></color-alpha-picker>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Swatches\">\r\n\r\n      <color-swatches\r\n        [color]=\"state\"\r\n        [width]=\"'100%'\"\r\n        (onChangeComplete)=\"changeComplete($event)\"\r\n        (onChange)=\"changeComplete($event)\"\r\n      ></color-swatches>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Slider\">\r\n\r\n      <color-slider\r\n        [color]=\"state\"\r\n        (onChangeComplete)=\"changeComplete($event)\"\r\n        (onChange)=\"changeComplete($event)\"\r\n      ></color-slider>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Photoshop\">\r\n\r\n      <color-photoshop className=\"w-100\"\r\n                       [color]=\"state\"\r\n                       (onChangeComplete)=\"changeComplete($event)\">\r\n      </color-photoshop>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- Grid Item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/pickers/color-picker/color-picker.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/pickers/color-picker/color-picker.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Color Pickers</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<ng-masonry-grid class=\"row\"\r\n                 [@visibleInOut]=\"showMasonry\"\r\n                 (onNgMasonryInit)=\"onNgMasonryInit($event)\">\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Basic\">\r\n\r\n      <input class=\"form-control\"\r\n             [style.background]=\"color1\"\r\n             [(colorPicker)]=\"color1\"\r\n             (colorPickerOpen)=\"onEventLog('colorPickerOpen', $event)\"\r\n             (colorPickerClose)=\"onEventLog('colorPickerClose', $event)\"\r\n             (cpInputChange)=\"onEventLog('cpInputChange', $event)\"\r\n             (cpSliderDragStart)=\"onEventLog('cpSliderDragStart', $event)\"\r\n             (cpSliderDragEnd)=\"onEventLog('cpSliderDragEnd', $event)\"/>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Show the color in the input field\">\r\n\r\n      <input class=\"form-control text-white\"\r\n             [value]=\"color2\"\r\n             [style.background]=\"color2\"\r\n             [(colorPicker)]=\"color2\"/>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Output format\">\r\n\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control text-white\"\r\n               [value]=\"color3\"\r\n               [style.background]=\"color3\"\r\n               [cpOutputFormat]=\"'rgba'\"\r\n               [cpPosition]=\"'left'\"\r\n               [(colorPicker)]=\"color3\"/>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control text-white\"\r\n               [value]=\"color4\"\r\n               [style.background]=\"color4\"\r\n               [cpOutputFormat]=\"'hsla'\"\r\n               [cpPosition]=\"'left'\"\r\n               [(colorPicker)]=\"color4\"/>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Changing dialog position\">\r\n\r\n      <input class=\"form-control text-white\"\r\n             [value]=\"color5\"\r\n             [style.background]=\"color5\"\r\n             [cpPosition]=\"'bottom'\"\r\n             [(colorPicker)]=\"color5\"/>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Relative picker to the html element\" body-class=\"text-center\">\r\n\r\n      <button class=\"btn btn-link change-me\"\r\n              [style.color]=\"color6\"\r\n              [cpPosition]=\"'bottom'\"\r\n              [cpPositionOffset]=\"'50%'\"\r\n              [cpPositionRelativeToArrow]=\"true\"\r\n              [(colorPicker)]=\"color6\">Change me!\r\n      </button>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Show cancel button\">\r\n\r\n      <input class=\"form-control text-white\"\r\n             [value]=\"color7\"\r\n             [style.background]=\"color7\"\r\n             [cpPosition]=\"'left'\"\r\n             [cpCancelButton]=\"true\"\r\n             [cpCancelButtonClass]=\"'btn btn-dark btn-sm'\"\r\n             [(colorPicker)]=\"color7\"/>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Change cancel button class\">\r\n\r\n      <input class=\"form-control text-white\"\r\n             [value]=\"color8\"\r\n             [style.background]=\"color8\"\r\n             [cpCancelButton]=\"true\"\r\n             [cpCancelButtonClass]=\"'btn btn-primary btn-sm'\"\r\n             [(colorPicker)]=\"color8\"/>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Show OK button\">\r\n\r\n      <input class=\"form-control text-white\"\r\n             [value]=\"color9\"\r\n             [style.background]=\"color9\"\r\n             [cpOKButton]=\"true\"\r\n             [cpSaveClickOutside]=\"false\"\r\n             [cpOKButtonClass]=\"'btn btn-primary btn-sm'\"\r\n             [(colorPicker)]=\"color9\"/>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Change event color\">\r\n\r\n      <div class=\"form-group\">\r\n\r\n        <input class=\"form-control text-white\"\r\n               [value]=\"color10\"\r\n               [style.background]=\"color10\"\r\n               [cpPosition]=\"'left'\"\r\n               [(colorPicker)]=\"color10\"\r\n               (colorPickerChange)=\"cmykColor=onChangeColorCmyk($event);color10=$event\"/>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6 text-center\">\r\n          <span class=\"cmyk-text\" style=\"color: rgb(0,255,255);\" [style.font-size.px]=\"100 * cmykColor.c\">C</span>\r\n        </div>\r\n\r\n        <div class=\"col-6 text-center\">\r\n          <span class=\"cmyk-text\" style=\"color: rgb(255,0,255)\" [style.font-size.px]=\"100 * cmykColor.m\">M</span>\r\n        </div>\r\n\r\n        <div class=\"col-6 text-center\">\r\n          <span class=\"cmyk-text\" style=\"color: rgb(255,255,0)\" [style.font-size.px]=\"100 * cmykColor.y\">Y</span>\r\n        </div>\r\n\r\n        <div class=\"col-6 text-center\">\r\n          <span class=\"cmyk-text\" [style.font-size.px]=\"100 * cmykColor.k\">K</span>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"With preset colors\">\r\n\r\n      <input class=\"form-control text-white\"\r\n             [value]=\"color11\"\r\n             [style.background]=\"color11\"\r\n             [cpPresetColors]=\"['#fff', '#000', '#2889e9', '#e920e9', '#fff500', 'rgb(236,64,64)']\"\r\n             [(colorPicker)]=\"color11\"/>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Use cpToggle with cpIgnoredElements\">\r\n\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control text-white\"\r\n               #ignoredInput\r\n               [style.background]=\"color12\"\r\n               [cpFallbackColor]=\"'#f200bd'\"\r\n               [cpIgnoredElements]=\"[ignoredButton, ignoredInput]\"\r\n               [(cpToggle)]=\"toggle\"\r\n               [(colorPicker)]=\"color12\"/>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button #ignoredButton class=\"btn btn-primary\" (click)=\"toggle=!toggle;\">Toggle</button>\r\n      </div>\r\n\r\n      <div class=\"form-group\"><b>Toggle status: {{toggle}}</b></div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Change alpha channel behaviour\">\r\n\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control text-white\"\r\n               [value]=\"color13\"\r\n               [style.background]=\"color13\"\r\n               [cpOutputFormat]=\"'rgba'\"\r\n               [cpAlphaChannel]=\"'disabled'\"\r\n               [cpPosition]=\"'left'\"\r\n               [(colorPicker)]=\"color13\"/>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control text-white\"\r\n               [value]=\"color14\"\r\n               [style.background]=\"color14\"\r\n               [cpAlphaChannel]=\"'always'\"\r\n               [cpOutputFormat]=\"'rgba'\"\r\n               [cpPosition]=\"'left'\"\r\n               [(colorPicker)]=\"color14\"/>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control\"\r\n               [value]=\"color15\"\r\n               [style.background]=\"rgbaText\"\r\n               [cpAlphaChannel]=\"'always'\"\r\n               [cpOutputFormat]=\"'hex'\"\r\n               [colorPicker]=\"color15\"\r\n               [cpPosition]=\"'left'\"\r\n               (colorPickerChange)=\"rgbaText=onChangeColorHex8($event);color15=$event\"/>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-4\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Add and remove preset colors\">\r\n\r\n      <input class=\"form-control text-white\"\r\n             [style.background]=\"color16\"\r\n             [cpAlphaChannel]=\"'always'\"\r\n             [cpOutputFormat]=\"'rgba'\"\r\n             [cpPresetColors]=\"['#fff', '#2889e9']\"\r\n             [cpAddColorButton]=\"true\"\r\n             [(colorPicker)]=\"color16\" />\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <ng-masonry-grid-item class=\"col-xl-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Show the dialog permanently\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-6\">\r\n          <span [style.background]=\"arrayColors[selectedColor]\"\r\n                [cpToggle]=\"true\"\r\n                [cpDialogDisplay]=\"'inline'\"\r\n                [cpCancelButton]=\"true\"\r\n                [cpCancelButtonClass]=\"'btn btn-primary btn-sm'\"\r\n                [(colorPicker)]=\"arrayColors[selectedColor]\"></span>\r\n        </div>\r\n\r\n        <div class=\"col-xl-4 offset-xl-2\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\r\n          <div class=\"color-box mb-2\"\r\n               [style.background]=\"arrayColors['color1']\"\r\n               (click)=\"selectedColor='color1'\"></div>\r\n\r\n          <div class=\"color-box mb-2\"\r\n               [style.background]=\"arrayColors['color2']\"\r\n               (click)=\"selectedColor='color2'\"></div>\r\n\r\n          <div class=\"color-box mb-2\"\r\n               [style.background]=\"arrayColors['color3']\"\r\n               (click)=\"selectedColor='color3'\"></div>\r\n\r\n          <div class=\"color-box mb-2\"\r\n               [style.background]=\"arrayColors['color4']\"\r\n               (click)=\"selectedColor='color4'\"></div>\r\n\r\n          <div class=\"color-box mb-2\"\r\n               [style.background]=\"arrayColors['color5']\"\r\n               (click)=\"selectedColor='color5'\"></div>\r\n\r\n          <div class=\"color-box mb-2\"\r\n               [style.background]=\"arrayColors['color6']\"\r\n               (click)=\"selectedColor='color6'\"></div>\r\n\r\n          <div class=\"color-box mb-2\"\r\n               [style.background]=\"arrayColors['color7']\"\r\n               (click)=\"selectedColor='color7'\"></div>\r\n\r\n          <div class=\"color-box\"\r\n               [style.background]=\"arrayColors['color8']\"\r\n               (click)=\"selectedColor='color8'\"></div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </ng-masonry-grid-item>\r\n  <!-- Grid Item -->\r\n\r\n</ng-masonry-grid>\r\n<!-- /grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/pickers/datetime-pickers/datetime-pickers.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/pickers/datetime-pickers/datetime-pickers.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Header -->\r\n<div class=\"dt-page__header\">\r\n  <h1 class=\"dt-page__title\">Date &amp; Time Pickers</h1>\r\n</div>\r\n<!-- /page header -->\r\n\r\n<!-- Grid -->\r\n<div class=\"row\">\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Basic Use\">\r\n\r\n      <div class=\"form-group\">\r\n        <input class=\"form-control\" [owlDateTimeTrigger]=\"dt\" [owlDateTime]=\"dt\">\r\n        <owl-date-time #dt></owl-date-time>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Trigger Picker by Icon\">\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group date\" data-target-input=\"nearest\">\r\n          <input class=\"form-control datetimepicker-input\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\"/>\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dt2\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time #dt2></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-4 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Open Picker as a Dialog\">\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group date\" data-target-input=\"nearest\">\r\n          <input class=\"form-control datetimepicker-input\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\"/>\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dt3\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time [pickerMode]=\"'dialog'\" #dt3></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Stand-alone Calendar and Timer\">\r\n\r\n      <!-- Form -->\r\n      <div class=\"form-row\">\r\n        <div class=\"col-md-6 mb-2\">\r\n          <label for=\"input-date\" class=\"sr-only\">Date</label>\r\n          <input class=\"form-control\" id=\"input-date\" placeholder=\"Date\" [owlDateTime]=\"dt4\"\r\n                 [owlDateTimeTrigger]=\"dt4\"/>\r\n          <owl-date-time [pickerType]=\"'calendar'\" #dt4></owl-date-time>\r\n        </div>\r\n        <div class=\"col-md-6 mb-2\">\r\n          <label for=\"input-time\" class=\"sr-only\">Time</label>\r\n          <input class=\"form-control\" id=\"input-time\" placeholder=\"Time\" [owlDateTime]=\"dt5\"\r\n                 [owlDateTimeTrigger]=\"dt5\"/>\r\n          <owl-date-time [pickerType]=\"'timer'\" #dt5></owl-date-time>\r\n        </div>\r\n      </div>\r\n      <!-- /form -->\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-xl-6 col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Picker with range selection\">\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group date\" data-target-input=\"nearest\">\r\n          <input class=\"form-control datetimepicker-input\" [owlDateTime]=\"dt6\" [owlDateTimeTrigger]=\"dt6\" [selectMode]=\"'range'\"/>\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dt6\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time #dt6></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Picker with rangeFrom and rangeTo selection\">\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"col-form-label\" for=\"datetime-range-from\">Date Time Range From:</label>\r\n        <div class=\"input-group\" data-target-input=\"nearest\">\r\n          <input class=\"form-control datetimepicker-input\"\r\n                 id=\"datetime-range-from\"\r\n                 [(ngModel)]=\"selectedMoments\"\r\n                 [owlDateTime]=\"dt7\"\r\n                 [owlDateTimeTrigger]=\"dt7\"\r\n                 [selectMode]=\"'rangeFrom'\"/>\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dt7\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time #dt7></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"col-form-label\" for=\"datetime-range-to\">Date Time Range To:</label>\r\n        <div class=\"input-group\" data-target-input=\"nearest\">\r\n          <input class=\"form-control datetimepicker-input\"\r\n                 id=\"datetime-range-to\"\r\n                 [(ngModel)]=\"selectedMoments\"\r\n                 [owlDateTime]=\"dt8\"\r\n                 [owlDateTimeTrigger]=\"dt8\"\r\n                 [selectMode]=\"'rangeTo'\"/>\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dt8\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time #dt8></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"DateTime Picker with selected value\">\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"col-form-label\" for=\"datetime-dtPicker1\">Date Time (binding via ngModel)</label>\r\n        <div class=\"input-group\" data-target-input=\"nearest\">\r\n          <input class=\"form-control datetimepicker-input\"\r\n                 id=\"datetime-dtPicker1\"\r\n                 [(ngModel)]=\"datetime1\"\r\n                 [owlDateTimeTrigger]=\"dtPicker1\"\r\n                 [owlDateTime]=\"dtPicker1\"/>\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker1\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time #dtPicker1></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"col-form-label\" for=\"datetime-dtPicker2\">Date Time (via reactive form)</label>\r\n        <div class=\"input-group\" data-target-input=\"nearest\">\r\n          <input class=\"form-control datetimepicker-input\"\r\n                 id=\"datetime-dtPicker2\"\r\n                 [formControl]=\"datetime2\"\r\n                 [owlDateTimeTrigger]=\"dtPicker2\"\r\n                 [owlDateTime]=\"dtPicker2\"/>\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker2\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time #dtPicker2></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"col-form-label\" for=\"datetime-dtPicker3\">Date Time Range</label>\r\n        <div class=\"input-group\" data-target-input=\"nearest\">\r\n          <input class=\"form-control datetimepicker-input\"\r\n                 id=\"datetime-dtPicker3\"\r\n                 [(ngModel)]=\"datetime3\"\r\n                 [selectMode]=\"'range'\"\r\n                 [owlDateTimeTrigger]=\"dtPicker3\"\r\n                 [owlDateTime]=\"dtPicker3\"/>\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker3\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time #dtPicker3></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Setting the calendar starting view\">\r\n\r\n      <div class=\"form-group form-row\">\r\n        <label class=\"col-xl-3 col-form-label text-right\" for=\"multi-years\">Date</label>\r\n        <div class=\"input-group col-xl-9\">\r\n          <input class=\"form-control\" id=\"multi-years\" [owlDateTime]=\"dtPicker4\" [owlDateTimeTrigger]=\"dtPicker4\"/>\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker4\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time [pickerType]=\"'calendar'\" [startView]=\"'multi-years'\" #dtPicker4></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group form-row\">\r\n        <label class=\"col-xl-3 col-form-label text-right\" for=\"single-years\">Date</label>\r\n        <div class=\"input-group col-xl-9\">\r\n          <input class=\"form-control\" id=\"single-years\" [owlDateTime]=\"dtPicker5\" [owlDateTimeTrigger]=\"dtPicker5\"/>\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker5\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time [pickerType]=\"'calendar'\" [startView]=\"'year'\" #dtPicker5></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-md-6\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Setting the picker default start moment\">\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <input class=\"form-control\" [owlDateTime]=\"dtPicker6\" [owlDateTimeTrigger]=\"dtPicker6\"/>\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker6\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time [startAt]=\"startAt\" #dtPicker6></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Picker with only month and year\">\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <input class=\"form-control\" [formControl]=\"datetime4\" [owlDateTime]=\"dtPicker7\"\r\n                 [owlDateTimeTrigger]=\"dtPicker7\"/>\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker7\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time #dtPicker7=\"owlDateTime\"\r\n                         [pickerType]=\"'calendar'\"\r\n                         [startView]=\"'multi-years'\"\r\n                         (yearSelected)=\"chosenYearHandler($event)\"\r\n                         (monthSelected)=\"chosenMonthHandler($event, dtPicker7)\"></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Picker with min & max Restriction\">\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <input class=\"form-control\"\r\n                 [min]=\"min\"\r\n                 [max]=\"max\"\r\n                 [owlDateTime]=\"dtPicker8\"\r\n                 [owlDateTimeTrigger]=\"dtPicker8\"/>\r\n\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker8\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n          <owl-date-time #dtPicker8></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Picker with date filter Restriction\">\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <input class=\"form-control\"\r\n                 [(ngModel)]=\"dateTime5\"\r\n                 [owlDateTimeFilter]=\"myFilter\"\r\n                 [owlDateTimeTrigger]=\"dtPicker9\"\r\n                 [owlDateTime]=\"dtPicker9\"/>\r\n\r\n          <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker9\">\r\n            <div class=\"input-group-text\">\r\n              <gx-icon name=\"calendar\"></gx-icon>\r\n            </div>\r\n          </div>\r\n\r\n          <owl-date-time [startAt]=\"startAt\" #dtPicker9></owl-date-time>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Localization\">\r\n\r\n      <dtp-localization></dtp-localization>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-12\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Validation Errors\">\r\n\r\n      <div class=\"form-row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <div class=\"example-row mb-3\">\r\n            <h4 class=\"text-muted\">Min and Max Validation</h4>\r\n\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\"\r\n                       placeholder=\"Date Time\"\r\n                       [(ngModel)]=\"invalidDateTime1\"\r\n                       [min]=\"min\"\r\n                       [max]=\"max\"\r\n                       [owlDateTimeTrigger]=\"dtPicker11\"\r\n                       [owlDateTime]=\"dtPicker11\"\r\n                       #dateTime1=\"ngModel\"/>\r\n\r\n                <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker11\">\r\n                  <div class=\"input-group-text\">\r\n                    <gx-icon name=\"calendar\"></gx-icon>\r\n                  </div>\r\n                </div>\r\n\r\n                <owl-date-time #dtPicker11></owl-date-time>\r\n              </div>\r\n\r\n              <p class=\"text-danger\" *ngIf=\"dateTime1.invalid && dateTime1.errors.owlDateTimeMin\">\r\n                Date Time value must after {{min | date: 'medium'}}\r\n              </p>\r\n              <p class=\"text-danger\" *ngIf=\"dateTime1.invalid && dateTime1.errors.owlDateTimeMax\">\r\n                Date Time value must before {{max | date: 'medium'}}\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"example-row\">\r\n            <h4 class=\"text-muted\">Filter Validation</h4>\r\n\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\"\r\n                       placeholder=\"Date Time\"\r\n                       [(ngModel)]=\"invalidDateTime2\"\r\n                       [owlDateTimeFilter]=\"myFilter\"\r\n                       [owlDateTimeTrigger]=\"dtPicker12\"\r\n                       [owlDateTime]=\"dtPicker12\"\r\n                       #dateTime2=\"ngModel\"/>\r\n\r\n                <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker12\">\r\n                  <div class=\"input-group-text\">\r\n                    <gx-icon name=\"calendar\"></gx-icon>\r\n                  </div>\r\n                </div>\r\n\r\n                <owl-date-time #dtPicker12></owl-date-time>\r\n              </div>\r\n              <p class=\"text-danger\" *ngIf=\"dateTime2.invalid && dateTime2.errors.owlDateTimeFilter\">\r\n                Date Time value must not be Saturday or Sunday\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 mb-3\">\r\n          <div class=\"example-row mb-3\">\r\n            <h4 class=\"text-muted\">Parse Validation</h4>\r\n\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\"\r\n                       placeholder=\"Date Time\"\r\n                       [(ngModel)]=\"invalidDateTime3\"\r\n                       [owlDateTimeTrigger]=\"dtPicker13\"\r\n                       [owlDateTime]=\"dtPicker13\"\r\n                       #dateTime3=\"ngModel\"/>\r\n\r\n                <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker13\">\r\n                  <div class=\"input-group-text\">\r\n                    <gx-icon name=\"calendar\"></gx-icon>\r\n                  </div>\r\n                </div>\r\n\r\n                <owl-date-time #dtPicker13></owl-date-time>\r\n              </div>\r\n              <p class=\"text-danger\" *ngIf=\"dateTime3.invalid && dateTime3.errors.owlDateTimeParse\">\r\n                Date Time value invalid.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"example-row\">\r\n            <h4 class=\"text-muted\">Range Validation</h4>\r\n\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\"\r\n                       placeholder=\"Date Time\"\r\n                       [(ngModel)]=\"invalidDateTime4\"\r\n                       [selectMode]=\"'range'\"\r\n                       [owlDateTimeTrigger]=\"dtPicker14\"\r\n                       [owlDateTime]=\"dtPicker14\"\r\n                       #dateTime4=\"ngModel\"/>\r\n\r\n                <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker14\">\r\n                  <div class=\"input-group-text\">\r\n                    <gx-icon name=\"calendar\"></gx-icon>\r\n                  </div>\r\n                </div>\r\n\r\n                <owl-date-time #dtPicker14></owl-date-time>\r\n              </div>\r\n              <p class=\"text-danger\" *ngIf=\"dateTime4.invalid && dateTime4.errors.owlDateTimeRange\">\r\n                Date Time Range Invalid.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n  <!-- Grid Item -->\r\n  <div class=\"col-12\">\r\n\r\n    <!-- Card -->\r\n    <gx-card card-title=\"Picker as Inline element\">\r\n\r\n      <div class=\"form-row\">\r\n        <div class=\"col-xl-4 mb-3 d-flex flex-column align-items-center\">\r\n          <owl-date-time-inline [(ngModel)]=\"selectedMoment\"></owl-date-time-inline>\r\n        </div>\r\n\r\n        <div class=\"col-xl-4 mb-3 d-flex flex-column align-items-center\">\r\n          <owl-date-time-inline class=\"mb-3\" pickerType=\"calendar\" [(ngModel)]=\"selectedMoment\"></owl-date-time-inline>\r\n          <owl-date-time-inline pickerType=\"timer\" [(ngModel)]=\"selectedMoment\"></owl-date-time-inline>\r\n        </div>\r\n\r\n        <div class=\"col-xl-4 mb-3 d-flex flex-column align-items-center\">\r\n          <owl-date-time-inline selectMode=\"range\" [(ngModel)]=\"selectedMoments\"></owl-date-time-inline>\r\n        </div>\r\n      </div>\r\n\r\n    </gx-card>\r\n    <!-- /Card -->\r\n\r\n  </div>\r\n  <!-- /Grid Item -->\r\n\r\n</div>\r\n<!-- /Grid -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/pickers/datetime-pickers/localization/localization.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/pickers/datetime-pickers/localization/localization.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\r\n  <div class=\"input-group\">\r\n    <input class=\"form-control\"\r\n           placeholder=\"Date Time (French):\"\r\n           [owlDateTimeFilter]=\"myFilter\"\r\n           [owlDateTimeTrigger]=\"dtPicker10\"\r\n           [owlDateTime]=\"dtPicker10\" />\r\n\r\n    <div class=\"input-group-append\" data-toggle=\"datetimepicker\" [owlDateTimeTrigger]=\"dtPicker10\">\r\n      <div class=\"input-group-text\">\r\n        <gx-icon name=\"calendar\"></gx-icon>\r\n      </div>\r\n    </div>\r\n\r\n    <owl-date-time #dtPicker10></owl-date-time>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/content/extra-components/pickers/color-picker-advanced/color-picker-advanced.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/content/extra-components/pickers/color-picker-advanced/color-picker-advanced.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvZXh0cmEtY29tcG9uZW50cy9waWNrZXJzL2NvbG9yLXBpY2tlci1hZHZhbmNlZC9jb2xvci1waWNrZXItYWR2YW5jZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/content/extra-components/pickers/color-picker-advanced/color-picker-advanced.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/content/extra-components/pickers/color-picker-advanced/color-picker-advanced.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ColorPickerAdvancedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerAdvancedComponent", function() { return ColorPickerAdvancedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gaxon/mix/animations */ "./src/gaxon/mix/animations.ts");



let ColorPickerAdvancedComponent = class ColorPickerAdvancedComponent {
    constructor() {
        this.showMasonry = false;
        this.primaryColor = '#194D33';
        this.state = {
            h: 150,
            s: 0.50,
            l: 0.20,
            a: 1,
        };
    }
    // Get ng masonry grid instance first
    onNgMasonryInit($event) {
        this._masonry = $event;
    }
    ngAfterViewInit() {
        // Check if Masonry instance exists
        if (this._masonry) {
            this._masonry.reloadItems();
            setTimeout(() => {
                this.showMasonry = true;
            }, 0);
        }
    }
    changeComplete($event) {
        this.state = $event.color.hsl;
        this.primaryColor = $event.color.hex;
    }
};
ColorPickerAdvancedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-color-picker-advanced',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./color-picker-advanced.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/pickers/color-picker-advanced/color-picker-advanced.component.html")).default,
        animations: _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_2__["appAnimations"],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./color-picker-advanced.component.scss */ "./src/app/content/extra-components/pickers/color-picker-advanced/color-picker-advanced.component.scss")).default]
    })
], ColorPickerAdvancedComponent);



/***/ }),

/***/ "./src/app/content/extra-components/pickers/color-picker/color-picker.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/extra-components/pickers/color-picker/color-picker.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .change-me {\n  font-size: 24px; }\n\n:host .color-box {\n  width: 100%;\n  height: 25px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9leHRyYS1jb21wb25lbnRzL3BpY2tlcnMvY29sb3ItcGlja2VyL0M6XFxVc2Vyc1xcdmlub1xcQWJiYXNzXFx0cnVzdC1wcmltZS12My9zcmNcXGFwcFxcY29udGVudFxcZXh0cmEtY29tcG9uZW50c1xccGlja2Vyc1xcY29sb3ItcGlja2VyXFxjb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxlQUFlLEVBQUE7O0FBSG5CO0VBT0ksV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2V4dHJhLWNvbXBvbmVudHMvcGlja2Vycy9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cclxuICAuY2hhbmdlLW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIC5jb2xvci1ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/content/extra-components/pickers/color-picker/color-picker.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/extra-components/pickers/color-picker/color-picker.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gaxon/mix/animations */ "./src/gaxon/mix/animations.ts");




let ColorPickerComponent = class ColorPickerComponent {
    constructor(cpService) {
        this.cpService = cpService;
        this.showMasonry = false;
        this.toggle = false;
        this.rgbaText = 'rgba(165, 26, 214, 0.2)';
        this.arrayColors = {
            color1: '#2883e9',
            color2: '#e920e9',
            color3: '#fff500',
            color4: '#0a6211',
            color5: '#ec4040',
            color6: '#7e941b',
            color7: '#730de2',
            color8: '#e20dad'
        };
        this.selectedColor = 'color1';
        this.color1 = '#2889e9';
        this.color2 = '#e920e9';
        this.color3 = '#fff500';
        this.color4 = 'rgb(236,64,64)';
        this.color5 = 'rgba(45,208,45,1)';
        this.color6 = '#1973c0';
        this.color7 = '#f200bd';
        this.color8 = '#a8ff00';
        this.color9 = '#278ce2';
        this.color10 = '#0a6211';
        this.color11 = 'rgb(236,64,64)';
        this.color12 = '#f200bd';
        this.color13 = 'rgba(0, 255, 0, 0.5)';
        this.color14 = 'rgb(0, 255, 255)';
        this.color15 = '#a51ad633';
        this.color16 = '#730de2';
        this.cmykColor = new ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__["Cmyk"](0, 0, 0, 0);
    }
    ngOnInit() {
    }
    // Get ng masonry grid instance first
    onNgMasonryInit($event) {
        this._masonry = $event;
    }
    ngAfterViewInit() {
        // Check if Masonry instance exists
        if (this._masonry) {
            this._masonry.reloadItems();
            setTimeout(() => {
                this.showMasonry = true;
            }, 0);
        }
    }
    onEventLog(event, data) {
        console.log(event, data);
    }
    onChangeColorCmyk(color) {
        const hsva = this.cpService.stringToHsva(color);
        if (hsva) {
            const rgba = this.cpService.hsvaToRgba(hsva);
            return this.cpService.rgbaToCmyk(rgba);
        }
        return new ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__["Cmyk"](0, 0, 0, 0);
    }
    onChangeColorHex8(color) {
        const hsva = this.cpService.stringToHsva(color, true);
        if (hsva) {
            return this.cpService.outputFormat(hsva, 'rgba', null);
        }
        return '';
    }
};
ColorPickerComponent.ctorParameters = () => [
    { type: ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__["ColorPickerService"] }
];
ColorPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-color-picker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./color-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/pickers/color-picker/color-picker.component.html")).default,
        animations: _gaxon_mix_animations__WEBPACK_IMPORTED_MODULE_3__["appAnimations"],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./color-picker.component.scss */ "./src/app/content/extra-components/pickers/color-picker/color-picker.component.scss")).default]
    })
], ColorPickerComponent);



/***/ }),

/***/ "./src/app/content/extra-components/pickers/datetime-pickers/datetime-pickers.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/extra-components/pickers/datetime-pickers/datetime-pickers.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvZXh0cmEtY29tcG9uZW50cy9waWNrZXJzL2RhdGV0aW1lLXBpY2tlcnMvZGF0ZXRpbWUtcGlja2Vycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/content/extra-components/pickers/datetime-pickers/datetime-pickers.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/extra-components/pickers/datetime-pickers/datetime-pickers.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MY_MOMENT_DATE_TIME_FORMATS, DatetimePickersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_MOMENT_DATE_TIME_FORMATS", function() { return MY_MOMENT_DATE_TIME_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePickersComponent", function() { return DatetimePickersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





const moment = moment__WEBPACK_IMPORTED_MODULE_4___default.a ? moment__WEBPACK_IMPORTED_MODULE_4___default.a : moment__WEBPACK_IMPORTED_MODULE_4__;
const MY_MOMENT_DATE_TIME_FORMATS = {
    parseInput: 'MM/YYYY',
    fullPickerInput: 'l LT',
    datePickerInput: 'MM/YYYY',
    timePickerInput: 'LT',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};
let DatetimePickersComponent = class DatetimePickersComponent {
    constructor() {
        this.selectedMoment = new Date();
        this.selectedMoments = [
            new Date(2018, 1, 12, 10, 30),
            new Date(2018, 3, 21, 20, 30)
        ];
        this.datetime1 = new Date();
        this.datetime2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.datetime3 = [new Date(2018, 1, 12, 10, 30), new Date(2018, 3, 21, 20, 30)];
        // Open the picker at this (March 15 2019, 20:30) moment
        this.startAt = new Date(2019, 2, 15, 20, 30);
        this.datetime4 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](moment());
        // Min moment: June 12 2018, 10:30
        this.min = new Date(2018, 6, 12, 10, 30);
        // Max moment: Aug 15 2018, 20:30
        this.max = new Date(2018, 7, 15, 20, 30);
        this.myFilter = ((d) => {
            const dtObj = new Date(d);
            const day = dtObj.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        });
        this.invalidDateTime1 = new Date(2018, 3, 26, 20, 30);
        this.invalidDateTime2 = new Date(2018, 3, 22, 20, 30);
        this.invalidDateTime3 = 'Invalid Date Time Value';
        this.invalidDateTime4 = [new Date(2018, 3, 22, 20, 30), new Date(2018, 3, 12, 20, 30)];
    }
    ngOnInit() {
    }
    chosenYearHandler(normalizedYear) {
        const ctrlValue = this.datetime4.value;
        ctrlValue.year(normalizedYear.year());
        this.datetime4.setValue(ctrlValue);
    }
    chosenMonthHandler(normalizedMonth, datepicker) {
        const ctrlValue = this.datetime4.value;
        ctrlValue.month(normalizedMonth.month());
        this.datetime4.setValue(ctrlValue);
        datepicker.close();
    }
};
DatetimePickersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datetime-pickers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datetime-pickers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/pickers/datetime-pickers/datetime-pickers.component.html")).default,
        providers: [
            // `MomentDateTimeAdapter` and `OWL_MOMENT_DATE_TIME_FORMATS` can be automatically provided by importing
            // `OwlMomentDateTimeModule` in your applications root module. We provide it at the component level
            // here, due to limitations of our example generation script.
            // {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE]},
            { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_3__["OWL_DATE_TIME_FORMATS"], useValue: MY_MOMENT_DATE_TIME_FORMATS }
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datetime-pickers.component.scss */ "./src/app/content/extra-components/pickers/datetime-pickers/datetime-pickers.component.scss")).default]
    })
], DatetimePickersComponent);



/***/ }),

/***/ "./src/app/content/extra-components/pickers/datetime-pickers/localization/localization.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/content/extra-components/pickers/datetime-pickers/localization/localization.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: FrenchIntl, LocalizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrenchIntl", function() { return FrenchIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationComponent", function() { return LocalizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-pick-datetime/date-time/adapter/native-date-time-adapter.class */ "./node_modules/ng-pick-datetime/date-time/adapter/native-date-time-adapter.class.js");




// here is the default text string
class FrenchIntl extends ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__["OwlDateTimeIntl"] {
    constructor() {
        super(...arguments);
        /** A label for the up second button (used by screen readers).  */
        this.upSecondLabel = 'ajouter une seconde';
        /** A label for the down second button (used by screen readers).  */
        this.downSecondLabel = 'moins une seconde';
        /** A label for the up minute button (used by screen readers).  */
        this.upMinuteLabel = 'ajouter une minute';
        /** A label for the down minute button (used by screen readers).  */
        this.downMinuteLabel = 'moins une minute';
        /** A label for the up hour button (used by screen readers).  */
        this.upHourLabel = 'ajouter une heure';
        /** A label for the down hour button (used by screen readers).  */
        this.downHourLabel = 'moins une heure';
        /** A label for the previous month button (used by screen readers). */
        this.prevMonthLabel = 'le mois précédent';
        /** A label for the next month button (used by screen readers). */
        this.nextMonthLabel = 'le mois prochain';
        /** A label for the previous year button (used by screen readers). */
        this.prevYearLabel = 'année précédente';
        /** A label for the next year button (used by screen readers). */
        this.nextYearLabel = 'l\'année prochaine';
        /** A label for the previous multi-year button (used by screen readers). */
        this.prevMultiYearLabel = 'Previous 21 years';
        /** A label for the next multi-year button (used by screen readers). */
        this.nextMultiYearLabel = 'Next 21 years';
        /** A label for the 'switch to month view' button (used by screen readers). */
        this.switchToMonthViewLabel = 'Change to month view';
        /** A label for the 'switch to year view' button (used by screen readers). */
        this.switchToMultiYearViewLabel = 'Choose month and year';
        /** A label for the cancel button */
        this.cancelBtnLabel = 'Annuler';
        /** A label for the set button */
        this.setBtnLabel = 'Confirmer';
        /** A label for the range 'from' in picker info */
        this.rangeFromLabel = 'From';
        /** A label for the range 'to' in picker info */
        this.rangeToLabel = 'To';
        /** A label for the hour12 button (AM) */
        this.hour12AMLabel = 'AM';
        /** A label for the hour12 button (PM) */
        this.hour12PMLabel = 'PM';
    }
}
let LocalizationComponent = class LocalizationComponent {
    constructor() {
        this.myFilter = ((d) => {
            const dtObj = new Date(d);
            const day = dtObj.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        });
    }
    ngOnInit() {
    }
};
LocalizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dtp-localization',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./localization.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/extra-components/pickers/datetime-pickers/localization/localization.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        providers: [
            // The locale would typically be provided on the root module of your application. We do it at
            // the component level here, due to limitations of our example generation script.
            { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__["OWL_DATE_TIME_LOCALE"], useValue: 'fr' },
            { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__["DateTimeAdapter"], useClass: ng_pick_datetime_date_time_adapter_native_date_time_adapter_class__WEBPACK_IMPORTED_MODULE_3__["NativeDateTimeAdapter"], deps: [ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__["OWL_DATE_TIME_LOCALE"]] },
            { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_2__["OwlDateTimeIntl"], useClass: FrenchIntl },
        ],
    })
], LocalizationComponent);



/***/ }),

/***/ "./src/app/content/extra-components/pickers/pickers.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/content/extra-components/pickers/pickers.module.ts ***!
  \********************************************************************/
/*! exports provided: PickersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickersModule", function() { return PickersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gaxon/modules */ "./src/gaxon/modules/index.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var ng_masonry_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-masonry-grid */ "./node_modules/ng-masonry-grid/ng-masonry-grid.umd.js");
/* harmony import */ var ng_masonry_grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_masonry_grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ngx_color_alpha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color/alpha */ "./node_modules/ngx-color/alpha/fesm2015/ngx-color-alpha.js");
/* harmony import */ var ngx_color_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-color/block */ "./node_modules/ngx-color/block/fesm2015/ngx-color-block.js");
/* harmony import */ var ngx_color_chrome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-color/chrome */ "./node_modules/ngx-color/chrome/fesm2015/ngx-color-chrome.js");
/* harmony import */ var ngx_color_circle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-color/circle */ "./node_modules/ngx-color/circle/fesm2015/ngx-color-circle.js");
/* harmony import */ var ngx_color_compact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-color/compact */ "./node_modules/ngx-color/compact/fesm2015/ngx-color-compact.js");
/* harmony import */ var ngx_color_github__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-color/github */ "./node_modules/ngx-color/github/fesm2015/ngx-color-github.js");
/* harmony import */ var ngx_color_hue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-color/hue */ "./node_modules/ngx-color/hue/fesm2015/ngx-color-hue.js");
/* harmony import */ var ngx_color_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-color/material */ "./node_modules/ngx-color/material/fesm2015/ngx-color-material.js");
/* harmony import */ var ngx_color_photoshop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-color/photoshop */ "./node_modules/ngx-color/photoshop/fesm2015/ngx-color-photoshop.js");
/* harmony import */ var ngx_color_sketch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-color/sketch */ "./node_modules/ngx-color/sketch/fesm2015/ngx-color-sketch.js");
/* harmony import */ var ngx_color_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-color/slider */ "./node_modules/ngx-color/slider/fesm2015/ngx-color-slider.js");
/* harmony import */ var ngx_color_swatches__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-color/swatches */ "./node_modules/ngx-color/swatches/fesm2015/ngx-color-swatches.js");
/* harmony import */ var ngx_color_twitter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-color/twitter */ "./node_modules/ngx-color/twitter/fesm2015/ngx-color-twitter.js");
/* harmony import */ var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./color-picker/color-picker.component */ "./src/app/content/extra-components/pickers/color-picker/color-picker.component.ts");
/* harmony import */ var _color_picker_advanced_color_picker_advanced_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./color-picker-advanced/color-picker-advanced.component */ "./src/app/content/extra-components/pickers/color-picker-advanced/color-picker-advanced.component.ts");
/* harmony import */ var _datetime_pickers_localization_localization_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./datetime-pickers/localization/localization.component */ "./src/app/content/extra-components/pickers/datetime-pickers/localization/localization.component.ts");
/* harmony import */ var _datetime_pickers_datetime_pickers_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./datetime-pickers/datetime-pickers.component */ "./src/app/content/extra-components/pickers/datetime-pickers/datetime-pickers.component.ts");








 // <color-alpha-picker></color-alpha-picker>
 // <color-block></color-block>
 // <color-chrome></color-chrome>
 // <color-circle></color-circle>
 // <color-compact></color-compact>
 // <color-github></color-github>
 // <color-hue-picker></color-hue-picker>
 // <color-material></color-material>
 // <color-photoshop></color-photoshop>
 // <color-sketch></color-sketch>
 // <color-slider></color-slider>
 // <color-swatches></color-swatches>
 // <color-twitter></color-twitter>




const routes = [
    {
        path: 'color-picker',
        component: _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_21__["ColorPickerComponent"]
    },
    {
        path: 'color-picker-adv',
        component: _color_picker_advanced_color_picker_advanced_component__WEBPACK_IMPORTED_MODULE_22__["ColorPickerAdvancedComponent"]
    },
    {
        path: 'datetime-pickers',
        component: _datetime_pickers_datetime_pickers_component__WEBPACK_IMPORTED_MODULE_24__["DatetimePickersComponent"]
    }
];
let PickersModule = class PickersModule {
};
PickersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gaxon_modules__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ng_masonry_grid__WEBPACK_IMPORTED_MODULE_6__["NgMasonryGridModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"],
            ngx_color_alpha__WEBPACK_IMPORTED_MODULE_8__["ColorAlphaModule"],
            ngx_color_block__WEBPACK_IMPORTED_MODULE_9__["ColorBlockModule"],
            ngx_color_chrome__WEBPACK_IMPORTED_MODULE_10__["ColorChromeModule"],
            ngx_color_circle__WEBPACK_IMPORTED_MODULE_11__["ColorCircleModule"],
            ngx_color_compact__WEBPACK_IMPORTED_MODULE_12__["ColorCompactModule"],
            ngx_color_github__WEBPACK_IMPORTED_MODULE_13__["ColorGithubModule"],
            ngx_color_hue__WEBPACK_IMPORTED_MODULE_14__["ColorHueModule"],
            ngx_color_material__WEBPACK_IMPORTED_MODULE_15__["ColorMaterialModule"],
            ngx_color_photoshop__WEBPACK_IMPORTED_MODULE_16__["ColorPhotoshopModule"],
            ngx_color_sketch__WEBPACK_IMPORTED_MODULE_17__["ColorSketchModule"],
            ngx_color_slider__WEBPACK_IMPORTED_MODULE_18__["ColorSliderModule"],
            ngx_color_swatches__WEBPACK_IMPORTED_MODULE_19__["ColorSwatchesModule"],
            ngx_color_twitter__WEBPACK_IMPORTED_MODULE_20__["ColorTwitterModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlNativeDateTimeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_21__["ColorPickerComponent"],
            _color_picker_advanced_color_picker_advanced_component__WEBPACK_IMPORTED_MODULE_22__["ColorPickerAdvancedComponent"],
            _datetime_pickers_localization_localization_component__WEBPACK_IMPORTED_MODULE_23__["LocalizationComponent"],
            _datetime_pickers_datetime_pickers_component__WEBPACK_IMPORTED_MODULE_24__["DatetimePickersComponent"]
        ]
    })
], PickersModule);



/***/ })

}]);
//# sourceMappingURL=pickers-pickers-module-es2015.js.map