import Image from "next/image";
import Link from "next/link";

import { ProjectMetadata } from "@/lib/projects";
import { formatDate } from "@/lib/utils";

const Projects = ({ projects }: { projects: ProjectMetadata[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <li
          key={project.slug}
          className="w-full h-full shadow-xl hover:shadow-2xl/80 transition ease-out duration-1000 rounded-md"
        >
          <Link href={`/projects/${project.slug}`}>
            <div className="h-45">
              <h1 className="font-bold text-xl px-2 pt-6">{project.title}</h1>
              <p className="text-md px-4 py-4 text-wrap truncate">
                {project.summary}
              </p>
              <p className="text-xs px-4 py-4">
                {formatDate(project.publishedAt ?? "")}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
