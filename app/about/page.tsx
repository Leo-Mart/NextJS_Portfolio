import Page from "../components/layouts/Page";
import Container from "../components/Container";
import MoreInfo from "../components/about/MoreInfo";

const AboutPage = () => {
  return (
    <Page>
      <Container>
        <h1 className="text-5xl border-b pb-4 mb-12">About Me.</h1>
        <div className="min-h-full">
          <section className="pt-12 lg:pt-16 xl:pt-20">
            {/* More info */}
            <MoreInfo />
          </section>
          <section className="my-10">
            {/* Tech stach/stuff ive worked with */}
            <div className="flex border-t">
              <div className="text-center flex-1 my-2">
                <h3 className="text-2xl p-2">Languages I Speak</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript/Typescript</li>
                  <li>HTMX</li>
                  <li>Go</li>
                  <li>Java</li>
                </ul>
              </div>

              <div className="text-center flex-1 my-2">
                <h3 className="text-2xl p-2">Dev Tools</h3>
                <ul>
                  <li>VsCode</li>
                  <li>Neovim</li>
                  <li>Linux (I use Arch btw)</li>
                  <li>Git</li>
                  <li>NextJS</li>
                  <li>React</li>
                  <li>Tailwind</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </Page>
  );
};

export default AboutPage;
