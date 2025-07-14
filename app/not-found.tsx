import Link from "next/link";

const NotFound = () => {
  return (
    <main className="fixed flex bg-everforest-light dark:bg-everforest-dark h-full w-full items-center justify-center">
      <article>
        <Link
          href="/"
          className="text-7xl text-everforest-light-text dark:text-everforest-dark-text underline"
        >
          Page not found - 404
        </Link>
      </article>
    </main>
  );
};

export default NotFound;
