import { Register } from "../components/Register";

const register = () => {

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
          <h1 className="m:text-5xl text-5xl font-black title-font mb-2 text-gray-900">
            Sign Up
          </h1>
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p> */}
        </div>
        <div className="m-4">
        <Register />
        </div>
        {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button> */}
      </div>
    </section>
  );
};

export default register;
