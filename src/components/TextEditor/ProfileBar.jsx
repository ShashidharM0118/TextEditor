import React from 'react';
import profileImage from '../../assets/profile.png';

const ProfileBar = () => {
  return (
    <div className="flex items-center justify-between p-1 border-b">
      <h1 className="text-xl font-bold">Write Post</h1>
      <div className="flex items-center gap-4">
      <button className="flex items-center border border-gray-400 text-gray-700 font-bold px-4 py-2 rounded-full">
        <i className="fa-solid fa-gauge-high mr-2"></i>
        Check Score
      </button>

        <img src={profileImage} alt="Profile" className="w-8 h-8 rounded-full" />
        <i class="fa-solid fa-arrows-up-down"></i>
      </div>
    </div>
  );
};

export default ProfileBar;
