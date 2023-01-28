import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#0F172A]">
      <div className="container md:max-w-screen-md mx-auto p-4">
        <div className="flex justify-between ">
          <Link to="/">
            <h1 className="font-medium cursor-pointer">blogger.ai</h1>
          </Link>

          <div className="flex gap-6">
            {["pricing", "blogs", "about"].map((elem) => (
              <Link to={`/${elem}`}>
                <h2 className="text-gray-400 cursor-pointer text-shadow font-medium hover:text-gray-100">
                  {elem}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
