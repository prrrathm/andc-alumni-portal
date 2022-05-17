/*  ./components/Navbar.jsx     */
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 text-gray-600 body-font bg-white z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font cursor-pointer font-medium items-center text-gray-900 mb-2 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-sky-900 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Alumni Portal</span>
          </a>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-gray-900 hover:font-700 hover:underline underline-offset-2 cursor-pointer">
              Home
            </a>
          </Link>
          {/* <Link href="/about">
            <a className="mr-5 hover:text-gray-900 hover:font-700 hover:underline underline-offset-2 cursor-pointer">
              About
            </a>
          </Link> */}
          <Link href="/register">
            <a className="mr-5 hover:text-gray-900 hover:font-700 hover:underline underline-offset-2 cursor-pointer">
              Register
            </a>
          </Link>
          <Link href="/students">
            <a className="mr-5 hover:text-gray-900 hover:font-700 hover:underline underline-offset-2 cursor-pointer">
              Admin
            </a>
          </Link>
        <Link href="/login">
        <button className="inline-flex items-center bg-sky-900 text-gray-100 font-black py-0.5 px-1 hover:bg-gray-50 hover:text-sky-900 border-2 border-sky-900 rounded text-base mt-1 md:mt-0 cursor-pointer hover:scale-140">
          Login
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        </Link>
        
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
