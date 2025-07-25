# Nailed by Dianna - Professional Nail Services Website

A modern, mobile-first website for Dianna's nail technician business, featuring online booking, service showcase, and client engagement tools.

## 🌟 Features

### 📱 Mobile-First Design
- Responsive design optimized for all devices
- Touch-friendly interface with 44px minimum touch targets
- Progressive Web App (PWA) capabilities
- Installation support for mobile home screen

### 🎨 Professional Branding
- Pink color scheme reflecting nail salon aesthetics
- Modern typography using Poppins font
- Clean, professional layout
- High-quality placeholder structure for images

### 📅 Advanced Booking System
- Interactive calendar widget
- Real-time availability checking
- Service duration-based scheduling
- Time slot conflict detection
- Business hours management
- Booking confirmation system

### 🖼️ Gallery & Portfolio
- Grid-based image showcase
- Swipe-enabled mobile gallery
- Placeholder structure for nail art images
- Responsive image layout

### 📞 Contact & Communication
- Click-to-call phone integration
- WhatsApp integration
- Email contact form
- Location information (Fresno area)
- Social media links

### ⚡ Performance Features
- Fast loading optimized CSS
- Hardware acceleration
- Smooth animations and transitions
- Lazy loading ready structure

## 📁 File Structure

```
nailed-by-dianna/
├── index.html              # Main HTML structure
├── styles.css              # Primary styling
├── mobile-optimizations.css # Mobile-specific optimizations
├── script.js              # Interactive functionality
├── booking.js             # Advanced booking system
├── manifest.json          # PWA manifest
└── README.md              # This file
```

## 🚀 Setup Instructions

1. **Local Development**
   ```bash
   # Serve the files using any local server
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have serve installed)
   npx serve .
   
   # Then visit http://localhost:8000
   ```

2. **Web Server Deployment**
   - Upload all files to your web hosting provider
   - Ensure the web server supports HTTPS for PWA features
   - Configure proper MIME types for the manifest.json file

## 📊 Business Information

- **Business Name**: Nailed by Dianna
- **Services**: Acrylic nail application and manicures
- **Phone**: +1 (559) 287-9502
- **Email**: diannaoliva1818@icloud.com
- **Location**: Fresno Area, California

## 🕐 Business Hours

- **Monday - Friday**: 9:00 AM - 6:00 PM
- **Saturday**: 10:00 AM - 4:00 PM
- **Sunday**: Closed

## 🎯 Key Sections

### Hero Section
- Business introduction and branding
- Primary call-to-action buttons
- Professional hero image placeholder

### Services Section
- Acrylic nail application ($45+, 90-120 min)
- Manicures ($25+, 45-60 min)
- Custom nail art (+$10, +30 min)

### Gallery Section
- Portfolio showcase
- Before/after examples
- Mobile-optimized browsing

### About Section
- Dianna's professional introduction
- Sanitation and quality standards
- Personal touch and expertise

### Booking Section
- Interactive calendar system
- Contact form backup
- Business hours display
- Service selection

### Contact Section
- Multiple contact methods
- Social media integration
- Location information

## 🔧 Customization

### Adding Images
Replace the placeholder divs in:
- Hero section: `.hero-image .image-placeholder`
- Gallery: `.gallery-item .image-placeholder`
- About section: `.about-image .image-placeholder`

### Updating Business Information
1. **Contact Details**: Update phone, email in HTML and JavaScript
2. **Business Hours**: Modify `businessHours` object in `booking.js`
3. **Services**: Update service cards and pricing in HTML
4. **Location**: Update address references throughout

### Booking System Integration
The booking system is ready for backend integration:
1. Replace `simulateFormSubmission()` with actual API calls
2. Connect to your calendar service (Google Calendar, Calendly, etc.)
3. Implement email confirmation system
4. Add payment processing if needed

## 📱 Progressive Web App

The website includes PWA features:
- **Installable**: Users can add to home screen
- **Shortcuts**: Quick access to booking, gallery, and calling
- **Offline-ready structure**: Ready for service worker implementation

### PWA Installation
Users can install the app by:
1. Visiting the website on mobile
2. Tapping "Add to Home Screen" in browser menu
3. The app will appear as a native app icon

## 🎨 Color Palette

- **Primary Pink**: #E91E63
- **Light Pink**: #F8BBD9
- **Dark Pink**: #AD1457
- **Accent Pink**: #FF69B4
- **Soft Pink**: #FCE4EC

## 🌐 Browser Support

- **Mobile**: iOS Safari 12+, Chrome for Android 70+
- **Desktop**: Chrome 70+, Firefox 65+, Safari 12+, Edge 79+
- **PWA Features**: Chrome, Edge, Samsung Internet, Firefox (limited)

## 📈 SEO & Social Media

The website includes:
- Proper meta tags and descriptions
- Open Graph tags for social sharing
- Twitter Card integration
- Structured data ready structure
- Mobile-friendly design for Google rankings

## 🔐 Security Considerations

- HTTPS required for PWA features
- Form validation and sanitization
- No sensitive data stored in JavaScript
- Safe external resource loading

## 📞 Support & Maintenance

For updates and maintenance:
1. **Content Updates**: Modify HTML directly
2. **Styling Changes**: Update CSS files
3. **Functionality Changes**: Modify JavaScript files
4. **Booking Integration**: Update booking.js

## 🎯 Next Steps

1. **Add Real Images**: Replace all placeholder images with professional photos
2. **Backend Integration**: Connect booking system to your preferred backend
3. **Analytics**: Add Google Analytics or similar tracking
4. **Email Integration**: Set up contact form email delivery
5. **SEO Optimization**: Submit to search engines and optimize content
6. **Social Media**: Create and link social media accounts

## 📄 License

This website is created specifically for Nailed by Dianna. All rights reserved.

---

**Built with ❤️ for Nailed by Dianna**

For technical support or modifications, contact your web developer.