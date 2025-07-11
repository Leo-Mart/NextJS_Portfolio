import { getPosts } from "@/lib/posts";
import Posts from "../components/Posts";
import Page from "../components/layouts/Page";
import Container from "../components/Container";
import { Metadata } from "next";

const PostsPage = async () => {
  const posts = await getPosts();
  return (
    <Page>
      <Container>
        <section className="min-h-[80vh]">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl mb-12 border-b pb-4">Posts.</h1>
            <Posts posts={posts} />
          </div>
        </section>
      </Container>
    </Page>
  );
};

export const metadata: Metadata = {
  title: "Recent Posts",
  description: "Here are some recent posts that I've written.",
};

export default PostsPage;
