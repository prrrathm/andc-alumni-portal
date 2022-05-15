import { Register } from "../components/Register";

const register = () => {
  return (
    <section className="body-font">
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6"></div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center ">
          <h1 className="m:text-5xl text-5xl font-black title-font mb-10 text-gray-900">
            Sign Up
          </h1>
          <div className="bg-gray-900"></div>
          <Register />
        </div>
        {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button> */}
      </div>
      </div>
    </section>
  );
};

export default register;
