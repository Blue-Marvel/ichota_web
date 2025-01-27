import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import AppLogo from "../../../assets/app_logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Logo and Description */}
        <div>
          <img src={AppLogo} alt="" />
          <p className="mt-4 text-gray-400">
            The safe and simple way to buy, sell, bid on new or used items
            anytime, anywhere.
          </p>
        </div>

        {/* Middle Column: Important Links */}
        <div>
          <h2 className="text-lg font-semibold">Important Links</h2>
          <ul className=" mt-4 space-y-2 list-disc pl-3 leading-relaxed">
            <li className="marker:text-[#1167B1] marker:content-['■']  pl-2">
              Email us{" "}
              <a href="mailto:info@ichota.com" className="text-[#F1F1F8] ">
                <span className="text-[#1167B1] hover:underline ">
                  info@ichota.com
                </span>
              </a>
            </li>
            <li className="marker:text-[#1167B1] marker:content-['■']  pl-2">
              <a href="/careers" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </li>
            <li className="marker:text-[#1167B1] marker:content-['■'] pl-2">
              Read our{" "}
              <a href="/terms-and-conditions">
                <span className="text-[#1167B1] hover:underline ">
                  Terms & Conditions
                </span>
              </a>
              , {""}
              <a href="/privacy-policy">
                <span className="text-[#1167B1] hover:underline ">
                  Privacy Policy
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column: Social Media */}
        <div>
          <h2 className="text-lg font-semibold">Social Media</h2>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
