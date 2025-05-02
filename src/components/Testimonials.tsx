
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  logo?: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "True North ITG's cloud migration strategy helped us reduce our IT costs by 35% while improving performance and security. Their team was professional and knowledgeable throughout the entire process.",
    author: "Sarah Johnson",
    position: "CIO",
    company: "Regional Healthcare Network",
    logo: "/lovable-uploads/19519767-7e4d-4e4f-ac55-b1bf82b0db44.png"
  },
  {
    quote: "The security assessment and remediation services provided by True North ITG were comprehensive and helped us achieve HIPAA compliance with confidence. Their expertise in healthcare IT security is unmatched.",
    author: "Michael Chen",
    position: "IT Director",
    company: "Pacific Medical Center",
    logo: "/lovable-uploads/63f80472-0c9c-450e-962a-b29e16c96fb1.png"
  },
  {
    quote: "Implementing our new EHR system seemed daunting, but True North ITG made the process smooth and efficient. Their team's attention to detail and industry knowledge were invaluable to our success.",
    author: "Jennifer Williams",
    position: "Operations Director",
    company: "Midwestern Hospital System",
    logo: "/lovable-uploads/df6ca71a-07b2-493c-9f17-b8e935a84b70.png"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-tnorth-surface-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-300">
            We take pride in our partnerships and the impact our solutions create for organizations across industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-tnorth-dark/50 p-8 rounded-lg border border-tnorth-light/20 flex flex-col h-full"
            >
              <div className="mb-6">
                {testimonial.logo && (
                  <img 
                    src={testimonial.logo} 
                    alt={`${testimonial.company} logo`} 
                    className="h-12 mb-4 opacity-80"
                  />
                )}
              </div>
              <blockquote className="flex-grow">
                <p className="text-lg font-light italic mb-6">"{testimonial.quote}"</p>
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
