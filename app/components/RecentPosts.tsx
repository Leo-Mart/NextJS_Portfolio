import Link from "next/link";
import { getPosts } from "@/lib/posts";
import Posts from "./Posts";

const RecentPosts = async () => {
  const posts = await getPosts(4);

  return (
    <section className="py-5">
      <div>
        <h2 className="text-3xl mb-12">Recent Posts</h2>
        <Posts posts={posts} />

        <Link
          href="/posts"
          className="mt-8 inline-flex items-center gap-2 underline"
        >
          <span>All posts</span>
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;
