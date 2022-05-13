import Head from "next/head";

const Login = () => {
  return (
    <>
      <div className="lg:flex justify-center">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-sky-900 font-display font-semibold lg:text-center xl:text-5xl xl:text-bold"
            >
              Log in
            </h2>
            <div className="mt-12">
              <form>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-sky-500"
                    type=""
                    placeholder="mike@gmail.com"
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                    <div>
                      <a className="text-xs font-display font-semibold text-sky-900 hover:text-sky-800 cursor-pointer">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-sky-500"
                    type=""
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mt-10">
                  <button className="bg-sky-900 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-sky-600 shadow-lg">
                    Log In
                  </button>
                </div>
              </form>
              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ?
                <a className="cursor-pointer text-sky-600 hover:text-sky-900">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
