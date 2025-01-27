import React from 'react';

const GraphBar = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-50">
      <p className="text-xs text-gray-500">Words generated: 1.25k / 50k</p>
      <p className="text-xs text-gray-500">Monthly usage resets in 29 days</p>
    </div>
  );
};

export default GraphBar;
