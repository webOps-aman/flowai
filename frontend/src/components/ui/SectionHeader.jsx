import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;