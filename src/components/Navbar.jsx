import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import ProfileAvatar from "./ProfileAvatar";

import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user } = UserAuth();

  return (
    <div className="bg-[#0F172A]">
      <div
        className={`flex justify-between items-center container md:max-w-screen-lg mx-auto p-4 h-[66px] `}
      >
        {isOpen && (
          <div className="block sm:hidden bg-[#1e2938] h-screen absolute w-[50%] left-0 top-0 z-20"></div>
        )}

        <div className="block sm:hidden z-30 ">
          {isOpen ? (
            <MdClose size="27" onClick={() => setOpen(!isOpen)} />
          ) : (
            <HiOutlineMenu size="27" onClick={() => setOpen(!isOpen)} />
          )}
        </div>

        <Link to="/" className="hidden sm:block">
          <h1 className="font-medium cursor-pointer">blogger.ai</h1>
        </Link>

        <div
          className={`gap-6 ${
            isOpen
              ? "flex flex-col z-30 top-20 px-2 absolute "
              : "hidden sm:flex items-center "
          } `}
        >
          {["home", "pricing", "blogs", "about"].map((elem) => (
            <Link to={`/${isOpen && elem == "home" ? "" : elem}`}>
              <h2 className="text-gray-400 cursor-pointer text-shadow font-medium hover:text-gray-100">
                {!isOpen && elem == "home" ? "" : elem}
              </h2>
            </Link>
          ))}
        </div>

        {user ? (
          user.imageURL ? (
            <ProfileAvatar />
          ) : (
            <Skeleton
              containerClassName="avatar-skeleton"
              baseColor="#1F232C"
              highlightColor="#212633"
              circle
              width={36}
              height={36}
            />
          )
        ) : (
          <Link to="/login">
            <button className="flex px-4 py-2 bg-slate-800 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest hover:bg-slate-700 active:bg-slate-900 focus:outline-none focus:border-slate-900 focus:ring focus:ring-slate-300 disabled:opacity-25 transition ml-4 shadow-2xl">
              log in
              <MdLogin size="14" className="mt-[1px]" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
