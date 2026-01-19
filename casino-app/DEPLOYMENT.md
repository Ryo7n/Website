# Deployment Guide - Princess Casino Vegas Navigation App

This guide covers how to deploy the Princess Casino Vegas navigation app to various platforms, including Google Play Store.

## Table of Contents
1. [Testing Locally](#testing-locally)
2. [Web Deployment](#web-deployment)
3. [Google Play Store (Android)](#google-play-store-android)
4. [Apple App Store (iOS)](#apple-app-store-ios)
5. [Progressive Web App (PWA)](#progressive-web-app-pwa)

---

## Testing Locally

### Method 1: Simple HTTP Server (Python)
```bash
# Navigate to the casino-app directory
cd casino-app

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open browser to: http://localhost:8000
```

### Method 2: Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Method 3: Node.js http-server
```bash
# Install globally
npm install -g http-server

# Run server
cd casino-app
http-server

# Open browser to: http://localhost:8080
```

---

## Web Deployment

### Requirements
- Web hosting with HTTPS support
- Support for HTML, CSS, JS files
- Optional: PHP for contact form

### Steps

1. **Upload Files**
   ```
   Upload entire casino-app directory to web hosting
   Maintain folder structure:
   - index.html (root)
   - css/ (folder)
   - js/ (folder)
   - images/ (folder)
   - assets/ (folder)
   ```

2. **Configure Server**

   **Apache (.htaccess)**
   ```apache
   # Force HTTPS
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

   # Cache static assets
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>

   # Compress files
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
   </IfModule>
   ```

   **Nginx (nginx.conf)**
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }

   location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg)$ {
     expires 1y;
     add_header Cache-Control "public, immutable";
   }
   ```

3. **Test Deployment**
   - Open website in browser
   - Test all navigation
   - Verify mobile responsiveness
   - Check HTTPS certificate

---

## Google Play Store (Android)

### Option 1: Using Apache Cordova (Recommended)

#### Prerequisites
```bash
# Install Node.js and npm
# Then install Cordova
npm install -g cordova
```

#### Steps

1. **Create Cordova Project**
   ```bash
   cordova create PrincessCasinoVegas com.princesscasino.vegas PrincessCasinoVegas
   cd PrincessCasinoVegas
   ```

2. **Add Android Platform**
   ```bash
   cordova platform add android
   ```

3. **Copy App Files**
   ```bash
   # Copy all files from casino-app to www folder
   rm -rf www/*
   cp -r ../casino-app/* www/
   ```

4. **Configure config.xml**
   ```xml
   <?xml version='1.0' encoding='utf-8'?>
   <widget id="com.princesscasino.vegas" version="1.0.0" xmlns="http://www.w3.org/ns/widgets">
       <name>Princess Casino Vegas</name>
       <description>
           Navigation and information app for Princess Casino Vegas visitors
       </description>
       <author email="info@princesscasinovegas.com">
           Princess Casino Vegas
       </author>
       <content src="index.html" />
       <access origin="*" />
       <allow-intent href="http://*/*" />
       <allow-intent href="https://*/*" />
       <allow-intent href="tel:*" />
       <allow-intent href="sms:*" />
       <allow-intent href="mailto:*" />
       <allow-intent href="geo:*" />
       <platform name="android">
           <allow-intent href="market:*" />
           <icon density="ldpi" src="res/icon/android/ldpi.png" />
           <icon density="mdpi" src="res/icon/android/mdpi.png" />
           <icon density="hdpi" src="res/icon/android/hdpi.png" />
           <icon density="xhdpi" src="res/icon/android/xhdpi.png" />
           <icon density="xxhdpi" src="res/icon/android/xxhdpi.png" />
           <icon density="xxxhdpi" src="res/icon/android/xxxhdpi.png" />
       </platform>
       <preference name="Orientation" value="portrait" />
       <preference name="StatusBarOverlaysWebView" value="false" />
       <preference name="StatusBarBackgroundColor" value="#1e3a8a" />
   </widget>
   ```

5. **Build APK**
   ```bash
   # Debug build
   cordova build android

   # Release build
   cordova build android --release
   ```

6. **Sign APK**
   ```bash
   # Generate keystore (first time only)
   keytool -genkey -v -keystore princess-casino.keystore -alias princess-casino -keyalg RSA -keysize 2048 -validity 10000

   # Sign APK
   jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore princess-casino.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk princess-casino

   # Align APK
   zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk princess-casino-vegas.apk
   ```

7. **Upload to Google Play Console**
   - Go to https://play.google.com/console
   - Create new app
   - Fill in app details:
     - **App name**: Princess Casino Vegas
     - **Category**: Travel & Local or Lifestyle
     - **Content rating**: Request rating (select "No gambling")
     - **Privacy policy**: Required (create one)
   - Upload APK or AAB
   - Add screenshots, descriptions
   - Submit for review

### Option 2: Using Capacitor

```bash
# Install Capacitor
npm install -g @capacitor/cli @capacitor/core

# Initialize
npx cap init PrincessCasinoVegas com.princesscasino.vegas

# Add Android platform
npm install @capacitor/android
npx cap add android

# Copy web assets
npx cap copy android

# Open in Android Studio
npx cap open android

# Build APK in Android Studio
```

### Option 3: Trusted Web Activity (TWA)

TWA allows you to wrap your website as an Android app without Cordova.

1. **Create Android Project**
   - Use Android Studio
   - Create "Empty Activity" project
   - Add TWA dependency to build.gradle

2. **Configure AndroidManifest.xml**
   ```xml
   <activity android:name="com.google.androidbrowserhelper.trusted.LauncherActivity">
       <intent-filter>
           <action android:name="android.intent.action.MAIN" />
           <category android:name="android.intent.category.LAUNCHER" />
       </intent-filter>
   </activity>
   ```

3. **Add Digital Asset Links**
   - Verify domain ownership
   - Link website to app

---

## Apple App Store (iOS)

### Using Cordova

1. **Add iOS Platform**
   ```bash
   cordova platform add ios
   ```

2. **Build for iOS**
   ```bash
   cordova build ios
   ```

3. **Open in Xcode**
   ```bash
   open platforms/ios/PrincessCasinoVegas.xcworkspace
   ```

4. **Configure Signing**
   - Select development team
   - Configure bundle identifier
   - Set provisioning profile

5. **Submit to App Store**
   - Archive app in Xcode
   - Upload via Xcode Organizer
   - Fill in App Store Connect details

---

## Progressive Web App (PWA)

### Requirements
- HTTPS hosting
- Service worker for offline functionality
- Web app manifest (already included)

### Steps

1. **Create Service Worker**

   Create `sw.js` in root directory:
   ```javascript
   const CACHE_NAME = 'princess-casino-v1';
   const urlsToCache = [
     '/',
     '/index.html',
     '/css/styles.css',
     '/js/app.js'
   ];

   self.addEventListener('install', event => {
     event.waitUntil(
       caches.open(CACHE_NAME)
         .then(cache => cache.addAll(urlsToCache))
     );
   });

   self.addEventListener('fetch', event => {
     event.respondWith(
       caches.match(event.request)
         .then(response => response || fetch(event.request))
     );
   });
   ```

2. **Register Service Worker**

   Add to `js/app.js`:
   ```javascript
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('/sw.js')
       .then(reg => console.log('Service Worker registered'))
       .catch(err => console.log('Service Worker registration failed'));
   }
   ```

3. **Test PWA**
   - Open Chrome DevTools
   - Go to Application tab
   - Check Manifest and Service Worker
   - Use Lighthouse audit

4. **Publish**
   - Deploy to HTTPS hosting
   - Users can "Add to Home Screen"
   - Works offline after first visit

---

## Google Play Store Requirements

### App Store Listing

**Title**: Princess Casino Vegas

**Short Description**:
Navigate Princess Casino Vegas facilities, restaurants, hotel, and services.

**Full Description**:
```
Welcome to Princess Casino Vegas Navigation App!

This app helps visitors explore our world-class facilities:

🏨 HOTEL
Discover our luxury accommodations and book your stay

🍽️ RESTAURANTS
- Sinatra Restaurant: Fine dining experience
- Vegas Cabaret: Entertainment and dining

🎯 SERVICES
Find information about all our amenities and services

📍 LOCATION
Get directions and contact information

🎁 PROMOTIONS
Stay updated on current offers and Member's Club benefits

🎰 GAMES
Browse our gaming options (information only - no gambling in app)

This is a navigation and information app designed to help you make the most of your visit to Princess Casino Vegas. No gambling functionality included.

Features:
✓ Interactive navigation
✓ Service information
✓ Restaurant details
✓ Location finder
✓ Contact information
✓ Promotion updates
✓ Member's Club info

Download now and explore Princess Casino Vegas!
```

**Category**: Travel & Local

**Content Rating**: Everyone (no gambling features)

**Privacy Policy**: Required - create a page explaining:
- No personal data collection
- Contact form data handling
- Optional analytics
- No third-party sharing

### Screenshots Needed
- 2-8 screenshots
- Minimum 320px on shortest side
- Recommended: 1080x1920 (portrait)
- Capture: Home, Games, Services, Location screens

### Feature Graphic
- Size: 1024 x 500 pixels
- Shows app name and crown logo

---

## Testing Checklist

Before deploying:

- [ ] All navigation works correctly
- [ ] All buttons are functional
- [ ] Carousel auto-rotates
- [ ] Back buttons return to correct screens
- [ ] Bottom navigation updates correctly
- [ ] Touch interactions feel responsive
- [ ] No console errors
- [ ] Works on different screen sizes (320px - 428px)
- [ ] Works on iOS Safari
- [ ] Works on Android Chrome
- [ ] Loading spinner appears on splash screen
- [ ] All content is appropriate
- [ ] Contact form validates input (when connected)

---

## Support & Updates

### Version Updates
When updating the app:
1. Update version in manifest.json
2. Update version in config.xml (if using Cordova)
3. Test thoroughly
4. Build new APK/AAB
5. Upload to Google Play Console
6. Submit for review

### User Support
Ensure you have:
- Support email
- FAQ page
- Contact information
- Privacy policy URL
- Terms of service URL

---

## Cost Estimates

### One-time Costs
- Google Play Developer Account: $25 (one-time)
- Apple Developer Account: $99/year
- Domain name: ~$10/year
- SSL certificate: Free (Let's Encrypt) or ~$50/year

### Hosting Costs
- Shared hosting: $5-15/month
- VPS: $10-50/month
- Static hosting (Netlify/Vercel): Free tier available

---

## Additional Resources

- [Cordova Documentation](https://cordova.apache.org/docs/en/latest/)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Google Play Console](https://play.google.com/console)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/) - Generate icons

---

## Notes

1. **No Gambling Disclaimer**: Always emphasize this is an informational/navigation app
2. **Age Rating**: Request "Everyone" rating - no gambling content
3. **Permissions**: Request only necessary permissions (location for maps)
4. **Privacy**: Have a clear privacy policy
5. **Updates**: Regular updates improve app store ranking

For questions or issues, contact the development team or refer to the main README.md file.
