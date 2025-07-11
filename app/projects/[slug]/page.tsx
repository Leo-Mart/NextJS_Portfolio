import { getProjectBySlug, getProjects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";

import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { formatDate } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import Page from "@/app/components/layouts/Page";
import Container from "@/app/components/Container";

const generateStaticParams = async () => {
  const posts = await getProjects();
  const slugs = posts.map((project) => ({ slug: project.slug }));

  return slugs;
};

const Project = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const { title, image, author, publishedAt } = metadata;
  return (
    <Page>
      <Container>
        <section>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center gap-2 text-sm"
            >
              <FaArrowLeft className="h-5 w-5" />
              <span>Back to projects</span>
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
export default Project;
