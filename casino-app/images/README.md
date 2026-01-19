# Images Directory

This directory should contain all image assets for the Princess Casino Vegas navigation app.

## Required Images

### Game Banners (Carousel)
- `bingo-banner.jpg` - 800x500px - Bingo game promotional image
- `perfect-pairs-banner.jpg` - 800x500px - Perfect Pairs game image
- `blackjack-banner.jpg` - 800x500px - Blackjack game image

### Service Cards (Home Screen)
- `hotel-exterior.jpg` - 400x400px - Princess Vegas Hotel exterior
- `cabaret-interior.jpg` - 400x400px - Vegas Cabaret interior
- `sinatra-restaurant.jpg` - 400x400px - Sinatra Restaurant dining area

### Game Cards (Games Screen)
- `bingo-game.jpg` - 800x400px - Bingo game detail
- `perfect-pairs-game.jpg` - 800x400px - Perfect Pairs detail
- `blackjack-game.jpg` - 800x400px - Blackjack table
- `roulette-game.jpg` - 800x400px - Roulette wheel

### Detail Screens
- `casino-building.jpg` - 800x600px - Princess Casino Vegas exterior (Leisure screen)
- `sinatra-dining.jpg` - 800x600px - Sinatra Restaurant interior detail
- `cabaret-stage.jpg` - 800x600px - Vegas Cabaret stage

### Promotional
- `members-club-card.png` - 400x250px - Member's Club card design
- `promotional-banner.jpg` - 800x400px - Generic promotional content

## Image Guidelines

### Format
- Use JPEG for photos (80-90% quality)
- Use PNG for graphics with transparency
- Use WebP for modern browsers (with fallback)

### Optimization
- Compress images before upload
- Use tools like TinyPNG, ImageOptim, or Squoosh
- Target file sizes: < 200KB per image

### Resolution
- Design for 2x retina displays
- Standard mobile: 1x
- High-DPI screens: 2x
- Maximum width: 1200px

### Naming Convention
```
{category}-{description}.{ext}

Examples:
- game-bingo-banner.jpg
- service-hotel-exterior.jpg
- promo-members-club.jpg
```

### Alt Text Requirements
When adding images to HTML, always include descriptive alt text:
```html
<img src="images/hotel-exterior.jpg" alt="Princess Vegas Hotel exterior at night">
```

## Current Status

Currently, the app uses **CSS gradient placeholders** instead of actual images. This allows the app to function without image dependencies.

### To Add Real Images:

1. **Add image files to this directory**

2. **Update CSS** (`css/styles.css`)
   ```css
   /* Replace gradient background */
   .hotel-img {
     background-image: url('../images/hotel-exterior.jpg');
     background-size: cover;
     background-position: center;
   }
   ```

3. **Or use IMG tags in HTML**
   ```html
   <div class="service-card">
     <img src="images/hotel-exterior.jpg" alt="Princess Vegas Hotel">
   </div>
   ```

## Image Sources

### Option 1: Professional Photography
- Hire photographer to capture casino facilities
- Best quality and authenticity
- Requires photo rights agreement

### Option 2: Stock Photos
- Unsplash.com (free, commercial use)
- Pexels.com (free, commercial use)
- Shutterstock.com (paid)
- iStock.com (paid)

Search terms:
- "casino interior"
- "luxury hotel"
- "fine dining restaurant"
- "bingo hall"
- "casino games"
- "entertainment venue"

### Option 3: Generated Graphics
- Use design tools (Figma, Canva)
- Create branded graphics
- Consistent style across app

## Copyright Notice

Ensure all images used have proper licensing:
- Own photography: Full rights
- Stock photos: Check license terms
- User-generated: Get permission
- Third-party: Verify commercial use allowed

---

## Quick Setup

To quickly populate with placeholder images:

```bash
# Navigate to images directory
cd images

# Download placeholder images (example using placeholder services)
curl -o bingo-banner.jpg "https://via.placeholder.com/800x500/7c3aed/ffffff?text=Bingo"
curl -o hotel-exterior.jpg "https://via.placeholder.com/400x400/60a5fa/ffffff?text=Hotel"
# ... etc
```

**Note**: Replace placeholder images with real photos before production release.

---

For questions about image specifications or sourcing, contact the design team.
