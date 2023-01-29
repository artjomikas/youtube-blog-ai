import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar, Home, Blog, Login, Pricing } from "../";

const Pages = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
};
export default Pages;
