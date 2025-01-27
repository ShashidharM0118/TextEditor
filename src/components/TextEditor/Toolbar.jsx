
// src/components/TextEditor/Toolbar.jsx
import React from 'react';
import { Bold, Italic, Strikethrough, Link as LinkIcon, Image, SparklesIcon } from 'lucide-react';

const Toolbar = () => {
  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Write Post</h1>
          <button className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 text-sm">
            <SparklesIcon size={14} />
            Check Score
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Post Preview</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Devices:</span>
            <button className="text-blue-500">
              {/* <Smartphone size={16} /> */}
            </button>
            <button className="text-gray-400">
              {/* <Tablet size={16} /> */}
            </button>
            <button className="text-gray-400">
              {/* <Monitor size={16} /> */}
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 mt-4">
        <button className="p-2 hover:bg-gray-100 rounded"><Bold size={18} /></button>
        <button className="p-2 hover:bg-gray-100 rounded"><Italic size={18} /></button>
        <button className="p-2 hover:bg-gray-100 rounded"><Strikethrough size={18} /></button>
        <button className="p-2 hover:bg-gray-100 rounded"><LinkIcon size={18} /></button>
        <button className="p-2 hover:bg-gray-100 rounded"><Image size={18} /></button>
        <button className="ml-2 flex items-center gap-1 px-2 py-1 rounded bg-purple-100 text-purple-600 text-sm">
          <SparklesIcon size={14} />
          AI
        </button>
      </div>
    </div>
  );
};

export default Toolbar;