# 🚀 Installation & Setup Guide

## Prerequisites

Ensure you have the following installed on your system:
- **Node.js** 18.17+ ([Download](https://nodejs.org/))
- **npm** 9.0+ (comes with Node.js) or **yarn** 3.0+
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Step-by-Step Installation

### 1. Navigate to Project Directory

```bash
cd "d:\New folder"
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Create Environment File

Copy the example environment file:
```bash
cp .env.example .env.local
```

Edit `.env.local` if needed (optional for development):
```env
NEXT_PUBLIC_SITE_NAME=Ajaykumar Solanki
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Customize Portfolio Data

Edit `data/portfolio.ts` with your own:
- Personal information
- Skills and proficiency levels
- Projects and descriptions
- Work experience
- Certifications
- Workshops and achievements
- Social media links

Example:
```typescript
export const PORTFOLIO_DATA = {
  personal: {
    name: 'Your Name',
    role: 'Your Role',
    email: 'your@email.com',
    // ... more data
  },
  // ... rest of data
};
```

### 5. Run Development Server

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

The application will start at: **[http://localhost:3000](http://localhost:3000)**

### 6. Open in Browser

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio live!

## 🔧 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot-reload

### Build
```bash
npm run build
```
Creates an optimized production build

### Production
```bash
npm start
```
Starts the production server (requires `npm run build` first)

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality

## 📦 What Gets Installed

`npm install` will install all required packages:
- **next** - React framework
- **react** & **react-dom** - React library
- **gsap** - Animation library
- **tailwindcss** - CSS framework
- **typescript** - Type safety
- **react-icons** - Icon library
- And development dependencies...

See `package.json` for the complete list.

## 🎨 Customization

### Edit Portfolio Content

Open `data/portfolio.ts` and update:

```typescript
// Personal Info
personal: {
  name: 'Your Name',
  role: 'Your Title',
  email: 'your.email@example.com',
  phone: '+1-234-567-8900',
  location: 'Your City, Country',
  bio: 'Your professional bio...',
}

// Skills
skills: [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind'],
    proficiency: 90,
  },
  // Add more skills...
]

// Projects
projects: [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    tech: ['React', 'Node.js'],
    image: 'https://...',
    link: 'https://...',
    github: 'https://...',
    details: 'Detailed description',
  },
  // Add more projects...
]

// Experience
experience: [
  {
    id: 1,
    title: 'Job Title',
    company: 'Company Name',
    period: 'Month Year - Month Year',
    duration: 'X years/months',
    description: 'Job description',
    achievements: ['Achievement 1', 'Achievement 2'],
  },
  // Add more experience...
]
```

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      accent: {
        400: '#fbbf24', // Change primary accent color
        500: '#f59e0b', // Change secondary accent
        // ... more colors
      },
    },
  },
}
```

### Disable Smooth Scrolling

To go back to normal scrolling, edit `app/page.tsx`:

```typescript
useEffect(() => {
  // Comment out these lines:
  // document.body.style.overflow = 'hidden';
  // document.documentElement.style.overflow = 'hidden';
  // setupCustomScroll();
  
  return () => {
    // ...
  };
}, []);
```

### Add Profile Image

1. Place your profile image in `public/images/profile.jpg`
2. Update `components/HeroSection.tsx`:

```jsx
<img
  src="/images/profile.jpg"
  alt="Ajaykumar Solanki"
  className="w-full h-full object-cover"
/>
```

## 📱 Testing Responsiveness

1. Open DevTools (F12)
2. Click Device Toolbar (Ctrl+Shift+M)
3. Test different breakpoints:
   - Mobile: 320px - 640px
   - Tablet: 641px - 1024px
   - Desktop: 1025px+

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

### Deploy to Other Services

#### Netlify
```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

#### GitHub Pages
```bash
npm run build
# Push to repository with .next folder
```

#### Traditional Server
```bash
npm run build
npm start
```

## 🔍 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Dependencies Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and lock file
rm -rf node_modules package-lock.json
# On Windows: rmdir /s node_modules & del package-lock.json

# Reinstall
npm install
```

### Styling Issues
```bash
# Rebuild Tailwind CSS
npm run dev

# Or manually trigger rebuild
touch tailwind.config.js
```

### Clear Build Cache
```bash
rm -rf .next
npm run build
```

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GSAP Docs](https://gsap.com/docs/v3/)
- [React Docs](https://react.dev/)

## ✅ Checklist Before Going Live

- [ ] Update all personal information in `data/portfolio.ts`
- [ ] Add profile image
- [ ] Update project links and descriptions
- [ ] Set correct social media links
- [ ] Update contact email and phone
- [ ] Test on mobile and desktop
- [ ] Check accessibility (keyboard navigation)
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Set custom domain (if deploying)
- [ ] Enable HTTPS on your domain
- [ ] Update meta tags and SEO

## 🎯 Next Steps

1. ✅ Customize portfolio data
2. ✅ Add your profile image
3. ✅ Test locally
4. ✅ Deploy to production
5. ✅ Share with the world!

## 💡 Tips & Best Practices

### Performance
- Use optimized images (compress before adding)
- Keep external requests minimal
- Leverage browser caching
- Monitor bundle size

### SEO
- Update meta tags in `app/layout.tsx`
- Use descriptive project titles
- Include keywords naturally
- Submit sitemap to search engines

### Accessibility
- Use semantic HTML (already done!)
- Ensure color contrast is sufficient
- Add alt text to all images
- Test keyboard navigation

### Security
- Keep dependencies updated: `npm update`
- Use HTTPS for deployment
- Sanitize form inputs before sending
- Don't expose sensitive information

---

**Need Help?** Check the main [README.md](README.md) for more information!

**Last Updated**: March 2026
