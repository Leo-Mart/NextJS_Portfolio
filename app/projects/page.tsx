import config from "@/portfolio.config";
import Container from "../components/Container";
import Page from "../components/layouts/Page";
import Projects from "../components/Projects";
import { getProjects } from "@/lib/projects";
import Link from "next/link";
import { Metadata } from "next";

const ProjectsPage = async () => {
  const projects = await getProjects();
  return (
    <Page>
      <Container>
        <div className="min-h-[80vh] mx-auto">
          <div className="flex flex-col justify-start w-full mx-auto">
            <h1 className="text-5xl mb-12 pb-4 border-b">Projects.</h1>
          </div>

          <p className="text-center my-5 pb-5">
            Here you&apos;ll find some stuff that I have built. To see all my
            works, check out my{" "}
            <Link
              className="hover:underline"
              href={config.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
            , here you&apos;ll find school-projects, projects built along with
            tutorials or Udemy-courses and similar. There is also a lot of
            unfinished projects that I&apos;ll get to. One day.
          </p>
          <section className="mb-10">
            <Projects projects={projects} />
          </section>
        </div>
      </Container>
    </Page>
  );
};

export const metadata: Metadata = {
  title: "Latest Work and Projects",
  description: "The lastest projects that I've worked on.",
};

export default ProjectsPage;
