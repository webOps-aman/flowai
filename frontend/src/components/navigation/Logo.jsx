import React from 'react';
import { Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Zap className="h-8 w-8 text-purple-400" />
      <span className="ml-2 text-xl font-bold text-white">FlowAI</span>
    </div>
  );
};

export default Logo;