import React from 'react';
import { FileEdit, Edit3, Sparkles, LayoutGrid, FileText, Lightbulb, Users, Calendar, Settings, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Edit3 size={18} />, label: 'Write Post', isButton: true },
    { icon: <Sparkles size={18} />, label: 'Post Generator' },
    { icon: <Sparkles size={18} />, label: 'Ideas Generator' },
    { icon: <LayoutGrid size={18} />, label: 'Carousel Maker' },
    { icon: <FileText size={18} />, label: 'Posts' },
    { icon: <Lightbulb size={18} />, label: 'Content Inspiration' },
    { icon: <Users size={18} />, label: 'Posts for You' },
    { icon: <Calendar size={18} />, label: 'Schedule' }
  ];

  const bottomMenuItems = [
    { icon: <Settings size={18} />, label: 'Preferences' },
    { icon: <HelpCircle size={18} />, label: 'Feature Request' }
  ];

  return (
    <aside className="w-60 h-screen flex flex-col bg-white border-r border-gray-200 font-['Inter']">
      {/* Top menu items */}
      <div className="p-4 flex flex-col flex-1">
        {/* Write Post Button */}
        <button className="w-full bg-[#00A0F5] text-white rounded-full px-6 py-3 flex items-center justify-center gap-2 mb-4 mt-[10%] font-bold">
          <FileEdit size={18} />
          <span className="text-center">Write Post</span>
        </button>

        {/* Menu Items */}
        <div className="flex flex-col">
          {menuItems.slice(1).map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 font-bold"
            >
              <span className="text-gray-500">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="p-4 flex flex-col gap-4">
        {/* Bottom menu items */}
        <div className="border-t border-gray-200 pt-4">
          {bottomMenuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 font-bold"
            >
              <span className="text-gray-500">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Usage meter */}
        <div className="px-4 py-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between text-xs text-gray-800 font-bold">
            <div className="flex items-center gap-1">
              <span className="font-normal mt-2 text-[10px]">Words generated</span>
              <span className="inline-flex items-center justify-center w-4 h-4 bg-gray-200 rounded-full font-medium mt-2 text-[10px]">i</span>
            </div>
            <span className="font-small mt-2 text-[10px]">1.25k / 50k</span>
          </div>
          <div className="mt-2">
            <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-gray-500 font-bold">
            Monthly usage resets in 29 days
          </div>
          <button className="mt-3 w-full px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-700 flex items-center justify-center gap-2 font-bold hover:bg-gray-50 transition-colors">
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 3.5V10.5M7 3.5L4.375 6.125M7 3.5L9.625 6.125"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Upgrade Plan
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
