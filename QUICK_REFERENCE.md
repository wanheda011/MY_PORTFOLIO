# ⚡ Quick Reference Card

## 🚀 Getting Started (3 Steps)

```bash
# Step 1: Navigate to project
cd "d:\New folder"

# Step 2: Install dependencies
npm install

# Step 3: Start development server
npm run dev
```

**Then open**: http://localhost:3000

---

## 📝 Common Tasks

### Update Portfolio Content
1. Open `data/portfolio.ts`
2. Update personal info, skills, projects, experience
3. Save file - changes appear instantly (hot reload)

### Change Theme Colors
1. Open `tailwind.config.js`
2. Modify colors in the `theme.extend.colors` section
3. Save - colors update automatically

### Add Profile Image
1. Save image to `public/images/profile.jpg`
2. Update `components/HeroSection.tsx` and `components/AboutSection.tsx`
3. Replace emoji with img tag

### Customize Animations
1. Edit component files in `components/`
2. Modify GSAP animations in `useEffect` hooks
3. Or create new utilities in `lib/gsap-utils.ts`

### Add New Section
1. Create new component in `components/NameSection.tsx`
2. Add GSAP animations
3. Import in `app/page.tsx`
4. Add navigation link in `Header.tsx`

---

## 🛠️ Available Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build           # Build for production
npm start               # Start production server (after build)
npm run lint            # Check code quality

# Utilities
npm install             # Install all dependencies
npm update              # Update all packages
npm install gsap        # Install specific package
npm uninstall package   # Remove a package
```

---

## 📁 Key Files to Edit

| File | Purpose | What to Change |
|------|---------|-----------------|
| `data/portfolio.ts` | Portfolio content | Name, skills, projects, experience |
| `tailwind.config.js` | Theme colors | Accent, dark theme colors |
| `app/layout.tsx` | SEO metadata | Title, description, meta tags |
| `components/Header.tsx` | Navigation | Menu links, social media |
| `styles/globals.css` | Global styles | Animations, utilities |
| `.env.local` | Environment | Site URL, API keys |

---

## 🎨 Tailwind CSS Shortcuts

```html
<!-- Backgrounds -->
<div class="bg-dark-900">    <!-- Dark background -->
<div class="bg-accent-400">  <!-- Accent color -->
<div class="bg-gradient-accent"> <!-- Yellow/orange gradient -->

<!-- Text -->
<span class="text-accent-400">    <!-- Accent text -->
<span class="gradient-text">      <!-- Gradient text -->

<!-- Effects -->
<div class="glass">              <!-- Glassmorphism -->
<div class="glow">               <!-- Glow effect -->
<div class="shadow-soft">        <!-- Soft shadow -->

<!-- Animation -->
<div class="animate-pulse">     <!-- Pulsing animation -->
<div class="hover:scale-110">   <!-- Hover scale -->
```

---

## 🎬 Common GSAP Patterns

### Fade In on Scroll
```typescript
gsap.from(element, {
  opacity: 0,
  y: 50,
  duration: 0.8,
  scrollTrigger: { trigger: element, start: 'top center' }
});
```

### Animate Counter
```typescript
const counter = { value: 0 };
gsap.to(counter, {
  value: 100,
  duration: 2,
  onUpdate() {
    element.textContent = Math.floor(counter.value);
  }
});
```

### Stagger Items
```typescript
gsap.from(items, {
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.6
});
```

---

## 🌐 Deployment Shortcuts

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```
Follow prompts - your site is live!

### Netlify
```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

### Traditional Server
```bash
npm run build
npm start
# Deploy the entire folder to your server
```

---

## 🔍 Debugging Tips

### Check browser console for errors
```bash
# Open: F12 or Ctrl+Shift+I
# Look for red errors in Console tab
```

### Scroll smooth but not working?
```bash
# Check that overflow is hidden:
# Look in styles/globals.css
```

### Animations not smooth?
1. Open DevTools (F12)
2. Check Performance tab
3. Look for frame drops

### Styling not updating?
```bash
# Hard refresh:
# Ctrl+Shift+R (Windows/Linux)
# Cmd+Shift+R (Mac)

# Or clear cache:
# Delete .next folder and run npm run dev
```

---

## 📱 Test Responsive Design

1. Open DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Select device:
   - **iPhone 12**: 390px
   - **iPad**: 768px
   - **Desktop**: 1920px

---

## 🔗 Useful Links

| Resource | URL |
|----------|-----|
| Next.js Docs | https://nextjs.org/docs |
| Tailwind CSS | https://tailwindcss.com/docs |
| GSAP Docs | https://gsap.com/docs/v3/ |
| React Docs | https://react.dev/ |
| Vercel | https://vercel.com |

---

## ✅ Before Deployment

- [ ] Update all portfolio data
- [ ] Add profile image
- [ ] Test on mobile
- [ ] Update meta tags
- [ ] Check all links
- [ ] Test contact form
- [ ] Optimize images
- [ ] Set up analytics
- [ ] Enable HTTPS

---

## 🎯 Project Structure (Quick View)

```
app/                    # Next.js app (homepage)
components/             # React components (sections)
data/                   # Portfolio content
lib/                    # Utilities & helpers
hooks/                  # Custom React hooks
styles/                 # Global CSS
public/                 # Static assets
tailwind.config.js      # Tailwind config
package.json            # Dependencies
```

---

## 💡 Pro Tips

✨ **Hot Reload**: Edit files and save to see changes instantly  
⚡ **Fast Development**: Tailwind CSS purges unused styles automatically  
🎨 **Dark Mode Ready**: Already configured with dark theme  
📱 **Mobile First**: Designed for mobile, scales up beautifully  
🚀 **Production Ready**: Deploy anytime with `npm run build`

---

## 🆘 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Animations lag | Check Performance tab in DevTools |
| Styles not applied | Hard refresh or clear `.next` folder |
| Images not showing | Verify path and file exists in `public/` |
| Build failing | Delete `node_modules` and `.next`, then `npm install` |

---

## 🚀 Workflow

```
Edit Code → Save → Auto Reload → Check Browser → Deploy
```

That's it! Changes appear instantly during development.

---

## 📞 Need Help?

📖 Check `README.md` for comprehensive documentation  
🚀 Check `SETUP.md` for installation & configuration  
🎬 Check `ANIMATION_GUIDE.md` for animation customization

---

**Last Updated**: March 2026  
**Go Build Something Amazing!** 🎉
