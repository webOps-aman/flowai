import React from 'react';

const MobileMenu = () => {
  const menuItems = [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' }
  ];

  return (
    <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
      <div className="px-4 pt-2 pb-4 space-y-2">
        {menuItems.map((item) => (
          <a 
            key={item.href}
            href={item.href} 
            className="block text-gray-300 hover:text-purple-400 py-2"
          >
            {item.label}
          </a>
        ))}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg mt-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;