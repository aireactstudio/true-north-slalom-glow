
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface BlockData {
  id: number;
  label: string;
  fullText?: string;
  color: string;
  initialPosition: { x: number; y: number };
  targetPosition: { x: number; y: number };
}

const SlidingBlocks = () => {
  const [blocks, setBlocks] = useState<BlockData[]>([
    { 
      id: 1, 
      label: "EHR", 
      fullText: "Electronic Health Records", 
      color: "bg-tnorth-accent", 
      initialPosition: { x: -100, y: 0 }, 
      targetPosition: { x: 0, y: 0 } 
    },
    { 
      id: 2, 
      label: "TM", 
      fullText: "Telemedicine", 
      color: "bg-tnorth", 
      initialPosition: { x: -100, y: 50 }, 
      targetPosition: { x: 0, y: 80 } 
    },
    { 
      id: 3, 
      label: "AI", 
      fullText: "Artificial Intelligence", 
      color: "bg-tnorth-dark", 
      initialPosition: { x: -100, y: 100 }, 
      targetPosition: { x: 0, y: 160 } 
    },
    { 
      id: 4, 
      label: "CL", 
      fullText: "Cloud", 
      color: "bg-tnorth-light", 
      initialPosition: { x: 100, y: -100 }, 
      targetPosition: { x: 80, y: 0 } 
    },
    { 
      id: 5, 
      label: "DS", 
      fullText: "Decision Support", 
      color: "bg-tnorth", 
      initialPosition: { x: 200, y: -50 }, 
      targetPosition: { x: 80, y: 80 } 
    },
    { 
      id: 6, 
      label: "IoT", 
      fullText: "Internet of Things", 
      color: "bg-tnorth-accent", 
      initialPosition: { x: 200, y: 0 }, 
      targetPosition: { x: 80, y: 160 } 
    },
    { 
      id: 7, 
      label: "SC", 
      fullText: "Security", 
      color: "bg-tnorth-dark", 
      initialPosition: { x: 100, y: 200 }, 
      targetPosition: { x: 160, y: 0 } 
    },
    { 
      id: 8, 
      label: "DT", 
      fullText: "Digital Transformation", 
      color: "bg-tnorth-light", 
      initialPosition: { x: 200, y: 200 }, 
      targetPosition: { x: 160, y: 80 } 
    },
    { 
      id: 9, 
      label: "OP", 
      fullText: "Operations", 
      color: "bg-tnorth", 
      initialPosition: { x: 300, y: 200 }, 
      targetPosition: { x: 160, y: 160 } 
    }
  ]);

  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const animateBlocks = () => {
      blocks.forEach((block, index) => {
        setTimeout(() => {
          setBlocks(prevBlocks => prevBlocks.map(b => {
            if (b.id === block.id) {
              return { ...b, initialPosition: b.targetPosition };
            }
            return b;
          }));
          
          // If this is the last block, set animation complete after another delay
          if (index === blocks.length - 1) {
            setTimeout(() => setAnimationComplete(true), 300);
          }
        }, 100 + (index * 80)); // Staggered animation
      });
    };

    // Start animations after a short delay
    const timer = setTimeout(() => {
      animateBlocks();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[320px]">
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`absolute w-[75px] h-[75px] ${block.color} text-white font-bold flex flex-col justify-center items-center rounded-lg shadow-lg transition-all duration-500 ease-out`}
                style={{
                  transform: `translate(${block.initialPosition.x}px, ${block.initialPosition.y}px)`,
                  opacity: block.initialPosition.x === block.targetPosition.x ? 1 : 0.5
                }}
              >
                <span className="text-lg font-bold">{block.label}</span>
                {animationComplete && (
                  <span className="text-[8px] text-center px-1 opacity-70">{block.fullText}</span>
                )}
              </div>
            ))}
          </div>
          
          <div className={`transition-all duration-700 ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">End-to-end Healthcare IT Services</h2>
            <p className="text-lg mb-8">
              Our comprehensive suite of healthcare IT solutions ensures your practice can focus on what matters most - patient care. From Electronic Health Records (EHRs) to Cloud Infrastructure, we provide the technology foundation for modern healthcare delivery.
            </p>
            <Button 
              className="bg-tnorth hover:bg-tnorth-light text-white"
              asChild
            >
              <a href="/services">Explore Our Solutions</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlidingBlocks;
