import React from 'react';
import { Heart, MessageCircle, Share2, Send } from 'lucide-react';
import profile from '../../assets/profile.png'; 


const Post = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 font-['Inter']">
      {/* User Info */}
      <div className="flex items-start space-x-3 mb-3">
        <img
          src={profile}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Cody Fisher</span>
            <span className="text-gray-500">•</span>
          </div>
          <p className="text-gray-600 text-sm">
            UI/UX Design | Web & Mobile Design | Front-end | UI Developer
          </p>
          <div className="flex items-center text-gray-500 text-sm">
            <span>Now</span>
            <span className="mx-1">•</span>
            <span>🌐</span>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-800">
          Content creation is important for digital marketing as it involves
          creating and sharing various types of content to attract and engage
          the target audience, improve SEO, and drive traffic and conv...
          <span className="text-gray-500 cursor-pointer hover:underline">see more</span>
        </p>
      </div>

      {/* Reactions and Comments */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
        <div className="flex items-center space-x-1">
          <div className="flex -space-x-1">
            <span className="w-5 h-5 flex items-center justify-center bg-blue-500 rounded-full text-white text-xs">
              👍
            </span>
            <span className="w-5 h-5 flex items-center justify-center bg-red-500 rounded-full text-white text-xs">
              ❤️
            </span>
            <span className="w-5 h-5 flex items-center justify-center bg-yellow-500 rounded-full text-white text-xs">
              😊
            </span>
          </div>
          <span className="ml-2">88</span>
        </div>
        <div>
          <span>4 comments</span>
          <span className="mx-1">•</span>
          <span>1 repost</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-200">
          <Heart className="w-5 h-5" />
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-200">
          <MessageCircle className="w-5 h-5" />
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-200">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-200">
          <Send className="w-5 h-5" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default Post;