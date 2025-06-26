# Bavarian Auto Werkz - Deployment Guide

## Quick Deployment to Netlify

### 1. Prerequisites
- GitHub/GitLab account with this repository
- Netlify account (free tier works)
- Formspree account for contact forms

### 2. Deploy to Netlify

#### Option A: Connect Git Repository
1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your repository
4. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Click "Deploy site"

#### Option B: Drag and Drop
1. Run `npm run build` locally
2. Go to Netlify dashboard
3. Drag the `out` folder to Netlify

### 3. Configure Forms

#### Set up Formspree
1. Create account at [Formspree.io](https://formspree.io)
2. Create two forms:
   - Contact Form
   - Booking Form
3. Update form endpoints in:
   - `src/components/forms/ContactForm.tsx` (line 42)
   - `src/components/forms/BookingForm.tsx` (line 68)
4. Replace `YOUR_FORM_ID` with actual Formspree form IDs

### 4. Domain Setup
1. In Netlify, go to Domain settings
2. Add your custom domain
3. Configure DNS records with your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: [your-netlify-subdomain].netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```
4. Update domain in:
   - `src/app/sitemap.ts`
   - `src/app/robots.ts`
   - `src/components/seo/StructuredData.tsx`

### 5. Business Information Updates

Update the following files with actual business information:

#### Contact Information
- `src/components/layout/Footer.tsx`
- `src/app/contact/page.tsx`
- `src/components/seo/StructuredData.tsx`

#### Business Details
- Phone: (123) 456-7890 → Your actual phone
- Email: info@bavarianautoweekz.com → Your actual email
- Address: 123 Performance Drive → Your actual address
- Hours: Update in multiple files if different

### 6. SEO Optimization

#### Google Analytics (Optional)
1. Create Google Analytics account
2. Add tracking code to `src/app/layout.tsx`

#### Google Business Profile
1. Claim your Google Business listing
2. Ensure NAP (Name, Address, Phone) consistency
3. Add photos and business hours

#### Social Media
Update social media links in:
- `src/components/layout/Footer.tsx`
- `src/components/seo/StructuredData.tsx`

### 7. Content Customization

#### Images
- Replace placeholder images in gallery
- Add actual photos of:
  - Shop exterior/interior
  - Owner and team
  - Completed projects
  - Owner's vehicles

#### Services & Pricing
- Update pricing in service pages
- Customize service descriptions
- Add/remove services as needed

### 8. Testing

Before going live:
1. Test all forms
2. Check all links work
3. Verify contact information
4. Test mobile responsiveness
5. Check page load speeds

### 9. Launch Checklist

- [ ] Forms working with Formspree
- [ ] Domain configured and SSL active
- [ ] Contact information updated
- [ ] Google Business Profile claimed
- [ ] Analytics set up (optional)
- [ ] All pages tested
- [ ] Mobile responsive
- [ ] Images optimized

## Support

For technical issues:
- Check Netlify deployment logs
- Verify form configurations
- Test locally with `npm run dev`

## Performance Tips

- All images should be optimized (WebP format recommended)
- The site is already configured for optimal Netlify deployment
- Static export ensures fast loading times
- CDN delivery through Netlify edge network