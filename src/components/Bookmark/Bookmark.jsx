const Bookmark = ({ bookmark }) => {
  return (
    <div className="max-w-[300px] p-5 bg-white my-4 rounded-lg text-cafe-primary-400 text-lg font-semibold">
      <p>{bookmark.title}</p>
    </div>
  );
};

export default Bookmark;
