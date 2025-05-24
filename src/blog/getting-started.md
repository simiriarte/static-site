---
title: Getting Started with Static Site Generation
description: Learn how to build your first static site
date: 2024-01-15
---

# Getting Started with Static Site Generation

Welcome to the world of static site generation! If you're new to this approach, you're in for a treat. Static sites offer incredible performance, security, and simplicity.

## What is a Static Site?

A static site is a website that consists of fixed content files (HTML, CSS, JavaScript) that don't change unless you manually update them. Unlike dynamic sites that generate content on-the-fly, static sites are pre-built and served directly to users.

## Why Choose Static?

### Performance
Static sites are **fast**. There's no database queries, no server-side processing, just instant delivery of pre-built files.

### Security
With no database or server-side code, there are fewer attack vectors. Your site is inherently more secure.

### Cost-Effective
Host your site for free on platforms like GitHub Pages, Netlify, or Vercel. No need for expensive servers.

### Developer Experience
Write in markdown, version control with Git, and deploy with simple commands.

## Getting Started

Here's how to create your first page:

1. Create a new `.md` file in `src/content/`
2. Add front matter with title and description
3. Write your content in markdown
4. Run `npm run build`
5. Your HTML is generated automatically!

```markdown
---
title: My New Page
description: A description of my page
---

# My New Page

This is my content written in **markdown**!
```

## Next Steps

- Explore the [documentation](/faq) for more advanced features
- Check out our [about page](/about) to learn more about our philosophy
- [Contact us](/contact) if you have questions

Happy building! 🚀 