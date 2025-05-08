import { Post } from "~/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_data/posts/");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

/**
 * Retrieves a post by its slug.
 * The function reads the markdown file for the specified slug from the posts directory,
 * extracts the front matter and content, and returns a Post object.
 *
 * @param {string} slug - The slug of the post to retrieve.
 * @returns {Post} The post object containing the front matter data, slug, and content.
 */
export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

/**
 * Returns an array of all posts.
 * The posts are sorted in descending order by date.
 * @returns {Post[]} An array of all posts.
 */
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
