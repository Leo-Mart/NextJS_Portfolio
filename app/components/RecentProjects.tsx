import Link from "next/link";
import { getProjects } from "@/lib/projects";
import Projects from "./Projects";

const RecentProjects = async () => {
  const projects = await getProjects(2);

  return (
    <section className="py-5">
      <div>
        <h2 className="text-3xl mb-12">Recent Projects</h2>
        <Projects projects={projects} />

        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 underline"
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  );
};

export default RecentProjects;
