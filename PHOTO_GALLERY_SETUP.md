# Photo Gallery & Booking Calendar Setup Guide

## 🖼️ Image Requirements

To make the photo gallery work perfectly, you'll need to add images to the `/public/images/` directory with the following naming convention:

### Costa Bella Property Images:
- `costabella-exterior-1.jpg` - Building exterior view
- `costabella-ocean-view.jpg` - Panoramic ocean view 
- `costabella-living-room.jpg` - Spacious living room
- `costabella-bedroom-1.jpg` - Master bedroom
- `costabella-bedroom-2.jpg` - Second bedroom  
- `costabella-kitchen.jpg` - Modern kitchen
- `costabella-bathroom.jpg` - Luxury bathroom
- `costabella-pool.jpg` - Private pool area
- `costabella-balcony.jpg` - Private balcony
- `costabella-sunset.jpg` - Spectacular sunset view

### Mision Viejo Property Images:
- `misionviejo-exterior.jpg` - Modern house exterior
- `misionviejo-rooftop.jpg` - Rooftop terrace
- `misionviejo-living.jpg` - Open living area
- `misionviejo-kitchen.jpg` - Gourmet kitchen
- `misionviejo-master-bedroom.jpg` - Master bedroom suite
- `misionviejo-bedroom-2.jpg` - Guest bedroom
- `misionviejo-bedroom-3.jpg` - Third bedroom
- `misionviejo-bathroom.jpg` - Luxury bathroom
- `misionviejo-ocean-view.jpg` - 360° ocean view
- `misionviejo-outdoor-dining.jpg` - Outdoor dining area
- `misionviejo-bbq.jpg` - BBQ grill area
- `misionviejo-sunrise.jpg` - Morning sunrise

## 📱 Image Specifications

### Recommended Dimensions:
- **Regular photos**: 800x600px or 1200x900px
- **Featured photo** (first image): 1600x1200px for best quality
- **Format**: JPG, PNG, or WebP
- **File size**: Keep under 500KB each for optimal loading

### Photo Categories:
- **Exterior**: Outside views of the property
- **Interior**: Living rooms, common areas  
- **Bedroom**: All bedroom spaces
- **Bathroom**: Bathroom facilities
- **Kitchen**: Kitchen and dining areas
- **Amenity**: Pool, BBQ, recreational areas
- **View**: Ocean views, sunsets, landscapes

## 🎨 Photo Gallery Features

### Interactive Features:
- ✅ **Category Filtering** - Filter by room type/area
- ✅ **Lightbox Modal** - Full-screen image viewing
- ✅ **Navigation** - Previous/next photo browsing
- ✅ **Responsive Design** - Works on all devices
- ✅ **Bilingual Support** - English/Spanish titles
- ✅ **Hover Effects** - Smooth animations
- ✅ **Featured Image** - First photo gets prominent display

### User Experience:
- Tap any photo to open lightbox
- Use arrow keys or buttons to navigate
- Click outside lightbox or X to close
- Filter by category to find specific areas
- Mobile-friendly touch navigation

## 🔧 Adding New Photos

To add more photos to any property:

1. **Add image file** to `/public/images/`
2. **Update database** in `db.json`:
   ```json
   {
     "id": 23,
     "src": "/images/your-new-image.jpg",
     "alt": "Description of the photo",
     "category": "interior",
     "title": {
       "en": "English Title",
       "es": "Spanish Title"
     }
   }
   ```
3. **Update fallback data** in `PropertyPage.tsx` with same structure

## 📸 Temporary Solution

Until you add real photos, the gallery will show broken image placeholders. You can:

1. **Use existing images** as placeholders by copying `costabellaview.webp` and renaming
2. **Download stock photos** from free sources like Unsplash
3. **Take photos** of similar properties for demonstration

The gallery is fully functional and will display beautifully once images are added!

## 📅 Interactive Booking Calendar

### New Features Added:
- **Date Selection**: Click-based arrival and departure date selection
- **Visual Calendar**: Two-month calendar view (current and next month)
- **Smart Validation**: Enforces minimum stay requirements
- **Guest Selection**: Dropdown to choose number of guests (up to property maximum)
- **Price Calculation**: Real-time total calculation based on selected dates
- **Bilingual Interface**: Full English/Spanish support
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### How It Works:
1. **Select Arrival Date**: Click on any available date in the calendar
2. **Select Departure Date**: Click on a second date (must meet minimum stay)
3. **Choose Guests**: Use dropdown to select number of guests
4. **View Total**: Automatic price calculation displays
5. **Book**: Enhanced booking button shows when ready

### Calendar Features:
- **Date Range Highlighting**: Selected dates and range are visually highlighted
- **Disabled Past Dates**: Cannot select dates before today
- **Minimum Stay Enforcement**: Prevents selection of too-short stays
- **Clear Visual Feedback**: Different colors for available, selected, and in-range dates
- **Mobile Optimized**: Touch-friendly interface for mobile users

The booking calendar replaces the static booking card while maintaining all the important property information (price, check-in/out times, minimum stay, etc.).
