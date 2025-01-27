import React from 'react';
import Sidebar from './Sidebar';
import PostEditor from './PostEditor';
// import TextEditor from './TextEditor';
import PostPreview from './PostPreview';
import Footer from './Footer';

const App = () => {
  return (
    <div className="font-['Inter'] flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <Sidebar className="w-64 flex-shrink-0 border-r border-gray-200 bg-white" />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Profile Bar */}
        
        {/* Content Area */}
        <div className="flex-1 flex min-h-0">
          {/* Editor Section */}
          <div className="flex-1 flex flex-col border-r border-gray-200 bg-white">
            <PostEditor className="flex-1 overflow-auto" />
          </div>
          
          {/* Preview Section - Fixed Width */}
          <div className="flex-shrink-0 bg-white">
            <PostPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;