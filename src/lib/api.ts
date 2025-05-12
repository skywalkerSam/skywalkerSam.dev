import { Post } from "~/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_data/posts/");

// export function getPostSlugs() {
//   return fs.readdirSync(postsDirectory);
// }

export async function getPostSlugs() {
  try {
    return await fs.promises.readdir(postsDirectory);
  } catch (error) {
    console.error("Error reading post slugs:", error);
    return [];
  }
}

// export function getPostBySlug(slug: string) {
//   const realSlug = slug.replace(/\.md$/, "");
//   const fullPath = join(postsDirectory, `${realSlug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const { data, content } = matter(fileContents);

//   return { ...data, slug: realSlug, content } as Post;
// }

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  try {
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Post;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// export function getAllPosts(): Post[] {
//   const slugs = getPostSlugs();
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
//   return posts;
// }

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const postPromises = slugs.map((slug) => getPostBySlug(slug));
  const posts = (await Promise.all(postPromises))
    .filter((post): post is Post => post !== null)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
