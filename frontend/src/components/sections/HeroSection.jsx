import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const HeroSection = () => {
  const features = [
    "No credit card required",
    "14-day free trial",
    "Cancel anytime"
  ];

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <Badge>✨ Introducing AI-Powered Workflows</Badge>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Automate Your Workflow
          <br />
          <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            With Intelligence
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transform your business with AI-powered automation. Save time, reduce costs, 
          and scale faster with FlowAI's intelligent workflow platform.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center group">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
          </button>
          <Button variant="secondary">Watch Demo</Button>
        </div>

        {/* Feature Tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;