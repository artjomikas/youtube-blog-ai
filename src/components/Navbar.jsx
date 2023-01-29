import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-[#0F172A]">
      <div className="flex justify-between items-center container md:max-w-screen-lg mx-auto p-4 h-[66px]">
        <Link to="/">
          <h1 className="font-medium cursor-pointer">blogger.ai</h1>
        </Link>

        <div className="flex gap-6  items-center">
          {["pricing", "blogs", "about"].map((elem) => (
            <Link to={`/${elem}`}>
              <h2 className="text-gray-400 cursor-pointer text-shadow font-medium hover:text-gray-100">
                {elem}
              </h2>
            </Link>
          ))}
        </div>

        <Link to="/login" className="">
          <button className="flex px-4 py-2 bg-slate-800 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-slate-700 active:bg-slate-900 focus:outline-none focus:border-slate-900 focus:ring focus:ring-slate-300 disabled:opacity-25 transition ml-4 shadow-2xl">
            log in
            <MdLogin size="14" className="mt-[1px]" />
          </button>
        </Link>


      </div>
    </div>
  );
};
export default Navbar;
