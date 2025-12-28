# Princess Casino Vegas - Mobile Guide App

A Progressive Web App (PWA) guide for Princess Casino Vegas featuring hotel information, dining options, games guide, and location services.

## Features

- 📱 **Mobile-First Design** - Optimized for mobile devices
- 🎰 **Games Guide** - Information about Bingo, Blackjack, Roulette, and more
- 🏨 **Hotel & Services** - Princess Vegas Hotel, Vegas Cabaret, Sinatra Restaurant
- 📍 **Location** - Easy navigation and directions
- 💬 **Contact** - Get in touch with the casino
- 📴 **Offline Support** - Works offline with service worker caching
- 🏠 **Installable** - Can be installed on mobile home screen

## Pages

1. **Home** - Carousel with promotions, quick access to services
2. **Games** - Guide to available games (Bingo, Perfect Pairs, Blackjack, Roulette)
3. **Services** - Hotel, Cabaret, Restaurant information
4. **About** - Information about Princess Casino Vegas
5. **Location** - Map and directions
6. **Contact** - Contact form

## Installation

### For Development

1. Open `index.html` in a web browser
2. For best experience, use Chrome DevTools mobile emulation

### For Production (Play Store)

To prepare this PWA for the Google Play Store, you'll need to:

1. **Generate App Icons**
   - Create `icon-192.png` (192x192px)
   - Create `icon-512.png` (512x512px)
   - Use the crown logo with blue background
   - You can use the provided SVG template `icon-192.png.svg` as reference

2. **Use Trusted Web Activity (TWA)**
   - Use [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) to convert PWA to Android app
   - Install Bubblewrap: `npm i -g @bubblewrap/cli`
   - Initialize: `bubblewrap init --manifest https://yourdomain.com/manifest.json`
   - Build: `bubblewrap build`
   - The output APK can be uploaded to Play Store

3. **Alternative: PWA Builder**
   - Visit [PWABuilder.com](https://www.pwabuilder.com/)
   - Enter your app URL
   - Download Android package
   - Upload to Play Store

## Technologies

- Pure HTML5, CSS3, JavaScript (No frameworks)
- Progressive Web App (PWA)
- Service Worker for offline functionality
- Responsive design
- Touch-optimized interface

## Browser Support

- Chrome (recommended)
- Safari (iOS)
- Firefox
- Edge

## Customization

To customize for your casino:

1. Update text content in `index.html`
2. Replace icon files with your branding
3. Modify color scheme in CSS (search for `#0000cc` for primary blue)
4. Update contact information and addresses

## License

This is a guide app template. Customize as needed for your establishment.

## Disclaimer

This app is for informational purposes only. No real gambling functionality is included.
