# Quick Start Guide - Princess Casino Vegas Navigation App

Get up and running with the Princess Casino Vegas navigation app in minutes!

## 🚀 Instant Preview (3 Steps)

### Option 1: Python (Simplest)
```bash
cd casino-app
python -m http.server 8000
```
Open browser to: **http://localhost:8000**

### Option 2: VS Code Live Server
1. Open `casino-app` folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

### Option 3: Node.js
```bash
cd casino-app
npx http-server
```
Open browser to: **http://localhost:8080**

---

## 📱 What You'll See

1. **Splash Screen** (3 seconds)
   - Princess Casino Vegas logo
   - Loading animation
   - Blue gradient background

2. **Home Screen**
   - Auto-rotating game carousel
   - Restaurant, Promotions, Games buttons
   - Service cards (Hotel, Cabaret, Restaurant)
   - Member's Club banner
   - Information buttons

3. **Bottom Navigation**
   - About, Service, Home (center), Location, Contact
   - Home button highlighted in blue circle

---

## 🎮 Try These Features

### Navigation
- ✅ Tap bottom nav icons to switch between screens
- ✅ Swipe or watch carousel auto-rotate
- ✅ Tap dots under carousel to jump to specific slides
- ✅ Click service cards to view details
- ✅ Use back buttons to return to home

### Screens to Explore
1. **Games** - Browse Bingo, Perfect Pairs, Blackjack, Roulette
2. **Promotions** - View current offers
3. **Restaurants** - Sinatra Restaurant & Vegas Cabaret
4. **Leisure** - Casino facilities information
5. **Location** - Directions and contact info
6. **About** - Learn about Princess Casino Vegas
7. **Contact** - Contact form (ready for backend)

### Interactive Elements
- All buttons show feedback when clicked
- Game cards display placeholder alerts (ready for linking)
- Menu & settings buttons work (ready for linking)
- Contact form validates input (ready for backend)

---

## 📂 Project Structure

```
casino-app/
├── index.html              # Main app (all screens)
├── css/
│   └── styles.css         # Complete styling
├── js/
│   └── app.js            # Navigation & interactions
├── images/
│   └── README.md         # Image guidelines
├── assets/
│   └── README.md         # Icon requirements
├── manifest.json          # PWA manifest
├── README.md              # Full documentation
├── DEPLOYMENT.md          # Deployment guide
└── QUICKSTART.md          # This file
```

---

## ✏️ Customize the App

### 1. Change Colors

Edit `css/styles.css`:
```css
/* Find and replace these colors */
#1e3a8a  →  Your primary color
#3b82f6  →  Your secondary color
#f59e0b  →  Your accent color
```

### 2. Update Content

Edit `index.html`:
- Change "Princess Casino Vegas" to your casino name
- Update restaurant names
- Modify service descriptions
- Change contact information
- Update promotional text

### 3. Add Images

1. Place images in `/images/` directory
2. Update CSS to use real images:
```css
.hotel-img {
    background-image: url('../images/hotel-photo.jpg');
}
```

See `images/README.md` for complete image requirements.

### 4. Modify Navigation

Edit `js/app.js`:
- Add new screens
- Change navigation behavior
- Customize alerts with real functionality
- Add backend API calls

---

## 🔧 Common Customizations

### Add a New Screen

**1. HTML** (in `index.html`):
```html
<div id="new-screen" class="screen hidden">
    <button class="back-btn" data-back="home">←</button>
    <div class="detail-header">
        <h1>NEW SCREEN</h1>
    </div>
    <div class="content">
        <!-- Your content here -->
    </div>
</div>
```

**2. Navigation** (in `js/app.js`):
```javascript
// Add case to navigateToPage function
case 'new-screen':
    targetScreen = document.getElementById('new-screen');
    break;
```

**3. Button** (link to new screen):
```html
<button class="action-btn" data-page="new-screen">
    New Feature
</button>
```

### Connect Contact Form

Edit `js/app.js`:
```javascript
document.querySelector('.submit-btn').addEventListener('click', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.querySelector('input[type="text"]').value,
        email: document.querySelector('input[type="email"]').value,
        phone: document.querySelector('input[type="tel"]').value,
        message: document.querySelector('textarea').value
    };

    // Replace with your API endpoint
    const response = await fetch('YOUR_API_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        alert('Message sent successfully!');
    }
});
```

### Link to Google Maps

Edit `js/app.js`:
```javascript
document.querySelector('.location-btn').addEventListener('click', () => {
    const address = 'Princess Casino Vegas, Las Vegas, NV';
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
});
```

---

## 📱 Test on Mobile

### iOS (Safari)
1. Get your computer's local IP: `ifconfig | grep inet`
2. Make sure phone is on same WiFi
3. Open Safari to: `http://YOUR_IP:8000`
4. Tap Share → Add to Home Screen

### Android (Chrome)
1. Get your computer's local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Make sure phone is on same WiFi
3. Open Chrome to: `http://YOUR_IP:8000`
4. Menu → Add to Home Screen

---

## 🚢 Ready to Deploy?

### Quick Deploy Options

**1. Netlify (Easiest)**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd casino-app
netlify deploy
```

**2. Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd casino-app
vercel
```

**3. GitHub Pages**
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Enable GitHub Pages in repo settings
```

**4. Google Play Store**
See `DEPLOYMENT.md` for complete instructions on packaging as Android app.

---

## 🆘 Troubleshooting

### App won't load
- Check that you're running a local server (not opening file:// directly)
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12)

### Carousel not rotating
- JavaScript may not be loading - check browser console
- Verify `js/app.js` is in the correct location
- Check file path in `<script src="js/app.js">`

### Styling looks wrong
- Clear browser cache
- Verify `css/styles.css` path is correct
- Check browser DevTools (F12) → Network tab for 404 errors

### Mobile test not working
- Ensure phone and computer are on same WiFi network
- Check firewall isn't blocking local server
- Try with http:// not https://
- Verify IP address is correct

---

## 🎯 Next Steps

### Immediate
1. ✅ Preview the app locally
2. ✅ Explore all screens and features
3. ✅ Test on mobile device

### Short Term
1. 📝 Customize text content
2. 🎨 Add your images
3. 🔗 Link buttons to real functionality
4. 📧 Connect contact form

### Long Term
1. 🚀 Deploy to web hosting
2. 📱 Package for Google Play Store
3. 🍎 Build iOS version (optional)
4. 📊 Add analytics
5. 🔔 Implement push notifications

---

## 📚 Additional Resources

- **README.md** - Complete documentation
- **DEPLOYMENT.md** - Deploy to web, Android, iOS
- **images/README.md** - Image requirements and guidelines
- **assets/README.md** - Icon creation guide

---

## 💡 Pro Tips

1. **Mobile First**: Always test on actual mobile devices
2. **Images**: Use optimized images (< 200KB each)
3. **Icons**: Generate all required sizes from master 1024×1024px icon
4. **Testing**: Test in Chrome (Android) and Safari (iOS)
5. **Performance**: Use Lighthouse audit in Chrome DevTools
6. **Caching**: Implement service worker for offline support
7. **Analytics**: Add Google Analytics or similar
8. **Updates**: Version your app for updates (manifest.json)

---

## ✨ Features Summary

✅ **Complete UI** - All screens designed and functional
✅ **Responsive** - Works on all mobile screen sizes
✅ **Interactive** - Smooth animations and transitions
✅ **Ready to Link** - All buttons ready for real functionality
✅ **PWA Ready** - Manifest.json included
✅ **App Store Ready** - Instructions for deployment
✅ **No Dependencies** - Pure HTML/CSS/JavaScript
✅ **Modern Design** - Royal blue theme with crown branding
✅ **Documentation** - Comprehensive guides included

---

## 🎉 You're Ready!

The app is fully functional and ready to use. All buttons work and show placeholder alerts indicating they're ready to be linked to actual features.

**Start the local server and explore the app!**

Questions? Check the other documentation files or open an issue.

Enjoy building with Princess Casino Vegas Navigation App! 👑🎰
