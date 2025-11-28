import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, initials, text, rating }) => {
  return (
    <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/20">
      {/* Star Rating */}
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-300 mb-6 leading-relaxed">{text}</p>
      
      {/* User Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
          {initials}
        </div>
        <div className="ml-4">
          <p className="text-white font-semibold">{name}</p>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;