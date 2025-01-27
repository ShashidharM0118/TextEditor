
import React from 'react';  
 import lik from '../../assets/likes.png'; 
 import PreviewBar from './PreviewBar';
 import Post from './Post'


const PostPreview = () => {
  return (
    <>
    <PreviewBar></PreviewBar>
    <div className="max-w-xl bg-slate-100 h-full rounded-lg shadow">
      <div className="p-4">
        {/* Copy Text Button */}
        <div className="flex justify-center mb-4">
          <button className="bg-white rounded-full shadow-sm border border-gray-100 p-3 p-2">
            Copy Text
          </button>
        </div>

        {/* User Info */}
        <Post/>
      </div>
    </div>
    </>
  );
};

export default PostPreview;