# EdgeExtensionVs2026

A simple Edge browser extension that can be modified with Visual Studio 2026.

## Features

- Simple popup interface with a clickable button
- Background service worker for extension logic
- Built with JavaScript (no build tools required for core functionality)
- Visual Studio 2026 solution and project files included

## Project Structure

```
EdgeExtensionVs2026/
├── manifest.json          # Extension manifest (Manifest V3)
├── popup.html            # Extension popup UI
├── popup.js              # Popup script
├── background.js         # Background service worker
├── build.js              # Build script
├── package.json          # NPM package configuration
├── EdgeExtensionVs2026.sln    # Visual Studio solution file
├── EdgeExtensionVs2026.esproj # Visual Studio project file
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── dist/                 # Build output (generated)
```

## Building the Extension

### Using npm

```bash
npm run build
```

This will create a `dist/` directory with all the extension files ready for publishing.

### Using Visual Studio 2026

1. Open `EdgeExtensionVs2026.sln` in Visual Studio 2026
2. Build the solution (Ctrl+Shift+B)
3. The extension will be built to the `dist/` directory

## Loading the Extension in Edge

1. Build the extension using one of the methods above
2. Open Microsoft Edge
3. Navigate to `edge://extensions/`
4. Enable "Developer mode" (toggle in the bottom left)
5. Click "Load unpacked"
6. Select the `dist/` directory
7. The extension should now appear in your extensions list

## Development

### Modifying the Extension

- Edit `popup.html` and `popup.js` to change the popup interface
- Edit `background.js` to add background functionality
- Edit `manifest.json` to add permissions or change extension metadata

After making changes, run the build command again and reload the extension in Edge.

### Clean Build

To remove the dist directory:

```bash
npm run clean
```

## Requirements

- Node.js (for running build scripts)
- Microsoft Edge browser (for testing)
- Visual Studio 2026 (optional, for IDE support)

## License

MIT