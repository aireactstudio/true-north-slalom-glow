
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "With their ability take on large-scale projects on short notice, True North's cloud, implementation and dependable support services have been a huge boost for us, providing stability by addressing our many-layered IT needs",
    author: "Glenda Smith",
    position: "ProOrthopedics",
    company: ""
  },
  {
    quote: "Technology is never trouble free, but with their expertise in cloud services, high level tech support, and custom applications, True North has delivered time and again. They've been a great investment for us",
    author: "Kristie Howard",
    position: "Overlake Internal Med",
    company: ""
  },
  {
    quote: "Our company has benefited greatly from True North's IT expertise and world-class support. Since making the switch to True North we have achieved improved network stability and increased our security. Their knowledge in IT business strategy and project implementation is vastly superior to our previous IT provider",
    author: "Mark Anderson",
    position: "Manager, Building Changes",
    company: ""
  },
  {
    quote: "Migrating to the True North cloud infrastructure saved GEHC Centricity in our practice... our system performance has never been better.",
    author: "Sue Lowe",
    position: "IT Support Family Medicine",
    company: ""
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  // Handle auto-rotation with pause on hover
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);
  
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    if (!isPausedRef.current) {
      timerRef.current = setTimeout(() => {
        goToNext();
      }, 7000); // Change testimonial every 7 seconds
    }
  }, []);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    resetTimer();
  }, [isAnimating, resetTimer]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  }, [isAnimating, resetTimer]);

  const goToIndex = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
    resetTimer();
  }, [currentIndex, isAnimating, resetTimer]);

  // Handle animation end
  useEffect(() => {
    const onAnimationEnd = () => {
      setIsAnimating(false);
      setDirection(null);
    };

    const ref = testimonialRef.current;
    if (ref) {
      ref.addEventListener('animationend', onAnimationEnd);
      return () => {
        ref.removeEventListener('animationend', onAnimationEnd);
      };
    }
  }, []);

  // Initialize auto-rotation
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [resetTimer]);

  return (
    <section className="py-24 bg-tnorth-surface-dark text-white">
      <div className="container mx-auto px-4 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-[10%] w-96 h-96 bg-blue-800/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-[20%] w-64 h-64 bg-indigo-900/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="flex flex-col items-center relative z-10">
          {/* Title */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Testimonials</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <h3 className="text-xl md:text-3xl font-semibold mb-6 text-white/90">The True North Difference</h3>
          </div>
          
          {/* Testimonial Slider */}
          <div className="w-full max-w-4xl mx-auto relative min-h-[300px] mb-10">
            {/* Large Quote Mark */}
            <div className="absolute -left-6 md:-left-12 top-0 text-blue-500 opacity-50">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 7h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z" fill="currentColor"/>
                <path d="M6 17h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1z" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Current Testimonial with Animation */}
            <div 
              ref={testimonialRef}
              className={`mx-auto text-center px-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'} ${direction === 'right' ? 'animate-slide-left' : ''} ${direction === 'left' ? 'animate-slide-right' : ''}`}
            >
              <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/40 p-8 md:p-10 rounded-xl">
                <p className="text-xl md:text-2xl text-white/80 font-light mb-12 leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                
                <div className="mt-8 text-center">
                  <h4 className="text-xl font-semibold text-white mb-1">{testimonials[currentIndex].author}</h4>
                  <p className="text-blue-400">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-blue-900/50 backdrop-blur-sm border border-blue-800/40 rounded-full p-3 shadow-lg hover:bg-blue-800/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={goToPrev}
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-blue-900/50 backdrop-blur-sm border border-blue-800/40 rounded-full p-3 shadow-lg hover:bg-blue-800/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={goToNext}
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-8 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-blue-500 w-10' : 'bg-blue-900/60 hover:bg-blue-800'}`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}  
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
