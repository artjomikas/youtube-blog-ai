import { useState, createContext } from "react";

export const BlogArticleContext = createContext();

const BlogArticleProvider = ({ children }) => {
  const [blogText, setBlogText] = useState("");
  return (
    <BlogArticleContext.Provider
      value={{
        blogText,
        setBlogText
      }}
    >
      {children}
    </BlogArticleContext.Provider>
  );
};
export default BlogArticleProvider;
