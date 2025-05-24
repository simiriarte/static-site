---
title: Frequently Asked Questions
description: Common questions and answers about our static site generator
---

# Frequently Asked Questions

## Getting Started

### How do I create a new page?
Simply create a new `.md` file in the `src/content/` directory. Add front matter at the top with a title and description, then write your content in markdown.

### How do I add a blog post?
Create a new `.md` file in the `src/blog/` directory. Make sure to include a `date` field in the front matter for proper sorting.

### How do I build the site?
Run `npm run build` to generate the static files, or `npm run dev` to build and start a development server.

## Customization

### Can I modify the design?
Absolutely! Edit the CSS file at `src/assets/css/style.css` to customize the appearance. You can also modify the HTML template at `templates/page.html`.

### How do I add custom JavaScript?
Add your JavaScript to `src/assets/js/main.js` or create new JS files in the assets directory.

### Can I use custom HTML in markdown?
Yes! The markdown processor supports HTML, so you can include custom HTML directly in your markdown files.

## Deployment

### Where can I host my site?
Anywhere that serves static files! Popular options include:
- GitHub Pages
- Netlify
- Vercel
- Amazon S3
- Your own server

### Do I need a server?
No! This generates static HTML files that can be served from any web server or CDN.

## Technical

### What dependencies does this use?
We keep dependencies minimal:
- `marked` for markdown processing
- `front-matter` for parsing front matter
- `fs-extra` for file operations

### Is it fast?
Yes! Static sites are inherently fast because there's no server-side processing. The generated HTML loads instantly.

### Can I add a contact form?
Yes! We include a basic contact form example. For full functionality, you'll need to connect it to a service like Formspree or Netlify Forms.

## Still have questions?

[Contact us](/contact) and we'll be happy to help! 