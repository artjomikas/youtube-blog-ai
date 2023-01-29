import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Tooltip from "../components/Tooltip";

const Login = () => {
  return (
    <div className="relative w-full overflow-hidden font-outfit text-gray-900">
      <div className="w-1/3 gradient h-full hidden absolute top-0 left-0 md:block"></div>

      <div className="w-full flex min-h-screen flex-col items-center p-10 sm:justify-center md:w-2/3 xl:p-0 float-right">
        <Link className="absolute left-[35%] top-4 cursor-pointer" to="/">
          <Tooltip message={"Go back"} className="w-full relative">
            <div className="w-[100px]">
              <IoMdArrowRoundBack size="25" />
            </div>
          </Tooltip>
        </Link>

        {/* <button className="absolute left-[35%] top-4 px-4 py-2 bg-slate-800 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-slate-700 active:bg-slate-900 focus:outline-none focus:border-slate-900 focus:ring focus:ring-slate-300 disabled:opacity-25 transition ml-4">
          GO BACK
        </button> */}

        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="mb-4 bg-gradient-to-r from-slate-800 to-violet-700 bg-clip-text text-5xl leading-relaxed font-bold  text-transparent">
            Log in
          </h1>

          <div className="flex flex-col gap-y-6">
            {/* //TODO ADD LINK TO HREF */}
            <a
              href=""
              className="flex w-full items-center space-x-3 rounded border border-slate-200 py-3 px-3 font-medium text-slate-500 transition duration-300 hover:border-slate-300 hover:shadow"
            >
              <FcGoogle size="35" className="mr-1" />
              <span>Sign in with Google</span>
            </a>

            {/* //TODO ADD LINK TO HREF */}
            <a
              href=""
              className="flex w-full items-center space-x-3 rounded border border-slate-200 py-3 px-3 font-medium text-slate-500 transition duration-300 hover:border-slate-300 hover:shadow"
            >
              <AiFillGithub size="35" className="mr-1" />
              <span>Sign in with GitHib</span>
            </a>
          </div>

          <div className="mt-10  flex flex-row items-center justify-between text-slate-400">
            <p class="w-full whitespace-nowrap text-md">
              Or sign in with email and password
            </p>
            <hr class="mr-2 w-full" />
          </div>

          <div className="py-6">
            <label
              className="block font-medium text-sm text-slate-700"
              for="email"
            >
              Email
            </label>
            <input
              className="outline-none py-2 px-2 border border-voilet-200 focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50 rounded shadow-sm mt-1 block w-full"
              id="email"
              type="email"
              required
              autoFocus
            />
          </div>

          <div>
            <label
              className="block font-medium text-sm text-slate-700"
              for="password"
            >
              Password
            </label>
            <input
              className="outline-none py-2 px-2 border border-voilet-200 focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50 rounded shadow-sm mt-1 block w-full"
              id="password"
              type="password"
              required
            />
          </div>

          <div className="flex justify-between pt-6 items-center ">
            <a className="text-sm text-slate-500 hover:text-slate-800 hover:underline cursor-pointer">
              Need an account?
            </a>
            <div className="flex items-center">
              <a className="text-sm text-slate-500 hover:text-slate-800 hover:underline cursor-pointer">
                Forgot Password?
              </a>
              <button className="px-4 py-2 bg-slate-800 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-slate-700 active:bg-slate-900 focus:outline-none focus:border-slate-900 focus:ring focus:ring-slate-300 disabled:opacity-25 transition ml-4">
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
