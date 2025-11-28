import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-linear-to-br from-purple-900/40 to-slate-900/40 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition group">
      <div className="bg-purple-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
        <Icon className="h-7 w-7 text-purple-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;