import React from 'react';
import { Zap, Shield, Users } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import FeatureCard from '../cards/FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process thousands of tasks per second with our optimized AI engine. Experience unprecedented speed in workflow automation."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA. Your data is always protected and private."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work seamlessly with your team in real-time. Share workflows, assign tasks, and track progress effortlessly."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Powerful Features for Modern Teams"
          subtitle="Everything you need to automate, optimize, and scale your business operations"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;