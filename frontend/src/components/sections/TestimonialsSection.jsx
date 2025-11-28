import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import TestimonialCard from '../cards/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      initials: "SJ",
      text: "FlowAI transformed our operations completely. We've automated 80% of our repetitive tasks and saved countless hours every week.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO at InnovateLab",
      initials: "MC",
      text: "The best investment we've made this year. The ROI was immediate and our team productivity has increased by 300%.",
      rating: 5
    },
    {
      name: "Emily Parker",
      role: "Founder at StartupHub",
      initials: "EP",
      text: "Incredible platform! The AI is so intuitive and the automation possibilities are endless. Highly recommend to any growing business.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Loved by Thousands of Teams"
          subtitle="See what our customers have to say about FlowAI"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;