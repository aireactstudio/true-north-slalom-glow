
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface BlockData {
  id: number;
  label: string;
  fullText?: string;
  color: string;
  initialPosition: { x: number; y: number };
  targetPosition: { x: number; y: number };
  expandedPosition?: { x: number; y: number };
  shouldMove?: boolean; // Flag to determine if block should move during banner animation
}

interface BannerData {
  id: number;
  text: string;
  row: number;
  active: boolean;
  blockIds: number[]; // IDs of blocks to animate for this banner
  width: number; // Width of the banner
}

const SlidingBlocks = () => {
  const bannerWidth = 280; // Fixed width of the banners

  const [blocks, setBlocks] = useState<BlockData[]>([
    { 
      id: 1, 
      label: "St", 
      fullText: "Strategy", 
      color: "bg-purple-300", 
      initialPosition: { x: -100, y: 0 }, 
      targetPosition: { x: 0, y: 0 },
      expandedPosition: { x: 0, y: 0 },
      shouldMove: false
    },
    { 
      id: 2, 
      label: "Da", 
      fullText: "Data", 
      color: "bg-pink-400", 
      initialPosition: { x: -100, y: 50 }, 
      targetPosition: { x: 80, y: 0 },
      expandedPosition: { x: 80, y: 0 },
      shouldMove: false
    },
    { 
      id: 3, 
      label: "Ai", 
      fullText: "Artificial Intelligence", 
      color: "bg-red-400", 
      initialPosition: { x: -100, y: 100 }, 
      targetPosition: { x: 160, y: 0 },
      expandedPosition: { x: 160, y: 0 },
      shouldMove: false
    },
    { 
      id: 4, 
      label: "Cl", 
      fullText: "Cloud", 
      color: "bg-orange-400", 
      initialPosition: { x: 100, y: -100 }, 
      targetPosition: { x: 240, y: 0 },
      expandedPosition: { x: 240, y: 0 }, // Cloud block doesn't move
      shouldMove: false
    },
    { 
      id: 5, 
      label: "Si", 
      fullText: "Security", 
      color: "bg-yellow-300", 
      initialPosition: { x: 200, y: -50 }, 
      targetPosition: { x: 160, y: 80 },
      expandedPosition: { x: 160, y: 80 },
      shouldMove: false
    },
    { 
      id: 6, 
      label: "Ex", 
      fullText: "Experience", 
      color: "bg-lime-200", 
      initialPosition: { x: 200, y: 0 }, 
      targetPosition: { x: 240, y: 80 },
      expandedPosition: { x: 240, y: 80 }, // Experience block doesn't move
      shouldMove: false
    },
    { 
      id: 7, 
      label: "Dp", 
      fullText: "Development", 
      color: "bg-lime-400", 
      initialPosition: { x: 100, y: 200 }, 
      targetPosition: { x: 320, y: 80 },
      expandedPosition: { x: 320 + bannerWidth, y: 80 }, // Move right by banner width
      shouldMove: true
    },
    { 
      id: 8, 
      label: "Pd", 
      fullText: "Product", 
      color: "bg-green-400", 
      initialPosition: { x: 200, y: 200 }, 
      targetPosition: { x: 400, y: 80 },
      expandedPosition: { x: 400 + bannerWidth, y: 80 }, // Move right by banner width
      shouldMove: true
    },
    { 
      id: 9, 
      label: "Oc", 
      fullText: "Outcomes", 
      color: "bg-emerald-200", 
      initialPosition: { x: 300, y: 200 }, 
      targetPosition: { x: 80, y: 160 },
      expandedPosition: { x: 80, y: 160 },
      shouldMove: false
    },
    { 
      id: 10, 
      label: "Op", 
      fullText: "Operations", 
      color: "bg-cyan-300", 
      initialPosition: { x: 300, y: 100 }, 
      targetPosition: { x: 160, y: 160 },
      expandedPosition: { x: 160, y: 160 }, // Operations block doesn't move
      shouldMove: false
    },
    { 
      id: 11, 
      label: "Su", 
      fullText: "Support", 
      color: "bg-blue-300", 
      initialPosition: { x: 300, y: 0 }, 
      targetPosition: { x: 240, y: 160 },
      expandedPosition: { x: 240, y: 160 },
      shouldMove: false
    },
    { 
      id: 12, 
      label: "Ps", 
      fullText: "Products", 
      color: "bg-indigo-400", 
      initialPosition: { x: 300, y: -50 }, 
      targetPosition: { x: 320, y: 160 },
      expandedPosition: { x: 320, y: 160 },
      shouldMove: false
    }
  ]);

  const [banners, setBanners] = useState<BannerData[]>([
    {
      id: 1,
      text: "Experience strategy & design",
      row: 1,
      active: false,
      blockIds: [7, 8], // Only Dp, Pd (Development and Product) should move
      width: bannerWidth
    },
    {
      id: 2,
      text: "Operations",
      row: 2,
      active: false,
      blockIds: [], // No blocks move for Operations
      width: bannerWidth
    },
    {
      id: 3,
      text: "Cloud",
      row: 0,
      active: false,
      blockIds: [], // No blocks move for Cloud
      width: bannerWidth
    }
  ]);

  const [animationStage, setAnimationStage] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Initial animation to bring blocks to their grid positions
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
          
          // If this is the last block, trigger next animation phase
          if (index === blocks.length - 1) {
            setTimeout(() => {
              setAnimationComplete(true);
              // After initial animation completes, start the banner sequence
              setTimeout(() => startBannerSequence(), 1000);
            }, 300);
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

  // Function to handle the banner animation sequence
  const startBannerSequence = () => {
    // Animation sequence timing
    const showDuration = 2000; // How long each banner shows
    const returnDelay = 1000;  // Delay before blocks return to original position

    // Show first banner (Cloud)
    showBanner(3, showDuration, returnDelay, () => {
      
      // Show second banner (Operations)
      showBanner(2, showDuration, returnDelay, () => {
        
        // Show third banner (Experience)
        showBanner(1, showDuration, returnDelay, () => {
          
          // Restart the sequence after a longer pause
          setTimeout(() => startBannerSequence(), 3000);
        });
      });
    });
  };

  // Function to show a specific banner, move blocks, then hide and callback
  const showBanner = (bannerId: number, duration: number, returnDelay: number, callback: () => void) => {
    // Get the banner
    const banner = banners.find(b => b.id === bannerId);
    if (!banner) return;
    
    // Activate banner
    setBanners(prev => prev.map(b => 
      b.id === bannerId ? { ...b, active: true } : b
    ));
    
    // Move blocks that should move for this banner
    setBlocks(prev => prev.map(block => {
      if (banner.blockIds.includes(block.id) && block.shouldMove) {
        return { 
          ...block, 
          initialPosition: block.expandedPosition || block.targetPosition
        };
      }
      return block;
    }));
    
    // Return blocks and hide banner after delay
    setTimeout(() => {
      setBanners(prev => prev.map(b => 
        b.id === bannerId ? { ...b, active: false } : b
      ));
      
      setBlocks(prev => prev.map(block => {
        if (banner.blockIds.includes(block.id) && block.shouldMove) {
          return { ...block, initialPosition: block.targetPosition };
        }
        return block;
      }));
      
      // Call the callback after the return animation
      setTimeout(() => callback(), returnDelay);
    }, duration);
  };

  return (
    <section className="py-16 bg-tnorth-surface-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[320px] overflow-visible">
            {/* Banners that appear when blocks slide */}
            {banners.map((banner) => (
              <div
                key={banner.id}
                className={`absolute h-[75px] bg-tnorth-surface-blue text-white flex items-center px-6 transition-all duration-500 rounded-none ${banner.active ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}
                style={{
                  transform: `translateY(${banner.row * 80}px)`,
                  width: `${banner.width}px`,
                  left: banner.active ? '240px' : '520px', // Start off-screen to the right, slide in to position
                  transition: 'left 0.5s ease-out, opacity 0.5s ease-out'
                }}
              >
                <span className="font-medium whitespace-nowrap">{banner.text}</span>
              </div>
            ))}
            
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`absolute w-[75px] h-[75px] ${block.color} text-black font-bold flex flex-col justify-center items-center rounded-none shadow-lg transition-all duration-500 ease-out`}
                style={{
                  transform: `translate(${block.initialPosition.x}px, ${block.initialPosition.y}px)`,
                  opacity: 1,
                  zIndex: 10
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">End-to-end <span className="italic">services</span></h2>
            <p className="text-lg mb-8">
              From strategy to digital product building and beyond, we bring the right mix of services to accelerate your vision with holistic, practical solutions. We listen deeply and share our knowledge every step of the way, empowering your teams to continue the momentum after we're gone.
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6"
              asChild
            >
              <a href="/services">Explore our services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlidingBlocks;
