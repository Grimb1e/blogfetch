import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import BlogsCard from "./BlogsCard";

export type Blog = {
  id: number;
  previewURL: string;
  tags: string;
  user: string;
  likes: number;
  views: number;
  comments: number;
};

const App = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pixabay.com/api/", {
          params: {
            key: import.meta.env.VITE_KEY,
            q: search,
          },
        });
        setBlogs(response.data.hits);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [search]);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div className=" w-full h-screen p-4 bg-black">
      <input
        type="text"
        value={search}
        onChange={onChangeInput}
        className="bg-black text-white shadow-md rounded-lg px-4 py-2 mb-4 text-center border border-sky-500 flex m-auto"
        placeholder="Search"
      />
      <BlogsCard blogs={blogs} />
    </div>
  );
};

export default App;
