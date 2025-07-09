import Link from "next/link";

const NotFound = () => {
  return (
    <main className="fixed flex bg-[#EAE4CA] dark:bg-[#333C43] h-full w-full items-center justify-center">
      <article>
        <Link
          href="/"
          className="text-7xl text-[#5C6A72] dark:text-[#D3C6AA] underline"
        >
          404
        </Link>
      </article>
    </main>
  );
};

export default NotFound;
