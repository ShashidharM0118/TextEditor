import React from "react";
import { Calendar, SendHorizonal } from "lucide-react";

const Footer = () => {
  return (
    <div className="bottom-0 left-0 w-full border-t border-gray-300 p-4 bg-white">
      {/* Top Section */}
      <div className="flex items-center justify-between text-sm text-gray-500 font-bold">
        <div>
          Last saved at <span className="font-small">Oct 4, 2023, 10:34 AM</span>
        </div>
        <div>254 characters</div>
      </div>
      
      {/* Separator */}
      <div className="border-t border-gray-300 my-3"></div>
      
      {/* Bottom Section */}
      <div className="flex items-center justify-between space-x-4">
        {/* Left Button */}
        <button className="px-6 py-2 border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-gray-100 transition">
          Save as Draft
        </button>
        
        {/* Right Buttons */}
        <div className="flex items-center space-x-4">
        <button className="px-6 py-2 border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-gray-100 transition flex items-center">
  <Calendar className="mr-2 w-4 h-4" /> Schedule
</button>
<button className="px-6 py-2 bg-blue-500 text-white rounded-full text-xs hover:bg-blue-600 transition flex items-center">
  Publish <SendHorizonal className="ml-2 w-4 h-4" />
</button>

        </div>
      </div>
    </div>
  );
};

export default Footer;
