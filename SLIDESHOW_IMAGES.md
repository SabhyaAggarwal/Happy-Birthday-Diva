# Slideshow Images

## Image Files Required

The slideshow feature requires 5 image files named:
- `1.png` (or `1.jpg`)
- `2.png` (or `2.jpg`)
- `3.png` (or `3.jpg`)
- `4.png` (or `4.jpg`)
- `5.png` (or `5.jpg`)

## Current Status

**You need to upload your own photos** to make the slideshow work.

## Upload Instructions

1. Select 5 of your favorite photos
2. Rename them to: `1.png`, `2.png`, `3.png`, `4.png`, `5.png`
   - Or use `.jpg` extension if they're JPEG files (update references in `script.js` if using JPEG)
3. Upload them to the repository root directory (same folder as `index.html`)

## Photo Requirements

- **Orientation**: Mixed portrait and landscape photos are supported
- **Recommended dimensions**: Any modern photo size works (the slideshow will scale them automatically)
- **Format**: PNG or JPG/JPEG
- The slideshow uses `object-fit: contain` to preserve aspect ratio

## How the Slideshow Works

1. After 5 seconds of showing "HAPPY BIRTHDAY DIVA!" text with balloons, the slideshow begins
2. The text slides off to the left
3. Images transition in from the right, one at a time (1.png → 2.png → 3.png → 4.png → 5.png)
4. Each image is shown for 3 seconds during the initial slideshow
5. After all 5 images are shown, the "HAPPY BIRTHDAY DIVA!" text appears at the top
6. The slideshow continues in the background, cycling through all images every 4 seconds

## Background Animation

The slideshow screen features:
- Animated rainbow gradient background
- Continuous falling balloons (same as birthday screen)
- Falling confetti particles
- All animations continue throughout the slideshow for a festive atmosphere
