n this project, check out every component where I have used z-index usin tailwind class or through globals as well, list out the component names and accordingly to the usage, understand the depth for that component that z-index is creating and defined the related variables in :root in globals.css

Make sure to list out the names of the components as well.

Now I have the full picture. Here's the complete z-index layer map before I write anything:

Layer Value Components
--z-behind-deep -3 .rectangle, .rectangle_transparent (greetings.module.css)
--z-behind -2 .greetings::before, .circle, .triangle_1–4 (greetings.module.css)
--z-below -1 BackdropOverlay, ImageBackground, GreetingsParticles
--z-base 0 Orb
--z-content 10 GreetingsImage, SocialMedia
--z-nav 20 Sidebar
--z-dropdown 1 ThemeToggle SVG icons (within-component stacking, above pseudo-element ball)
--z-toast 50 ToastContainer (already defined)
--z-floating 100 FloatingMenu
Now applying all changes — globals.css first, then each component.

Let me re-read sidebar.tsx to fix that last edit correctly.

All changes are done. Here's the full summary:

Components with z-index usage
Component File Old value New class Layer
BackdropOverlay backdrop.overlay.tsx -z-1 z-(--z-below) -1
ImageBackground image.background.tsx -z-1 z-(--z-below) -1
GreetingsParticles greetings.particles.tsx z-[-1] z-(--z-below) -1
Orb orb.tsx z-0 z-(--z-base) 0
GreetingsImage greetings.image.tsx z-10 z-(--z-content) 10
SocialMedia social.media.tsx z-10 z-(--z-content) 10
Sidebar sidebar.tsx z-20 z-(--z-nav) 20
ThemeToggle (SVG icons) theme.toggle.tsx z-(--z-dropdown) (unchanged — now defined) 1
ToastContainer toast.tsx z-(--z-toast) (unchanged) 50
FloatingMenu floating.menu.tsx z-100 z-(--z-floating) 100
CSS shapes (.rectangle, .rectangle_transparent) greetings.module.css z-index: -3 var(--z-behind-deep) -3
CSS shapes (.greetings::before, .circle, .triangle_1–4) greetings.module.css z-index: -2 var(--z-behind) -2
Variables added to :root in globals.css

--z-behind-deep: -3; /_ deepest bg shapes — greetings rectangles _/
--z-behind: -2; /_ bg decorative shapes — greetings ::before, circles, triangles _/
--z-below: -1; /_ below-content — backdrop overlay, image bg, particles _/
--z-base: 0; /_ ambient bg — orb _/
--z-dropdown: 1; /_ within-component icon layer — theme toggle SVGs above slider ball _/
--z-content: 10; /_ in-page content — greeting image, social links _/
--z-nav: 20; /_ navigation — sidebar _/
--z-toast: 50; /_ notifications — toast container _/
--z-floating: 100; /_ top-level floating UI — floating menu _/
--z-dropdown was the only variable already referenced in components but missing from :root — that's now defined.

Cannot edit in read-only editor
