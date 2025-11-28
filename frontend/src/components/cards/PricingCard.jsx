import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ name, price, description, features, buttonText, isPopular }) => {
  const cardClass = isPopular 
    ? "bg-gradient-to-br from-purple-900/60 to-slate-900/60 p-8 rounded-2xl border-2 border-purple-500 relative transform scale-105 shadow-2xl"
    : "bg-slate-800/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition";

  const buttonClass = isPopular
    ? "w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
    : "w-full border border-purple-500/50 hover:border-purple-400 text-white py-3 rounded-lg font-semibold transition";

  return (
    <div className={cardClass}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      {/* Plan Info */}
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className={isPopular ? "text-gray-300 mb-6" : "text-gray-400 mb-6"}>
        {description}
      </p>
      
      {/* Price */}
      <div className="mb-6">
        <span className="text-5xl font-bold text-white">{price}</span>
        {price !== "Custom" && <span className="text-gray-400">/month</span>}
      </div>
      
      {/* Features List */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="h-5 w-5 text-green-400 mr-3 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      {/* CTA Button */}
      <button className={buttonClass}>
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;