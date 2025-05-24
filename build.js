const fs = require('fs-extra');
const path = require('path');
const { marked } = require('marked');
const fm = require('front-matter');

// Configuration
const config = {
  srcDir: 'src',
  outputDir: 'dist',
  templatesDir: 'templates',
  contentDir: 'content',
  blogDir: 'blog'
};

// Ensure output directory exists
async function ensureOutputDir() {
  await fs.ensureDir(config.outputDir);
  await fs.ensureDir(path.join(config.outputDir, 'blog'));
}

// Read template file
async function readTemplate(templateName) {
  const templatePath = path.join(config.templatesDir, `${templateName}.html`);
  return await fs.readFile(templatePath, 'utf8');
}

// Configure marked to suppress warnings
marked.setOptions({
  mangle: false,
  headerIds: false
});

// Process markdown file
function processMarkdown(content) {
  const parsed = fm(content);
  const html = marked(parsed.body);
  return {
    attributes: parsed.attributes,
    html: html
  };
}

// Generate page from markdown
async function generatePage(markdownPath, outputPath, template) {
  const content = await fs.readFile(markdownPath, 'utf8');
  const processed = processMarkdown(content);
  
  let html = template
    .replace('{{title}}', processed.attributes.title || 'Untitled')
    .replace('{{content}}', processed.html)
    .replace('{{description}}', processed.attributes.description || '')
    .replace('{{date}}', processed.attributes.date || '');

  await fs.writeFile(outputPath, html);
  console.log(`Generated: ${outputPath}`);
}

// Generate blog index
async function generateBlogIndex(blogPosts, template) {
  const blogList = blogPosts.map(post => `
    <article class="blog-preview">
      <h2><a href="/blog/${post.slug}.html">${post.title}</a></h2>
      <p class="date">${post.date}</p>
      <p>${post.description}</p>
    </article>
  `).join('');

  const html = template
    .replace('{{title}}', 'Blog')
    .replace('{{content}}', `<h1>Blog Posts</h1>${blogList}`)
    .replace('{{description}}', 'Latest blog posts')
    .replace('{{date}}', '');

  await fs.writeFile(path.join(config.outputDir, 'blog', 'index.html'), html);
  console.log('Generated: blog/index.html');
}

// Copy static assets
async function copyAssets() {
  const assetsDir = path.join(config.srcDir, 'assets');
  if (await fs.pathExists(assetsDir)) {
    await fs.copy(assetsDir, path.join(config.outputDir, 'assets'));
    console.log('Copied assets');
  }
}

// Main build function
async function build() {
  console.log('Building static site...');
  
  await ensureOutputDir();
  
  // Read templates
  const pageTemplate = await readTemplate('page');
  
  // Process content pages
  const contentDir = path.join(config.srcDir, config.contentDir);
  if (await fs.pathExists(contentDir)) {
    const contentFiles = await fs.readdir(contentDir);
    for (const file of contentFiles) {
      if (path.extname(file) === '.md') {
        const name = path.basename(file, '.md');
        const markdownPath = path.join(contentDir, file);
        const outputPath = path.join(config.outputDir, `${name}.html`);
        await generatePage(markdownPath, outputPath, pageTemplate);
      }
    }
  }
  
  // Process blog posts
  const blogDir = path.join(config.srcDir, config.blogDir);
  const blogPosts = [];
  
  if (await fs.pathExists(blogDir)) {
    const blogFiles = await fs.readdir(blogDir);
    for (const file of blogFiles) {
      if (path.extname(file) === '.md') {
        const name = path.basename(file, '.md');
        const markdownPath = path.join(blogDir, file);
        const outputPath = path.join(config.outputDir, 'blog', `${name}.html`);
        
        // Read front matter for blog index
        const content = await fs.readFile(markdownPath, 'utf8');
        const parsed = fm(content);
        
        blogPosts.push({
          slug: name,
          title: parsed.attributes.title || name,
          date: parsed.attributes.date || '',
          description: parsed.attributes.description || ''
        });
        
        await generatePage(markdownPath, outputPath, pageTemplate);
      }
    }
    
    // Sort blog posts by date (newest first)
    blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    await generateBlogIndex(blogPosts, pageTemplate);
  }
  
  // Copy static assets
  await copyAssets();
  
  console.log('Build complete!');
}

// Run build
build().catch(console.error); 