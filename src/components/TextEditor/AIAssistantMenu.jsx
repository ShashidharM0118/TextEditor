import React, { useState, useRef } from 'react';
import { Sparkles, ArrowBigDown, RefreshCcw, FileText, Minimize2, 
         Type, Wand2, MessageSquare, Languages } from 'lucide-react';

const AIAssistantMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { icon: <Sparkles size={16} />, label: 'Complete', color: 'text-purple-600' },
    { icon: <Sparkles size={16} />, label: 'Shorten' },
    { icon: <Sparkles size={16} />, label: 'Extend' },
    { icon: <RefreshCcw size={16} />, label: 'Rephrase' },
    { icon: <FileText size={16} />, label: 'Summarize' },
    { icon: <Type size={16} />, label: 'tl;dr' },
    { icon: <Minimize2 size={16} />, label: 'Simplify' },
    { icon: <Type size={16} />, label: 'Spelling & Grammar' },
    { icon: <Wand2 size={16} />, label: 'Emotify' },
    { icon: <MessageSquare size={16} />, label: 'Tone of Voice', hasSubmenu: true },
    { icon: <Languages size={16} />, label: 'Translate', hasSubmenu: true }
  ];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50"
      >
        <Sparkles className="text-purple-600" size={20} />
        <span className="text-purple-600 font-medium">AI</span>
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 mt-2 w-64 rounded-lg bg-white shadow-lg border border-gray-200 py-2 z-50"
        >
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full px-4 py-2 flex items-center space-x-3 hover:bg-gray-50 text-left"
            >
              <span className={item.color || "text-gray-600"}>{item.icon}</span>
              <span className="text-gray-700">{item.label}</span>
              {item.hasSubmenu && (
                <span className="ml-auto">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AIAssistantMenu;