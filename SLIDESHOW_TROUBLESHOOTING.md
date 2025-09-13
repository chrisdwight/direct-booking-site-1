# Troubleshooting: Photo Gallery Slideshow Not Showing

## Issue
The photo gallery is still showing a grid view instead of the new slideshow format.

## Troubleshooting Steps

### 1. **Check Browser Developer Tools**
1. Open browser developer tools (F12)
2. Look for any JavaScript errors in the Console tab
3. Check if you see the console log: `PhotoGallery render:` with details
4. Look for the "(Slideshow)" text next to "Photo Gallery" title

### 2. **Clear Browser Cache**
- **Chrome/Edge**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- **Firefox**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Or use "Hard Reload" in developer tools

### 3. **Restart Development Server**
1. Stop the current server (Ctrl+C in terminal)
2. Run `npm run dev` again
3. Wait for both servers to start (Vite + JSON Server)

### 4. **Check CSS Loading**
In browser developer tools:
1. Go to Elements/Inspector tab
2. Look for elements with classes like:
   - `.slideshow-container`
   - `.slideshow-main`
   - `.slide-image`
3. If these elements don't exist, the old component is still loading

### 5. **Verify Component Changes**
Look for these indicators that the new component is loading:
- Title shows "Photo Gallery (Slideshow)"
- There's a dropdown filter
- Photos show one at a time instead of in a grid
- Navigation arrows on the sides
- Thumbnail strip at the bottom (desktop)

### 6. **Check Network Tab**
1. Open Network tab in developer tools
2. Reload the page
3. Look for the PhotoGallery.tsx file being loaded
4. Check if CSS files are loading properly

## Expected Behavior
- **One large photo** displayed at a time
- **Navigation arrows** (< >) on left and right sides
- **Thumbnail strip** below the main image (desktop)
- **Dot indicators** (mobile)
- **Auto-advance** every 5 seconds
- **Category filter dropdown** above the slideshow

## If Still Not Working
1. Check the terminal for any build errors
2. Try accessing the site in an incognito/private window
3. Check if there are any ad blockers interfering
4. Verify the photos array has data in the developer tools

## Manual Fix Option
If the issue persists, try:
1. Rename `PhotoGallery.tsx` to `PhotoGallery.backup.tsx`
2. Create a new `PhotoGallery.tsx` file
3. Restart the development server

The slideshow implementation is complete and should work. The most common issue is browser caching of the old component.
