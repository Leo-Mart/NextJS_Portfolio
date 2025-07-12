import path from "path";
import fs from "fs";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "content", "projects");

export type Project = {
  metadata: ProjectMetadata;
  content: string;
};

export type ProjectMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  slug: string;
};

const getProjectBySlug = async (slug: string): Promise<Project | null> => {
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

const getProjects = async (limit?: number): Promise<ProjectMetadata[]> => {
  const files = fs.readdirSync(rootDirectory);

  const posts = files
    .map((file) => getProjectMetadata(file))
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

const getProjectMetadata = (filepath: string): ProjectMetadata => {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);
  return { ...data, slug };
};

export { getProjectBySlug, getProjects };
