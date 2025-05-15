import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "~/lib/api";
import { CMS_NAME } from "~/lib/constants";
import markdownToHtml from "~/lib/markdownToHtml";
// import Alert from "../../_components/alert";
import Container from "../../_components/container";
import Header from "../../_components/header";
import { PostBody } from "../../_components/post-body";
import { PostHeader } from "../../_components/post-header";

/**
 * Renders a blog post page.
 *
 * This component fetches the post data based on the provided slug,
 * converts the post content from markdown to HTML, and displays
 * the post with its header and body. If the post is not found, it
 * triggers a not found response.
 *
 * @param {Params} props - The parameters containing the post slug.
 * @returns {JSX.Element} The JSX element for the post page.
 */
export default async function Post(props: Params) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post?.content || "");

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | A Starboy's Blog`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
