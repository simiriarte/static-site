# Simple Static Site Generator

A lightweight, no-framework static site generator that converts markdown files to beautiful HTML pages. Perfect for blogs, documentation, and simple websites.

## Features

✅ **Markdown to HTML conversion** - Write content in markdown  
✅ **Blog support** - Automatic blog index generation  
✅ **Clean template system** - Simple HTML templates with placeholders  
✅ **Modern responsive design** - Mobile-first CSS  
✅ **Contact form** - Ready-to-use contact form with validation  
✅ **Development server** - Built-in server for local development  
✅ **Fast builds** - Minimal dependencies, quick generation  

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build the site**
   ```bash
   npm run build
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Visit your site**
   Open http://localhost:3000 in your browser

## Project Structure

```
├── src/
│   ├── content/          # Page content (markdown files)
│   │   ├── index.md      # Homepage
│   │   ├── about.md      # About page
│   │   ├── faq.md        # FAQ page
│   │   └── contact.md    # Contact page
│   ├── blog/             # Blog posts (markdown files)
│   │   ├── getting-started.md
│   │   └── markdown-tips.md
│   └── assets/           # Static assets
│       ├── css/style.css # Main stylesheet
│       ├── js/main.js    # JavaScript
│       └── images/       # Images
├── templates/
│   └── page.html         # Main page template
├── dist/                 # Generated static files (created after build)
├── build.js              # Build script
├── server.js             # Development server
└── package.json
```

## Creating Content

### Pages
Create a new `.md` file in `src/content/`:

```markdown
---
title: My New Page
description: A description for SEO
---

# My New Page

Content goes here in **markdown** format!
```

### Blog Posts
Create a new `.md` file in `src/blog/`:

```markdown
---
title: My Blog Post
description: Post description
date: 2024-01-15
---

# My Blog Post

Blog content in markdown...
```

## Customization

- **Styling**: Edit `src/assets/css/style.css`
- **JavaScript**: Edit `src/assets/js/main.js`  
- **Template**: Edit `templates/page.html`
- **Navigation**: Update the nav links in `templates/page.html`

## Deployment

The `dist/` folder contains your generated static site. You can deploy it to:

- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **Netlify**: Drag and drop the `dist` folder or connect your repo
- **Vercel**: Connect your repo or use Vercel CLI
- **Any web server**: Upload the `dist` folder contents

## Scripts

- `npm run build` - Generate static files
- `npm run dev` - Build and start development server  
- `npm run serve` - Serve existing built files

## Dependencies

Minimal dependencies for maximum simplicity:
- `marked` - Markdown processing
- `front-matter` - YAML front matter parsing
- `fs-extra` - Enhanced file operations

## License

MIT License - feel free to use for any project!