import BottomBG from "../../../assets/bottom.png";
import PlayStore from "../../../assets/play_store.svg";
import AppStore from "../../../assets/app_store.svg";
import AppStoresPreview from "../../../assets/app_store_preview.svg";

export const AppStores = () => {
  return (
    <div className="relative">
      <img src={BottomBG} alt="bg" className="w-full h-[400px]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-white">
            Download iChota
          </h1>
          <br />
          <p className="text-white">
            Get the best deals wherever you are. Make extra cash by selling
            items or providing a service on iChota. Download now!
          </p>
          <br />
          <div className="flex space-x-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.ichota"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={PlayStore} alt="Google Play" className="h-10" />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AppStore} alt="App Store" className="h-10" />
            </a>
          </div>
        </div>
        <div className="ml-10">
          <img src={AppStoresPreview} alt="preview" className=" w-5xl" />
        </div>
      </div>
    </div>
  );
};
