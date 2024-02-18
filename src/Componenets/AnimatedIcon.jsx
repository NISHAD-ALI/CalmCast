import React from 'react';
import { SunIcon } from '@heroicons/react/solid';


const AnimatedIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <SunIcon className="h-6 w-6 text-yellow-500 animate-bounce" />
    </div>
  );
};

export default AnimatedIcon;
