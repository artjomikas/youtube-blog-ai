import { Route, Routes } from "react-router-dom";
import { Navbar, Home, Blog } from "../";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </>
  );
};
export default Pages;
