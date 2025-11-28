import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import PricingCard from '../cards/PricingCard';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams",
      features: [
        "Up to 1,000 tasks/month",
        "5 team members",
        "Basic integrations",
        "Email support"
      ],
      buttonText: "Start Free Trial",
      isPopular: false
    },
    {
      name: "Professional",
      price: "$99",
      description: "For growing businesses",
      features: [
        "Up to 10,000 tasks/month",
        "Unlimited team members",
        "All integrations",
        "Priority support",
        "Advanced analytics"
      ],
      buttonText: "Start Free Trial",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited tasks",
        "Unlimited team members",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee"
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Simple, Transparent Pricing"
          subtitle="Choose the perfect plan for your team"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;