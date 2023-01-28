import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useContext } from "react";
import { BlogArticleContext } from "./../context/BlogArticleProvider";

const InputLink = () => {
  const { blogText, setBlogText } = useContext(BlogArticleContext);
  const [url, setUrl] = useState("");
  const [lang, setLang] = useState("en");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      url: url,
      lang: lang,
    };

    setLoading(true);

    axios.post(`http://localhost:3000/subtitles`, data).then((res) => {
      setBlogText(res.data);
      setLoading(false);
      console.log(blogText);
    });
  };
  return (
    <div className="">
      <form class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 mt-12 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-blue-400 py-2 font-bold mb-2" for="url">
            Paste YouTube link video
          </label>

          <a onClick={() => console.log(blogText)}> CLOIIICK</a>
          <input
            class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
            id="url"
            type="text"
            placeholder="www.youtube.com/watch?v=#####"
            onChange={(e) => {
              const link = e.target.value;
              setUrl(link.split("=")[1]);
            }}
          />
        </div>

        <div class="flex items-center justify-between pt-4">
          <button
            class="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
            type="button"
            onClick={(e) => handleSubmit(e)}
          >
            {!loading ? (
              "Transform"
            ) : (
              <div className="flex items-center">
                <Loader />
                <p>Loading</p>
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
export default InputLink;
