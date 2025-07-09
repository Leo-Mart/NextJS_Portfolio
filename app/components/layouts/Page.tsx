import Nav from "../Nav";
import Footer from "../Footer";

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <div className="h-full bg-[#EAE4CA] text-[#5C6A72] dark:bg-[#333C43] dark:text-[#D3C6AA] transition-all duration-1000 ease-in-out">
      <div className="min-h-full pb-4 md:pb-12">
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
