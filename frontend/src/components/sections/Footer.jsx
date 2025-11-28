import React from 'react';
import Logo from '../navigation/Logo';

const Footer = () => {
  const sections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations", "API"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "GDPR"]
    }
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Footer Brand */}
          <div>
            <Logo />
            <p className="text-gray-400 mt-4">
              Automate your workflow with intelligence and scale your business faster.
            </p>
          </div>
          
          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-purple-500/20 text-center text-gray-400">
          <p>© 2025 FlowAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;