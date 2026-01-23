# Advanced Landing Page

## Getting Started

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

## Project Structure

```
Advanced-Landing-Page/
├── index.html                 # Main HTML file
├── package.json               # Dependencies and scripts
├── src/
│   ├── js/
│   │   └── index.js          # Main JavaScript file
│   └── sass/
│       ├── main.scss          # Main SCSS entry point
│       ├── main.css           # Compiled CSS output
│       ├── _variables.scss    # SCSS variables
│       ├── _base.scss         # Base styles
│       ├── _layout.scss       # Layout styles
│       ├── _utilities.scss    # Utility classes
│       ├── _animations.scss   # Animation keyframes
│       └── components/        # Component-specific styles
│           ├── _navbar.scss
│           ├── _header_section.scss
│           ├── _house_section.scss
│           ├── _tour_section.scss
│           ├── _testimonials_section.scss
│           ├── _find-more_section.scss
│           ├── _subscribe_section.scss
│           ├── _form_section.scss
│           ├── _footer_section.scss
│           └── _cookie_banner.scss
└── public/
    ├── images/                # Image assets
    ├── icons/                 # Icon assets
    └── backgrounds/           # Background images
```

## SCSS Compilation

Watch and auto-compile SCSS files:
```bash
npm run scss
```

One-time compilation:
```bash
npm run scss:build
```

The SCSS files compile to `src/sass/main.css` which is referenced in `index.html`.
