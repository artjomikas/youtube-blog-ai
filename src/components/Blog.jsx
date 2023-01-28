import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogArticleContext } from "./../context/BlogArticleProvider";

const Blog = ({ title, text }) => {
  const { blogText } = useContext(BlogArticleContext);
  console.log(blogText);
  const { id } = useParams();

  return <div className="bg-white w-full text-black">{blogText}</div>;
};
export default Blog;
