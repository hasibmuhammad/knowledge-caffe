import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";
const Blogs = ({ handleMarkAsRead, handleBookmark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`posts.json`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleMarkAsRead={handleMarkAsRead}
          handleBookmark={handleBookmark}
        />
      ))}
    </>
  );
};

export default Blogs;
