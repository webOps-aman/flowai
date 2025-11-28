import React from 'react';

const Badge = ({ children }) => {
  return (
    <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
      <span className="text-purple-300 text-sm">{children}</span>
    </div>
  );
};

export default Badge;