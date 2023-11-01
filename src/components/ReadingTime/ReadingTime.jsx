import { useEffect, useState } from "react";

const ReadingTime = ({ readingTimes }) => {
  const [totalReadTime, setTotalReadTime] = useState(0);

  useEffect(() => {
    setTotalReadTime(readingTimes.reduce((acc, curr) => acc + curr, 0));
  }, [readingTimes]);

  return (
    <div className="border border-[#6047EC] rounded-lg bg-cafe-read-400">
      <h4 className="px-10 py-5 text-[#6047EC] font-bold text-xl">
        Spent time on read: {totalReadTime} min
      </h4>
    </div>
  );
};

export default ReadingTime;
