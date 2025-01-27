import TopBG from "../../../assets/top.png";

const Header = () => {
  return (
    <div className="relative">
      <img src={TopBG} alt="bg" className="w-full h-[200]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="text-4xl font-bold text-white">
          Full Stack Developer Job Role
        </h1>
      </div>
    </div>
  );
};

export default Header;
