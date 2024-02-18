import React from 'react';
import {  SparklesIcon } from '@heroicons/react/solid';

const AnimatedIconCloud = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
            <SparklesIcon className="h-8 w-8 text-blue-500 animate-bounce" />
            </div>
        </div>
    );
}

export default AnimatedIconCloud;
