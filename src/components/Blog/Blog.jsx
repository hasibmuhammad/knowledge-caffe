import { BsBookmark } from "react-icons/bs";
import { daysDifference } from "../../utils";
import { useState } from "react";
const Blog = ({ blog, handleMarkAsRead, handleBookmark }) => {
  const [marked, setMarked] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const days = daysDifference(blog.posted_date);

  return (
    <div className="mb-8">
      <div>
        <img
          className="rounded-md w-full"
          key={blog.id}
          src={blog.cover}
          alt=""
        />
        <div className="flex items-center justify-between my-4">
          <div className="flex items-center justify-center gap-4">
            <img className="w-14" src={blog.author_img} alt="" />
            <div>
              <h3 className="text-cafe-primary-400">{blog.author}</h3>
              <p className="text-cafe-secondary-400">{`${
                blog.posted_date.split(",")[0]
              } (${days} days ago)`}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <p className="text-cafe-secondary-400">
              {blog.reading_time} min read
            </p>
            <span
              className={`text-cafe-secondary-400 cursor-pointer ${
                bookmark && "pointer-events-none text-orange-400"
              }`}
              onClick={() => {
                handleBookmark(blog);
                setBookmark(true);
              }}
            >
              <BsBookmark />
            </span>
          </div>
        </div>
        <h1 className="text-cafe-primary-400 font-bold text-4xl max-w-xl">
          {blog.title}
        </h1>
        <div className="flex items-center gap-4 my-4">
          {blog.hashtags.map((ht, i) => (
            <p key={i} className="text-cafe-secondary-400 font-medium text-lg">
              #{ht}
            </p>
          ))}
        </div>
        <p
          className={`underline text-[#6047EC] font-semibold cursor-pointer ${
            marked && "pointer-events-none text-gray-300"
          }`}
          onClick={() => {
            handleMarkAsRead(blog.reading_time, blog.id);
            setMarked(true);
            setBookmark(false);
          }}
        >
          Mark as read
        </p>
      </div>
    </div>
  );
};

export default Blog;
