# Princess Casino Vegas - Navigation App

A mobile-first navigation application for Princess Casino Vegas customers to explore casino services, amenities, and locations.

## Overview

This is a **non-gambling navigation app** designed for Google Play Store distribution. It helps casino visitors navigate the facilities, learn about services, view promotions, and find information about Princess Casino Vegas.

## Features

### 🎰 Main Features
- **Splash Screen**: Animated loading screen with Princess Casino Vegas branding
- **Home Screen**: Carousel showcasing games, service buttons, and information sections
- **Games Gallery**: Browse available games (Bingo, Perfect Pairs, Blackjack, Roulette)
- **Services**: Information about restaurants, hotel, cabaret, and leisure facilities
- **Promotions**: View current promotions and Member's Club benefits
- **Location**: Find directions and contact information
- **About**: Learn more about Princess Casino Vegas

### 🎨 Design Features
- Royal blue and gold color scheme
- Crown logo and Princess Casino Vegas branding
- Mobile-first responsive design (optimized for 375px-428px)
- Smooth animations and transitions
- Bottom navigation bar for easy access
- Touch-friendly interface

### 📱 Screens
1. **Splash Screen** - Animated loading with logo
2. **Home Screen** - Main navigation hub
3. **Games Screen** - Game catalog
4. **Promotions Screen** - Current offers
5. **Restaurant Screen** - Dining options
6. **Leisure Screen** - Leisure activities
7. **About Screen** - Casino information
8. **Location Screen** - Directions and contact
9. **Contact Screen** - Contact form
10. **Service Screen** - Additional services

## Technical Details

### Technologies Used
- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript (ES6+)
- SVG graphics for icons and logos
- Mobile-responsive design

### File Structure
```
casino-app/
├── index.html          # Main HTML file with all screens
├── css/
│   └── styles.css      # Complete styling
├── js/
│   └── app.js          # Navigation and interactions
├── images/             # Placeholder for actual images
├── assets/             # Additional assets
└── README.md           # Documentation
```

### Browser Compatibility
- Chrome (Mobile & Desktop)
- Safari (iOS & macOS)
- Firefox (Mobile & Desktop)
- Edge (Desktop)
- Samsung Internet
- Other modern mobile browsers

## Installation

### Option 1: Open Locally
1. Clone or download the repository
2. Open `index.html` in a web browser
3. For best experience, use browser DevTools mobile view

### Option 2: Deploy to Web Server
1. Upload all files to your web hosting
2. Ensure proper MIME types for .html, .css, .js files
3. Access via web browser

### Option 3: Convert to Mobile App
This app can be packaged as:
- **Progressive Web App (PWA)** - Add manifest.json and service worker
- **Cordova/PhoneGap** - For iOS and Android
- **Capacitor** - For native mobile deployment
- **WebView wrapper** - For Google Play Store submission

## Usage

### Navigation
- **Bottom Navigation Bar**: Quick access to main sections
  - About: Casino information
  - Service: Services overview
  - Home: Return to home screen
  - Location: Find us
  - Contact: Get in touch

- **Action Buttons**: Direct access to restaurants, promotions, and games

- **Service Cards**: Tap to explore hotel, cabaret, and restaurant details

### Interactive Elements
All buttons are functional and ready for linking to actual features:
- Menu button (top left) - Ready for navigation drawer
- Settings button (top right) - Ready for app settings
- All service cards - Ready for detail pages
- All game cards - Ready for game information
- Contact form - Ready for submission handler
- Location buttons - Ready for maps integration

## Customization

### Colors
The app uses a royal blue theme. To change colors, edit `css/styles.css`:
- Primary: `#1e40af` (Royal Blue)
- Secondary: `#3b82f6` (Bright Blue)
- Accent: `#f59e0b` (Gold)
- Background: Linear gradient from `#1e3a8a` to `#0f172a`

### Content
- Edit `index.html` to change text content
- Replace placeholder text with actual casino information
- Update contact details in Location and Contact screens

### Images
Replace gradient backgrounds with actual images:
1. Add images to `/images/` directory
2. Update CSS classes in `styles.css`
3. Reference images in HTML if needed

Example:
```css
.bingo-card {
    background-image: url('../images/bingo.jpg');
    background-size: cover;
}
```

## Features Ready for Linking

### Navigation Targets
All buttons include alert messages showing they're ready for actual functionality:
- Game details pages
- Restaurant reservations
- Member's club registration
- Maps/directions integration
- Contact form submission
- Promotion details
- Settings panel
- Menu drawer

### Future Enhancements
- **Backend Integration**: Connect contact form to email service
- **Maps Integration**: Link to Google Maps/Apple Maps
- **Push Notifications**: Notify users of promotions
- **Member Login**: Account management system
- **Reservation System**: Book restaurants and hotel
- **Live Updates**: Real-time promotion information
- **Multi-language**: Spanish and English support
- **Analytics**: Track user interactions

## Google Play Store Compliance

### Important Notes
✅ This is a **navigation and information app only**
✅ Contains **NO gambling functionality**
✅ Contains **NO real money transactions**
✅ Contains **NO game simulation or gambling mechanics**
✅ Purpose: Help customers navigate physical casino location

### Recommended App Store Description
> Princess Casino Vegas Navigation App helps visitors explore our casino facilities, restaurants, hotel, and entertainment venues. Find your way around, discover promotions, learn about our services, and contact us. This is an informational guide app - no gambling features included.

### Categories
- Travel & Local
- Lifestyle
- Navigation

## Performance

### Load Times
- Splash screen: 3 seconds
- Screen transitions: <300ms
- Carousel rotation: 5 seconds per slide

### Optimizations
- Minimal external dependencies
- CSS animations (GPU accelerated)
- Lazy loading ready
- Optimized for mobile networks

## Accessibility

- Touch-friendly buttons (minimum 44px target)
- High contrast text
- Semantic HTML structure
- SVG icons with proper sizing
- Readable font sizes (minimum 12px)

## Support

For questions or issues:
- Email: info@princesscasinovegas.com
- Phone: (123) 456-7890
- Website: [Add website URL]

## License

© 2024 Princess Casino Vegas. All rights reserved.

## Version History

### Version 1.0.0 (Current)
- Initial release
- Complete navigation structure
- All main screens implemented
- Mobile-optimized interface
- Ready for backend integration

---

**Note**: This is a navigation and information app designed for helping casino customers. It contains no gambling functionality and is suitable for Google Play Store distribution as a customer service and wayfinding application.
