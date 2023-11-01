const daysDifference = (posted_date) => {
  // Today's date
  const today = new Date();
  // The date you're interested in
  const specificDate = new Date(`${posted_date}`);
  // Calculate the difference in days
  const timeDifference = today.getTime() - specificDate.getTime();
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
};

export { daysDifference };
