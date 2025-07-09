import { getPostBySlug, getPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { formatDate } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import Page from "@/app/components/layouts/Page";
import Container from "@/app/components/Container";

const generateStaticParams = async () => {
  const posts = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));

  return slugs;
};

const Post = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;
  return (
    <Page>
      <Container>
        <section>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/posts"
              className="mb-8 inline-flex items-center gap-2 text-sm"
            >
              <FaArrowLeft className="h-5 w-5" />
              <span>Back to posts</span>
            </Link>
            {image && (
              <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={title || ""}
                  className="object-cover"
                  fill
                />
              </div>
            )}
          </div>
          <header>
            <h1 className="">{title}</h1>
            <p className="mt-3 text-xs text-muted-foreground">
              {author} / {formatDate(publishedAt ?? "")}
            </p>
          </header>

          <main className="prose mt-16 dark:prose-invert">
            <MDXRemote source={content} />
          </main>
        </section>
      </Container>
    </Page>
  );
};
export { generateStaticParams };
export default Post;
