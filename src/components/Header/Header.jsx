import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between mb-8">
        <h1 className="font-bold text-3xl text-cafe-primary-400">
          Knowledge Cafe
        </h1>
        <img src="./images/profile.png" alt="" />
      </div>
      <hr className="border" />
    </div>
  );
};

export default Header;
