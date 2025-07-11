import Page from "./components/layouts/Page";
import Container from "./components/Container";
import Link from "next/link";
import Image from "next/image";
import RecentPosts from "./components/RecentPosts";
import RecentProjects from "./components/RecentProjects";

const HomePage = async () => {
  return (
    <Page>
      <Container>
        <header className="mb-0 flex flex-col items-stretch justify-between sm:px-8 md:mb-12 md:flex-row lg:mb-16 2xl:mb-20">
          <section className="w-full hidden md:block md:w-5/12 pt-16">
            <Image
              className="m-0 block h-full w-full object-cover rounded-lg p-0 grayscale priority"
              width={175}
              height={175}
              alt="Martin Picture"
              src="/images/authors/martin.jpg"
            ></Image>
          </section>
          <section className="flex w-full flex-col pb-8 pt-8 md:w-6/12 md:pb-0 md:pt-12 lg:pt-16">
            <h1 className="text-3xl leading-snug">
              Hello there, My name is Martin, full-stack developer based in
              Sweden. Welcome to this little page where I showcase some of my
              work and maybe share some reflections about nothing in particular.
            </h1>
            <p className="body-0 mt-5 text-xl xl:mt-8 2xl:mt-10">
              Check out some of my{" "}
              <Link className="font-medium hover:underline" href="/projects/">
                projects.
              </Link>{" "}
              Or learn more{" "}
              <Link className="font-medium hover:underline" href="/about/">
                about
              </Link>{" "}
              me
            </p>
          </section>
        </header>

        <RecentProjects />

        <RecentPosts />
      </Container>
    </Page>
  );
};

export default HomePage;
