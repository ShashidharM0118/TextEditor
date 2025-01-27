import React, { useState } from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react'; // Importing Lucide icons

const PreviewBar = () => {
  const [selectedDevice, setSelectedDevice] = useState('phone'); // Track selected device

  return (
    <div className="flex items-center justify-between p-2 border-b ">
      <h1 className="text-medium font-bold opacity-60 py-3 pl-6 flex items-center justify-center">
  Post Preview
</h1>

      <div className="flex items-center gap-4">
      <p className="text-sm opacity-60 font-bold">Devices: </p>

        {/* Phone icon */}
        <Smartphone
          className={`cursor-pointer ${selectedDevice === 'phone' ? 'bg-blue-500 bg-opacity-20  border-blue-500 p-0 rounded-lg' : ''} opacity-80 hover:opacity-100 transition-all duration-300`}
          onClick={() => setSelectedDevice('phone')}
        />
        {/* Tablet icon */}
        <Tablet
          className={`cursor-pointer ${selectedDevice === 'tablet' ? 'bg-blue-500 bg-opacity-20  border-blue-500  rounded-lg' : ''} opacity-80 hover:opacity-100 transition-all duration-300`}
          onClick={() => setSelectedDevice('tablet')}
        />
        {/* Desktop icon */}
        <Monitor
          className={`cursor-pointer ${selectedDevice === 'desktop' ? 'bg-blue-500 bg-opacity-20  border-blue-500  rounded-lg' : ''} opacity-80 hover:opacity-100 transition-all duration-300`}
          onClick={() => setSelectedDevice('desktop')}
        />
      </div>
    </div>
  );
};

export default PreviewBar;
