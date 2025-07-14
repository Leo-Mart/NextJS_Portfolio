import Link from "next/link";

const MoreInfo = () => {
  return (
    <section className="lg:gap-18 flex flex-col gap-6 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <p className="mb-6 2xl:mb-8">
          After 10+ years of working in a factory, and then building computers,
          I decided it was time for something new. So I started studying to
          become a full-stack developer 2 years ago.
        </p>
        <p>
          Since then I&apos;ve learned a whole lot and got to try a bunch of
          different languages and technologies. I think I have found what I want
          to be when I grow up. I really enjoy exploring a problem and coming up
          with a solution and with programming there is always something new to
          learn or a new technology to try out.
        </p>
      </div>

      <div className="w-full lg:w-1/2">
        <p className="mb-6 2xl:mb-8">
          As a <em>full-stack developer</em> I get to be part of the whole
          process, which I thouroughly enjoy. Seeing a project through from
          start to finish and seeing all the part come together and interact is
          a rare joy.
        </p>
        <p>
          Want to talk? &gt;{" "}
          <Link className="underline" href="mailto:martinleodev@gmail.com">
            Send me an email
          </Link>
        </p>
      </div>
    </section>
  );
};

export default MoreInfo;
