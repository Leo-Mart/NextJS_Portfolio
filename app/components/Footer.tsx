import config from "@/portfolio.config.js";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-3xl px-8 mx-auto">
      <div className="w-full border-t-black py-8 lg:py-16 flex flex-row gap-3">
        <div className="flex flex-col flex-1 items-start justify-betweeen gap-10 lg:flex-row lg:gap-0">
          <div className="w-full">
            <Link
              className="text-lg leading-normal md:text-xl lg:text-2xl"
              href="/"
            >
              {config.name}
            </Link>
            <p className="body-0 mt-3 flex w-full justify-betweeen">
              <span>{config.byline}</span>
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col flex-1 gap-4 lg:w-1/2">
          <h3 className="text-xs font-semibold uppercase leading-7 tracking-[0.2em]">
            Get In Touch
          </h3>
          <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-2">
            {[
              {
                title: "Email",
                href: `mailto:${config.email}`,
              },
              {
                title: "LinkedIn",
                href: config.linkedInUrl,
              },
              {
                title: "Github",
                href: config.githubUrl,
              },
            ].map((item, i) => {
              return (
                <li className="text-base lg:text-lg" key={i}>
                  <Link
                    className="hover:underline"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
