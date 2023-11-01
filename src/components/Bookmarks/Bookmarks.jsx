import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="bg-cafe-bookmark-400 rounded-lg p-7">
      <h2 className="text-cafe-primary-400 font-bold text-xl">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      <div>
        {bookmarks.map((bm) => (
          <Bookmark key={bm.id} bookmark={bm} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
