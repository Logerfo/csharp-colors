# C# Colors
This extension is based on a similar work by [@sergiirocks](https://github.com/sergiirocks/vscode-ext-color-highlight).

## Features
- `Color.FromARGB(int)` (decimal, binary and hex)
- `Color.FromARGB(int, int, int)` (decimal)
- `Color.FromARGB(int, int, int, int)` (decimal)
- `Color.?` (all of them, except `Transparent`)
- `KnownColor.?` (not all of them, only the ones available in `Color.?`)

## Contributing

Feel free to open any issues or pull requests. I will try to make time for them, if any.

### Missing features
- `Color.FromARGB(int, int, int)` (hex/binary/mixed)
- `Color.FromARGB(int, int, int, int)` (hex/binary/mixed)
- `Color.FromARGB(int, Color)` when `Color` is highlighted
- Known colors which varies by OS theme.

## Release Notes

See [here](CHANGELOG.md).

-----------------------------------------------------------------------------------------------------------
