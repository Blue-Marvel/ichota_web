import AppLogo from "../.././../assets/app_logo.svg";
import FaceBook from "../../../assets/facebook.svg";
import X from "../../../assets/x.svg";
import Instagram from "../../../assets/instagram.svg";
import Youtube from "../../../assets/youtube.svg";
const NavBar = () => {
  return (
    <header className="bg-[#1167B1] text-white py-2">
      <nav className="container mx-auto flex justify-between items-center">
        <img src={AppLogo} alt="iChota" />
        <ul className="flex space-x-4 items-center">
          <li>
            <a href="#overview" className="hover:underline">
              HOME
            </a>
          </li>
          <li>
            <a href="#application" className="hover:underline">
              FEATURES
            </a>
          </li>{" "}
          <li>
            <a href="#application" className="hover:underline">
              PREVIEW
            </a>
          </li>{" "}
          <li>
            <a href="#application" className="hover:underline">
              DETAILS
            </a>
          </li>
          <li>
            <a href="#application" className="hover:underline">
              CAREERS
            </a>
          </li>
          <li>
            <a href="#application" className="hover:underline">
              CONTACT
            </a>
          </li>
          <li>
            <img src={Instagram} alt="instagram" className=" h-12" />
          </li>
          <li>
            <img src={FaceBook} alt="facebook" className=" h-12" />
          </li>
          <li>
            <img src={X} alt="X" className=" h-12" />
          </li>
          <li>
            <img src={Youtube} alt="youtube" className=" h-12" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
