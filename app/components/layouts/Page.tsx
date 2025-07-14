import Nav from "../Nav";
import Footer from "../Footer";

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <div className="h-full bg-everforest-light text-everforest-light-text dark:bg-everforest-dark dark:text-everforest-dark-text transition-all duration-1000 ease-in-out">
      <div className="min-h-full pb-4 md:pb-12">
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
