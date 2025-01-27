import { useState } from "react";
import JobDescription from "./about_job";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Application"];

  return (
    <div className="w-full px-16 py-4">
      <div className="flex justify-center space-x-8 border-b border-[#333333] ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative py-4 px-4 text-lg font-bold ${
              activeTab === tab
                ? "text-blue-600 "
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 h-1 w-full bg-blue-600 rounded-t-md"></span>
            )}
          </button>
        ))}
      </div>
      {activeTab === "Overview" && <JobDescription />}
    </div>
  );
};

export default TabBar;
