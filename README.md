# C# Colors
This extension is based on a similar work by [@sergiirocks](https://github.com/sergiirocks/vscode-ext-color-highlight).

## Features
- `Color.FromARGB(int)`
- `Color.FromARGB(int, int, int)`
- `Color.FromARGB(int, int, int, int)`
- `Color.?` (all of them, except `Transparent`)
- `KnownColor.?` (not all of them, only the ones available in `Color.?`)

Every `int` parameter works for decimal, binary and hex. Underscore (`_`) digit separator is supported.

## Contributing

Feel free to open any issues or pull requests. I will try to make time for them, if any.

### Missing features
- `Color.FromARGB(int, Color)` when `Color` is highlighted
- Known colors which varies by OS theme.

## Release Notes

See [here](CHANGELOG.md).

-----------------------------------------------------------------------------------------------------------
