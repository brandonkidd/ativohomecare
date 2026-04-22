# Handoff to Claude Code - Ativo Header Fix

**Date:** 2026-04-21  
**Project:** Ativo Next.js Site  
**Location:** `~/.openclaw/workspace/ativo-nextjs-site/`  
**Live Site:** https://ativo-nextjs-site.vercel.app/

## Current Issue

The header navigation is **invisible on page load** for all non-homepage pages (About, Services, Locations, etc.) because it starts with:
- Transparent background
- White text

This means white text on a white/light page background = invisible until user scrolls.

**Expected behavior:**
- **Homepage (/)**: Transparent header with white text (dark hero behind it) ✅ WORKING
- **All other pages**: White background + dark text from page load (immediately visible) ❌ NOT WORKING

## What's Been Tried

### Fix Attempt 1: Added page detection
- Added `usePathname()` to detect which page we're on
- Created `darkHeroPages` array with only `/`
- Set `isDarkHero` based on pathname

### Fix Attempt 2: Dynamic text color
- Added `useWhiteText` logic: only use white text when `!scrolled && isDarkHero`
- This works on scroll, but not on initial page load

### Fix Attempt 3: Show background on light pages
- Added `showBackground` logic: `scrolled || !isDarkHero`
- This SHOULD show background immediately on non-homepage pages
- Code looks correct but not working (possible cache/deploy issue)

## File Structure

```
ativo-nextjs-site/
├── src/
│   ├── components/
│   │   └── Navbar.tsx  ← THE FILE TO FIX
│   ├── app/
│   │   ├── page.tsx          (homepage)
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── locations/page.tsx
│   │   └── layout.tsx
├── package.json
└── next.config.ts
```

## Current Navbar.tsx State

**Key variables:**
- `pathname` - Current route from `usePathname()`
- `scrolled` - Boolean, true when scrollY > 40
- `isDarkHero` - Boolean, true only for homepage
- `useWhiteText` - Boolean, determines text color
- `showBackground` - Boolean, determines if header has bg-white

**The logic:**
```typescript
const useWhiteText = !scrolled && isDarkHero;
const showBackground = scrolled || !isDarkHero;
```

**Applied to header:**
```typescript
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  showBackground
    ? 'bg-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'
}`}
```

## How to Fix in Claude Code

1. **Open project:**
   ```bash
   cd ~/.openclaw/workspace/ativo-nextjs-site
   npm run dev
   ```

2. **Test in browser:**
   - Navigate to http://localhost:3000/about
   - Inspect the `<header>` element
   - Check if `bg-white/95` class is applied on page load
   - If not, debug why `showBackground` isn't working

3. **Likely issue:**
   - SSR/hydration mismatch (pathname might be undefined on first render)
   - React state initialization timing
   - Need to force header to show on non-homepage pages before JS loads

4. **Quick debug test:**
   Add a console.log in Navbar.tsx:
   ```typescript
   console.log({
     pathname,
     isDarkHero,
     scrolled,
     showBackground,
     useWhiteText
   });
   ```
   
   Should show `showBackground: true` on /about page load.

5. **Possible solution:**
   If `pathname` is `null` on first render, you might need:
   ```typescript
   const showBackground = scrolled || !isDarkHero || pathname !== '/';
   ```

## What Brandon Wants

**Final behavior:**
- Homepage: Transparent header, white text (current: ✅)
- About/Services/Locations/etc: White header, dark text from page load (current: ❌)
- All pages: On scroll, add white background + shadow (current: ✅)

## Deploy Instructions

Once fixed in dev:
```bash
git add src/components/Navbar.tsx
git commit -m "Fix header visibility on light pages"
git push origin main
```

Vercel will auto-deploy.

## Reference Image

Brandon sent this as the design goal (premium health/longevity site):
- Large hero image with stretching person
- Semi-transparent header with frosted glass effect
- Header visible from page load
- Clean, modern aesthetic

This is for future hero redesign (lower priority than fixing current header visibility).

---

**TL;DR:** Header needs to be visible (white bg + dark text) on non-homepage pages from page load, before any scrolling. Code looks correct but isn't working - likely SSR/hydration issue. Test in dev mode to debug.
