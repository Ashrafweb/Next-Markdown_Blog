import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "blogs");

export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  contentHtml?: string;
}

// Get all blog posts (metadata only)
export function getAllPosts(): BlogPost[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      title: data.title,
      date: data.date,
      slug: data.slug,
    };
  });
}

// Get full blog post content
export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = remark().use(html).processSync(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title,
    date: data.date,
    slug: data.slug,
    contentHtml,
  };
}

// Get all slugs for static generation
export function getAllSlugs(): { slug: string }[] {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}
