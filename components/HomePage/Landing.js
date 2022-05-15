import Image from "next/image";

export const Landing = () => {
  return (
    <section className="flex text-gray-600 body-font mx-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-7xl text-3xl mb-4 font-black text-gray-900">
            Welcome to the Alumni Portal of
            <a
              className="text-white outline-title "
              href="https://www.andcollege.du.ac.in/"
              target="_blank"
              rel="noreferrer"
              style={{ WebkitTextStroke: "3px #0c4a6e" }}
            >
              {"  "}ANDC
            </a>
            .
          </h1>
          <div className="flex justify-center ">
            <button className="inline-flex text-white bg-[#101010] border-0 text-2xl font-bold py-2 px-6 hover:bg-white hover:text-[#101010] border-2 border-black hover:border-2 hover:border-black rounded-lg text-lg">
              Register Yourself
            </button>
          </div>
        </div>
        <div className="relative flex-1 items-center bg-gray-0 content-end lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <span className="after:block after:absolute after:b-1 after:l-0 after:h-20 after:w-230 after:rounded after:bg-sky-900">.</span> */}
          <div className="imgBox after:bg-sky-200">
            <img
              className="flex-auto justify-center object-right object-cover h-50 w-100 ..."
              alt="hero"
              src="/media-files/2-guys-standing.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
