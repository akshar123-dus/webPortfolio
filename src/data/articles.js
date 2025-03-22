// src/data/articles.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Path to your articles directory
const articlesDirectory = path.join(
  process.cwd(),
  "public",
  "MarkDownFiles",
  "Articles"
);

export function getAllArticles() {
  // 1. Get all filenames in the articles directory
  const filenames = fs.readdirSync(articlesDirectory);

  // 2. For each file, read and parse frontmatter
  const articles = filenames.map((filename) => {
    // Remove the .md extension to get the slug
    const slug = filename.replace(/\.md$/, "");

    // Read the file contents
    const filePath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Parse frontmatter using gray-matter
    const { data, content } = matter(fileContents);

    // Return an article object
    return {
      slug, // e.g. "how-to-build-a-nextjs-app"
      frontmatter: data,
      content, // raw Markdown content
    };
  });

  return articles;
}

export function getArticleBySlug(slug) {
  // Construct the path from the slug (e.g. "how-to-build-a-nextjs-app.md")
  const filePath = path.join(articlesDirectory, slug + ".md");

  // If the file doesn’t exist, return null
  if (!fs.existsSync(filePath)) {
    return null;
  }

  // Read and parse the file
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data,
    content,
  };
}
