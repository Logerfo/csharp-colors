# Changelog

## 0.1.8 - 2020-03-04

- Fixed some cases where floating points was not correctly recognized (#29).

## 0.1.7 - 2019-09-27

- Support for zero-less float for `new Color` (e.g. `.5f`).
- Fixed some float values being invalid for `new Color` because it would lead to a non-integer number when multiplied by 255. Those numbers are now floor rounded.
- Fixed Unity's `new Color` and `new Color32` targeting `a, r, g, b` instead of `r, g, b, a` (#25).

## 0.1.6 - 2019-09-27

- Support for Unity `Color32` (#25).

## 0.1.5 - 2019-07-31

- Support for Unity static colors (#24).
- Fixed some missing color names (`WhiteSmoke`, `Yellow` and `YellowGreen`).

## 0.1.4 - 2019-07-31

- Support for Unity colors (#24).
  - `new Color(float, float, float)`.
  - `new Color(float, float, float, float)`.
  - Allows `UnityEngine.` leading qualifier.
- Fixed `Color.FromArgb` (any overload) not allowing leading `+`.
- Fixed `Color.FromArgb` not being highlighted when used with four arguments and there is one or more spaces before the first comma.
- Source code is now more succinct and less error prone.

## 0.1.3 - 2019-05-13

Removed the command from the palette.

## 0.1.2 - 2019-03-13

Performance improvements.

## 0.1.1 - 2019-01-15

Fixed the close parenthesis being highlighted (`FromArgb`).  
Fixed misplaced highlight when the method invocation has valid whitespace (`FromArgb`).

## 0.1.0 - 2019-01-10

The extension is now only activated when a C# file is open, instead of starting up with VS Code. 

## 0.0.9 - 2019-01-04

Meta changes only.

## 0.0.8 - 2018-10-24

Changed command from `extension.colorHighlight` to `csharp-colors.colorHighlight`.

## 0.0.7 - 2018-10-15

Implemented support for `Color.FromName`, which works for the same names as `Color.?` and `KnownColor.?`, except `Transparent` and `Empty`.

## 0.0.6 - 2018-10-15

The extension now has a preview icon.  
Minor adjustments.

## 0.0.5 - 2018-10-15

`KnownColor` now supports system colors, but with fixed colors based on mono, not getting the actual system color.

## 0.0.4 - 2018-10-11

Fixed extension not working for files opened after the extension is loaded.

## 0.0.3 - 2018-10-09

Minor adjustments.

## 0.0.2 - 2018-10-09

- Every `int` parameter now supports decimal, hex and binary, even if the parameters are mixed.
- Underscore (`_`) digit separator is now supported.
- Whitespace between tokens are now supported.
- Errors are not swallowed anymore. Previous code which used to depend on errors is now rewritten. No errors are expected. If you see any, please report them.

## 0.0.1 - 2018-10-08

Initial release.
