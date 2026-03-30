# 🎨 Ajaykumar Solanki - Premium Personal Portfolio Website

A stunning, modern personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **GSAP animations**. This portfolio features smooth scrolling, advanced animations, glassmorphism effects, and a premium dark theme design.

## ✨ Features

### 🎬 Animation & Interactions
- **GSAP ScrollTrigger** animations for all sections
- **Smooth custom scrolling** (no default scrollbars)
- **Text reveal** and **typing effects**
- **Parallax effects** on images and elements
- **Stagger animations** for cards and lists
- **Smooth transitions** between sections
- **Hover effects** with scale and glow animations
- **Animated counters** for statistics

### 🎨 Design
- **Dark theme** (dark navy/black background)
- **Accent gradient** (yellow/orange)
- **Glassmorphism effects** with backdrop blur
- **Soft shadows** and glow effects
- **Responsive design** (mobile + desktop)
- **Professional typography** and spacing
- **Custom color palette** with extended Tailwind theme

### 📱 Sections
1. **Hero Section** - Eye-catching introduction with typing effect
2. **Stats Section** - Animated counters for achievements
3. **About Section** - Professional background with parallax
4. **Skills Section** - Animated progress bars and skill tags
5. **Projects Section** - Card-based layout with hover tilt and modal
6. **Experience Section** - Timeline view of work history
7. **Workshops Section** - Training sessions and achievements
8. **Contact Section** - Contact form and social links
9. **Footer** - Navigation and social links

### 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: GSAP 3.12 (ScrollTrigger plugin)
- **Motion**: Framer Motion (optional)
- **Icons**: React Icons
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## 📦 Project Structure

```
.
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx       # Hero with typing effect
│   ├── StatsSection.tsx      # Animated statistics
│   ├── AboutSection.tsx      # About with parallax
│   ├── SkillsSection.tsx     # Skills with progress bars
│   ├── ProjectsSection.tsx   # Projects with modal
│   ├── ExperienceSection.tsx # Timeline
│   ├── WorkshopsSection.tsx  # Workshops/achievements
│   ├── ContactSection.tsx    # Contact form
│   ├── Footer.tsx            # Footer
│   └── index.ts              # Barrel exports
├── data/
│   └── portfolio.ts          # Portfolio content & data
├── hooks/
│   └── useScroll.ts          # Custom scroll hooks
├── lib/
│   └── gsap-utils.ts         # GSAP utility functions
├── styles/
│   └── globals.css           # Global styles & animations
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript config
├── next.config.js            # Next.js config
├── postcss.config.js         # PostCSS config
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.17 or later
- **npm** or **yarn** package manager

### Installation

1. **Clone or navigate to the project directory**
```bash
cd "d:\New folder"
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Copy environment variables**
```bash
cp .env.example .env.local
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Customization

### Update Portfolio Data

Edit [`data/portfolio.ts`](data/portfolio.ts) to customize:
- Personal information (name, email, phone, location)
- Bio and about section
- Skills with proficiency levels
- Projects with details and links
- Work experience and achievements
- Certifications
- Workshops and training sessions
- Social media links

### Update Contact Form

The contact form is ready to use. Currently, it logs to console. To enable email sending:

1. Install email service (e.g., EmailJS):
```bash
npm install @emailjs/browser
```

2. Update the `ContactSection.tsx` form handler to integrate with your email service

### Customize Colors

Edit [`tailwind.config.js`](tailwind.config.js):
- Change `accent` color (currently yellow/orange)
- Modify `dark` theme colors
- Adjust gradients and shadows

### Add Profile Image

Replace the placeholder emoji in `HeroSection.tsx` and `AboutSection.tsx`:
```jsx
<img
  src="/images/profile.jpg"
  alt="Profile"
  className="w-full h-full object-cover"
/>
```

## 🎬 Animation Features

### Available GSAP Animations
All animations are defined in [`lib/gsap-utils.ts`](lib/gsap-utils.ts):

- `fadeInUp()` - Fade in from bottom
- `fadeInDown()` - Fade in from top
- `slideInLeft()` - Slide from left
- `slideInRight()` - Slide from right
- `scaleIn()` - Scale from small to normal
- `staggerElements()` - Stagger multiple elements
- `textReveal()` - Text reveal effect
- `parallaxImage()` - Parallax effect
- `animateCounter()` - Animated number counter
- `pinSection()` - Pin section during scroll
- `horizontalScroll()` - Horizontal scrolling

### ScrollTrigger Features
- Sections animate on scroll with custom triggers
- Staggered animations for cards
- Parallax effects on images
- Smooth transitions between sections
- Performance-optimized with once animations where applicable

## 🛠️ Customization Guide

### Disable Scrollbars
The scrollbars are disabled by default in global CSS. To enable them:

Edit [`styles/globals.css`](styles/globals.css):
```css
/* Remove or comment out these sections */
html,
body {
  overflow: visible; /* Change from hidden */
}
```

### Modify Animation Duration
Edit component files to adjust animation speeds:
```jsx
gsap.from(element, {
  opacity: 0,
  y: 50,
  duration: 0.8, // Change this value
  ease: 'power2.out',
});
```

### Add More Sections
1. Create new component in `components/`
2. Add GSAP animations with ScrollTrigger
3. Import and add to `app/page.tsx`
4. Update navigation in `Header.tsx`

### Deploy

#### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Deploy to Other Services
Build for production:
```bash
npm run build
npm start
```

## 📱 Responsive Design

The portfolio is fully responsive with optimized animations for:
- **Mobile** (320px - 640px) - Stacked layout, touch-friendly
- **Tablet** (641px - 1024px) - 2-column grids
- **Desktop** (1025px+) - Full layout with parallax

## 🔧 Environment Variables

Create `.env.local` file with:
```env
NEXT_PUBLIC_SITE_NAME=Ajaykumar Solanki
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://gsap.com/docs/)
- [ScrollTrigger Plugin](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

## 📊 Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Font optimization with `next/font`
- ✅ Code splitting and lazy loading
- ✅ CSS optimization with Tailwind
- ✅ Minimal JavaScript bundle
- ✅ Smooth animations without blocking

## 🔐 SEO Optimization

- ✅ Meta tags for all pages
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Mobile-friendly responsive design
- ✅ Fast page load times

## 🐛 Troubleshooting

### Animations not working?
- Check browser console for errors
- Ensure GSAP is properly installed: `npm install gsap`
- Verify ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger)`

### Scrolling feels janky?
- Clear browser cache
- Disable browser extensions
- Check for conflicting CSS
- Ensure no other scroll libraries are loaded

### Images not showing?
- Verify image paths in `data/portfolio.ts`
- Check that images exist in `public/` folder
- Update image URLs for external images

### Styles not applying?
- Rebuild Tailwind: `npm run dev`
- Clear `.next` folder: `rm -rf .next`
- Ensure `globals.css` is imported in layout

## 📄 License

This portfolio template is open-source and available for personal and commercial use.

## 👨‍💼 About

**Ajaykumar Solanki**
- **Email**: ajay.solanki1106@gmail.com
- **Phone**: +91-8320531282
- **Location**: Vadodara, Gujarat, India
- **Role**: Full Stack Developer | Lecturer

Full Stack Developer with expertise in cloud-native applications, modern web technologies, and AI-driven solutions. IBM-certified developer skilled in scalable, secure, and containerized applications.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [GSAP](https://gsap.com/) - Animation library
- [Framer Motion](https://www.framer.com/motion/) - React motion library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

---

**Built with ❤️ using Next.js, Tailwind CSS, and GSAP**

**Last Updated**: March 2026
