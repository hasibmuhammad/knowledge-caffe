import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import ReadingTime from "./components/ReadingTime/ReadingTime";
function App() {
  const [readingTimes, setReadingTimes] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  const handleMarkAsRead = (currentReadingTime) => {
    setReadingTimes([...readingTimes, currentReadingTime]);
  };

  const handleBookmark = (blog) => {
    if (!bookmarks.includes(blog.id)) {
      setBookmarks([...bookmarks, blog]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-4">
      <Header />
      <div className="flex flex-col-reverse md:flex-row justify-between mt-4">
        <div className="w-full md:w-2/3">
          <Blogs
            handleMarkAsRead={handleMarkAsRead}
            handleBookmark={handleBookmark}
          />
        </div>
        <div>
          <div>
            <ReadingTime readingTimes={readingTimes} />
          </div>
          <div className="my-4 md:mt-4">
            <Bookmarks bookmarks={bookmarks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
