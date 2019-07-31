[![Version](https://vsmarketplacebadge.apphb.com/version-short/logerfo.csharp-colors.svg)](https://marketplace.visualstudio.com/items?itemName=logerfo.csharp-colors)
[![Rating](https://vsmarketplacebadge.apphb.com/rating-short/logerfo.csharp-colors.svg)](https://marketplace.visualstudio.com/items?itemName=logerfo.csharp-colors)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/logerfo.csharp-colors.svg)](https://marketplace.visualstudio.com/items?itemName=logerfo.csharp-colors)
[![Build Status](https://travis-ci.org/Logerfo/csharp-colors.svg?branch=master)](https://travis-ci.org/Logerfo/csharp-colors)
[![Known Vulnerabilities](https://snyk.io/test/github/logerfo/csharp-colors/badge.svg)](https://snyk.io/test/github/logerfo/csharp-colors)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FLogerfo%2Fcsharp-colors.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FLogerfo%2Fcsharp-colors?ref=badge_shield)
[![Dependencies Status](https://david-dm.org/logerfo/csharp-colors/dev-status.svg)](https://david-dm.org/logerfo/csharp-colors?type=dev)

# C# Colors

This extension is based on a [similar work](https://github.com/sergiirocks/vscode-ext-color-highlight) by [@sergiirocks](https://github.com/sergiirocks).

## Features

- `Color.FromARGB(int)`
- `Color.FromARGB(int, int, int)`
- `Color.FromARGB(int, int, int, int)`
- `Color.?`
- `KnownColor.?`
- `Color.FromName("?")`
- `new Color(float, float, float)`
- `new Color(float, float, float, float)`

The `float` overloads is meant to be used in Unity and allows the `UnityEngine.` leading qualifier.  
Every `int` parameter works for decimal, binary and hex.  
Underscore (`_`) digit separator is supported. Leading `+` is supported.  
See supported color names and their values for `Color.?`, `KnownColor.?` and `Color.FromName("?")` [here](https://github.com/Logerfo/csharp-colors/blob/master/src/strategies/colors.json) and [here](https://github.com/Logerfo/csharp-colors/blob/master/src/strategies/systemcolors.json). That's all of them, except for `Transparent` and `Empty`, which does not make sense to be supported in this extension. System colors are not OS theme sensitive, their values are fixed based on the [mono implementation](https://github.com/mono/mono/blob/c5b88ec4f323f2bdb7c7d0a595ece28dae66579c/mcs/class/System.Drawing/System.Drawing/KnownColors.cs#L35).

## Contributing

Feel free to open any issues or pull requests. I will try to make time for them, if any.

### Missing features

#### `Color.FromARGB(int, Color)` when `Color` is highlighted.

#### [Known colors which varies by OS theme](https://github.com/Logerfo/csharp-colors/pull/2)

Currently, Known system colors points to fixed colors based on mono. [See](https://github.com/mono/mono/blob/c5b88ec4f323f2bdb7c7d0a595ece28dae66579c/mcs/class/System.Drawing/System.Drawing/KnownColors.cs#L35).  
I don't known if that's possible with the current VSCode API. [See](https://github.com/mono/mono/blob/c5b88ec4f323f2bdb7c7d0a595ece28dae66579c/mcs/class/System.Drawing/System.Drawing/KnownColors.cs#L232).

## [Release Notes](CHANGELOG.md)

## Donate

<img src="https://i.imgur.com/ndlBtuX.png" width="200">

BTC: 1LoGErFoNzE1gCA5fzk6A82nV6iJdKssSZ

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FLogerfo%2Fcsharp-colors.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FLogerfo%2Fcsharp-colors?ref=badge_large)
