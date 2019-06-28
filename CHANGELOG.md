# Change Log

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
- Errors are not swallowed anymore. Previous code which used to depend on erros is now rewritten. No errors are expected. If you see any, please report.

## 0.0.1 - 2018-10-08

Initial release.
