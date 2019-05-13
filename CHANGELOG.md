# Change Log

## 0.0.1

Initial release

## 0.0.2

- Every `int` parameter now supports decimal, hex and binary, even if the parameters are mixed.
- Underscore (`_`) digit separator is now supported.
- Whitespace between tokens are now supported.
- Errors are not swallowed anymore. Previous code which used to depend on erros is now rewritten. No errors are expected. If you see any, please report.

## 0.0.3

Minor adjustments.

## 0.0.4

Fixed extension not working for files opened after the extension is loaded.

## 0.0.5

KnownColor now supports system colors, but with fixed colors based on mono, not getting the actual system color.

## 0.0.6

The extension now has a preview icon.  
Minor adjustments.

## 0.0.7

Implemented support for `Color.FromName`, which works for the same names as `Color.?` and `KnownColor.?`, except `Transparent` and `Empty`.

## 0.0.8

Changed command from `extension.colorHighlight` to `csharp-colors.colorHighlight`.

## 0.0.9

Meta changes only.

## 0.1.0

The extension is now only activated when a C# file is open, instead of starting up with VS Code. 

## 0.1.1

Fixed the close parenthesis being highlighted (`FromArgb`).  
Fixed misplaced highlight when the method invocation has valid whitespace (`FromArgb`).

## 0.1.2

Performance improvements.

## 0.1.3

Removed the command from the palette.
