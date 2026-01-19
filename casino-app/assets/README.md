# Assets Directory

This directory contains app icons, favicons, and other assets for the Princess Casino Vegas navigation app.

## Required Assets

### App Icons (PWA / Mobile)

These icons are referenced in `manifest.json`:

- `icon-72x72.png` - 72×72px
- `icon-96x96.png` - 96×96px
- `icon-128x128.png` - 128×128px
- `icon-144x144.png` - 144×144px
- `icon-152x152.png` - 152×152px
- `icon-192x192.png` - 192×192px
- `icon-384x384.png` - 384×384px
- `icon-512x512.png` - 512×512px

### Favicons

- `favicon-16x16.png` - 16×16px - Browser tab icon (small)
- `favicon-32x32.png` - 32×32px - Browser tab icon (standard)
- `favicon.ico` - Multi-size ICO file (16px, 32px, 48px)

### Apple Touch Icons

- `apple-touch-icon.png` - 180×180px - iOS home screen icon

### Android Icons (for Cordova/Capacitor)

Create `icon/android/` subdirectory:
- `ldpi.png` - 36×36px
- `mdpi.png` - 48×48px
- `hdpi.png` - 72×72px
- `xhdpi.png` - 96×96px
- `xxhdpi.png` - 144×144px
- `xxxhdpi.png` - 192×192px

### iOS Icons (for Cordova/Capacitor)

Create `icon/ios/` subdirectory:
- `icon-20.png` - 20×20px
- `icon-20@2x.png` - 40×40px
- `icon-20@3x.png` - 60×60px
- `icon-29.png` - 29×29px
- `icon-29@2x.png` - 58×58px
- `icon-29@3x.png` - 87×87px
- `icon-40.png` - 40×40px
- `icon-40@2x.png` - 80×80px
- `icon-40@3x.png` - 120×120px
- `icon-50.png` - 50×50px
- `icon-50@2x.png` - 100×100px
- `icon-60@2x.png` - 120×120px
- `icon-60@3x.png` - 180×180px
- `icon-72.png` - 72×72px
- `icon-72@2x.png` - 144×144px
- `icon-76.png` - 76×76px
- `icon-76@2x.png` - 152×152px
- `icon-83.5@2x.png` - 167×167px
- `icon-1024.png` - 1024×1024px (App Store)

### Play Store Assets

Create `playstore/` subdirectory:
- `icon-512.png` - 512×512px - Play Store icon (required)
- `feature-graphic.png` - 1024×500px - Feature graphic
- `banner.png` - 320×180px - TV banner (optional)

### Screenshots

Create `screenshots/` subdirectory:
- `screenshot-home.png` - 1080×1920px - Home screen
- `screenshot-games.png` - 1080×1920px - Games screen
- `screenshot-services.png` - 1080×1920px - Services screen
- `screenshot-location.png` - 1080×1920px - Location screen
- `screenshot-promotions.png` - 1080×1920px - Promotions screen

## Icon Design Guidelines

### Design Concept

The app icon should feature:
- **Crown logo** - Princess Casino Vegas signature element
- **Royal blue background** - Brand color (#1e3a8a)
- **White crown** - High contrast, recognizable
- **Clean, simple design** - Readable at small sizes

### Example Design
```
┌─────────────────┐
│                 │
│    ♔ (crown)    │
│                 │
│   PRINCESS      │
│    VEGAS        │
│                 │
└─────────────────┘
Background: Royal blue gradient
Crown: White
Text: White (optional, for larger icons)
```

### Technical Requirements

1. **Format**: PNG with transparency (24-bit or 32-bit)
2. **Color Space**: sRGB
3. **No transparency** for Android adaptive icons
4. **Safe area**: Keep content within 80% of canvas
5. **Maskable icons**: Design with 20% padding for adaptive icons

### Colors

Primary:
- Royal Blue: #1e3a8a
- Bright Blue: #3b82f6
- Gold Accent: #f59e0b
- White: #ffffff

## Creating Icons

### Option 1: Design Tool (Recommended)

Use Figma, Adobe XD, or Sketch:

1. Create 1024×1024px artboard
2. Design icon with crown logo
3. Export all required sizes

**Figma Template**:
```
Frame: 1024×1024px
Background: Linear gradient (#1e3a8a → #3b82f6)
Crown SVG: 512×512px, centered
Text (optional): "PCV" or crown only
Padding: 102px (10% on each side)
```

### Option 2: Icon Generator Tools

Online tools to generate all sizes from one master icon:

- [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator)
- [App Icon Generator](https://appicon.co/)
- [Favicon Generator](https://realfavicongenerator.net/)
- [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/)

### Option 3: Command Line (ImageMagick)

```bash
# Install ImageMagick
brew install imagemagick  # macOS
apt-get install imagemagick  # Linux

# Create from master icon (1024x1024px source)
convert master-icon.png -resize 512x512 icon-512x512.png
convert master-icon.png -resize 192x192 icon-192x192.png
convert master-icon.png -resize 144x144 icon-144x144.png
convert master-icon.png -resize 128x128 icon-128x128.png
convert master-icon.png -resize 96x96 icon-96x96.png
convert master-icon.png -resize 72x72 icon-72x72.png
convert master-icon.png -resize 32x32 favicon-32x32.png
convert master-icon.png -resize 16x16 favicon-16x16.png
```

### Option 4: Automated Script

Create `generate-icons.sh`:
```bash
#!/bin/bash

# Set source icon
SOURCE="master-icon.png"

# PWA Icons
convert $SOURCE -resize 512x512 icon-512x512.png
convert $SOURCE -resize 384x384 icon-384x384.png
convert $SOURCE -resize 192x192 icon-192x192.png
convert $SOURCE -resize 152x152 icon-152x152.png
convert $SOURCE -resize 144x144 icon-144x144.png
convert $SOURCE -resize 128x128 icon-128x128.png
convert $SOURCE -resize 96x96 icon-96x96.png
convert $SOURCE -resize 72x72 icon-72x72.png

# Favicons
convert $SOURCE -resize 32x32 favicon-32x32.png
convert $SOURCE -resize 16x16 favicon-16x16.png

# Apple Touch Icon
convert $SOURCE -resize 180x180 apple-touch-icon.png

# Android Icons
mkdir -p icon/android
convert $SOURCE -resize 192x192 icon/android/xxxhdpi.png
convert $SOURCE -resize 144x144 icon/android/xxhdpi.png
convert $SOURCE -resize 96x96 icon/android/xhdpi.png
convert $SOURCE -resize 72x72 icon/android/hdpi.png
convert $SOURCE -resize 48x48 icon/android/mdpi.png
convert $SOURCE -resize 36x36 icon/android/ldpi.png

echo "All icons generated successfully!"
```

## Master Icon Template

Create a master icon at **1024×1024px** with:

### SVG Code for Crown
```svg
<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="crownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e0e7ff;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Crown body -->
  <polygon points="10,45 25,25 35,35 50,15 65,35 75,25 90,45 85,50 15,50"
           fill="url(#crownGradient)"
           stroke="#ffffff"
           stroke-width="1"/>

  <!-- Crown jewels -->
  <circle cx="25" cy="25" r="4" fill="#f59e0b"/>
  <circle cx="50" cy="15" r="4" fill="#f59e0b"/>
  <circle cx="75" cy="25" r="4" fill="#f59e0b"/>

  <!-- Crown base -->
  <rect x="15" y="50" width="70" height="3" fill="#ffffff"/>
  <rect x="12" y="53" width="76" height="2" fill="#ffffff"/>
</svg>
```

## Verification Checklist

Before deployment:

- [ ] All required icon sizes generated
- [ ] Icons display correctly at small sizes (16px, 32px)
- [ ] Transparent backgrounds work properly
- [ ] Icons look good on both light and dark backgrounds
- [ ] manifest.json references correct icon paths
- [ ] Favicons appear in browser tabs
- [ ] Apple touch icon displays on iOS home screen
- [ ] Android adaptive icons use safe area
- [ ] 512×512 icon ready for Play Store

## Testing Icons

### Browser
1. Open app in browser
2. Check favicon in tab
3. Inspect manifest in DevTools (Application → Manifest)

### iOS
1. Open in Safari
2. Tap Share → Add to Home Screen
3. Verify icon appears correctly

### Android
1. Open in Chrome
2. Menu → Add to Home Screen
3. Verify icon appears correctly

### PWA
1. Use Lighthouse audit in Chrome DevTools
2. Check PWA installability
3. Verify all icon sizes present

## Resources

- [PWA Icon Requirements](https://web.dev/add-manifest/)
- [Android Icon Guidelines](https://developer.android.com/google-play/resources/icon-design-specifications)
- [iOS Icon Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Favicon Checker](https://realfavicongenerator.net/favicon_checker)

---

## Quick Start

To get started quickly:

1. **Create master icon** (1024×1024px) with crown logo
2. **Use online generator** like appicon.co to create all sizes
3. **Download and extract** to this directory
4. **Update paths** in manifest.json and index.html
5. **Test** in browser and on mobile devices

---

For questions about icon design or generation, contact the design team or refer to DEPLOYMENT.md.
