import path from "path";
import fs from "fs";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "content", "posts");

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  slug: string;
};

const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContents);

    return { metadata: { ...data, slug }, content };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getPosts = async (limit?: number): Promise<PostMetadata[]> => {
  const files = fs.readdirSync(rootDirectory);

  const posts = files
    .map((file) => getPostMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
};

const getPostMetadata = (filepath: string): PostMetadata => {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);
  return { ...data, slug };
};

export { getPostBySlug, getPosts };
