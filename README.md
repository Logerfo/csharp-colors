[![Version](https://vsmarketplacebadge.apphb.com/version-short/logerfo.csharp-colors.svg)](https://marketplace.visualstudio.com/items?itemName=logerfo.csharp-colors)
[![Rating](https://vsmarketplacebadge.apphb.com/rating-short/logerfo.csharp-colors.svg)](https://marketplace.visualstudio.com/items?itemName=logerfo.csharp-colors)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/logerfo.csharp-colors.svg)](https://marketplace.visualstudio.com/items?itemName=logerfo.csharp-colors)
[![Build Status](https://travis-ci.org/Logerfo/csharp-colors.svg?branch=master)](https://travis-ci.org/Logerfo/csharp-colors)
[![Known Vulnerabilities](https://snyk.io/test/github/logerfo/csharp-colors/badge.svg)](https://snyk.io/test/github/logerfo/csharp-colors)

# C# Colors
This extension is based on a [similar work](https://github.com/sergiirocks/vscode-ext-color-highlight) by [@sergiirocks](https://github.com/sergiirocks).

## Features
- `Color.FromARGB(int)`
- `Color.FromARGB(int, int, int)`
- `Color.FromARGB(int, int, int, int)`
- `Color.?`
- `KnownColor.?`
- `Color.FromName("?")`

Every `int` parameter works for decimal, binary and hex. Underscore (`_`) digit separator is supported.  
See supported color names and their values for `Color.?`, `KnownColor.?` and `Color.FromName("?")` [here](https://github.com/Logerfo/csharp-colors/blob/master/src/strategies/colors.json) and [here](https://github.com/Logerfo/csharp-colors/blob/master/src/strategies/systemcolors.json). That's all of them, except for `Transparent` and `Empty`, which does not make sense to be supported in this extension. System colors are not OS theme sensitive, their values are fixed based on the [mono implementation](https://github.com/mono/mono/blob/c5b88ec4f323f2bdb7c7d0a595ece28dae66579c/mcs/class/System.Drawing/System.Drawing/KnownColors.cs#L35).

## Contributing

Feel free to open any issues or pull requests. I will try to make time for them, if any.

### Missing features
#### `Color.FromARGB(int, Color)` when `Color` is highlighted.
#### [Known colors which varies by OS theme](#2)
Currently, Known system colors points to fixed colors based on mono. [See](https://github.com/mono/mono/blob/c5b88ec4f323f2bdb7c7d0a595ece28dae66579c/mcs/class/System.Drawing/System.Drawing/KnownColors.cs#L35).  
I don't known if that's possible with the current VSCode API. [See](https://github.com/mono/mono/blob/c5b88ec4f323f2bdb7c7d0a595ece28dae66579c/mcs/class/System.Drawing/System.Drawing/KnownColors.cs#L232).

## [Release Notes](CHANGELOG.md)
