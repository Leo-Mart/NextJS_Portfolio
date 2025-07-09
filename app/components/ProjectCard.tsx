import Link from "next/link";

interface Props {
  title: string;
  link: string;
  desc: string;
}
const ProjectCard = ({ title, link, desc }: Props) => {
  return (
    <Link
      href={link}
      className="w-full h-full shadow-xl hover:shadow-2xl/80 transition ease-out duration-1000 rounded-md"
      target="_blank"
    >
      <div className="h-45">
        <h1 className="font-bold text-xl px-2 pt-6">{title}</h1>
        <div className="text-md px-4 py-4 text-wrap truncate">{desc}</div>
      </div>
    </Link>
  );
};

export default ProjectCard;
