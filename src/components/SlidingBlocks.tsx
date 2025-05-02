
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
}

interface BannerData {
  id: number;
  text: string;
  row: number;
  active: boolean;
}

const SlidingBlocks = () => {
  const [blocks, setBlocks] = useState<BlockData[]>([
    { 
      id: 1, 
      label: "St", 
      fullText: "Strategy", 
      color: "bg-purple-300", 
      initialPosition: { x: -100, y: 0 }, 
      targetPosition: { x: 0, y: 0 },
      expandedPosition: { x: 0, y: 0 }
    },
    { 
      id: 2, 
      label: "Da", 
      fullText: "Data", 
      color: "bg-pink-400", 
      initialPosition: { x: -100, y: 50 }, 
      targetPosition: { x: 80, y: 0 },
      expandedPosition: { x: 80, y: 0 }
    },
    { 
      id: 3, 
      label: "Ai", 
      fullText: "Artificial Intelligence", 
      color: "bg-red-400", 
      initialPosition: { x: -100, y: 100 }, 
      targetPosition: { x: 160, y: 0 },
      expandedPosition: { x: 160, y: 0 }
    },
    { 
      id: 4, 
      label: "Cl", 
      fullText: "Cloud", 
      color: "bg-orange-400", 
      initialPosition: { x: 100, y: -100 }, 
      targetPosition: { x: 240, y: 0 },
      expandedPosition: { x: 240, y: 0 }
    },
    { 
      id: 5, 
      label: "Si", 
      fullText: "Security", 
      color: "bg-yellow-300", 
      initialPosition: { x: 200, y: -50 }, 
      targetPosition: { x: 160, y: 80 },
      expandedPosition: { x: 160, y: 80 }
    },
    { 
      id: 6, 
      label: "Ex", 
      fullText: "Experience", 
      color: "bg-lime-200", 
      initialPosition: { x: 200, y: 0 }, 
      targetPosition: { x: 240, y: 80 },
      expandedPosition: { x: 345, y: 80 }
    },
    { 
      id: 7, 
      label: "Dp", 
      fullText: "Development", 
      color: "bg-lime-400", 
      initialPosition: { x: 100, y: 200 }, 
      targetPosition: { x: 320, y: 80 },
      expandedPosition: { x: 530, y: 80 }
    },
    { 
      id: 8, 
      label: "Pd", 
      fullText: "Product", 
      color: "bg-green-400", 
      initialPosition: { x: 200, y: 200 }, 
      targetPosition: { x: 400, y: 80 },
      expandedPosition: { x: 610, y: 80 }
    },
    { 
      id: 9, 
      label: "Oc", 
      fullText: "Outcomes", 
      color: "bg-emerald-200", 
      initialPosition: { x: 300, y: 200 }, 
      targetPosition: { x: 80, y: 160 },
      expandedPosition: { x: 80, y: 160 }
    },
    { 
      id: 10, 
      label: "Op", 
      fullText: "Operations", 
      color: "bg-cyan-300", 
      initialPosition: { x: 300, y: 100 }, 
      targetPosition: { x: 160, y: 160 },
      expandedPosition: { x: 300, y: 160 }
    },
    { 
      id: 11, 
      label: "Su", 
      fullText: "Support", 
      color: "bg-blue-300", 
      initialPosition: { x: 300, y: 0 }, 
      targetPosition: { x: 240, y: 160 },
      expandedPosition: { x: 240, y: 160 }
    },
    { 
      id: 12, 
      label: "Ps", 
      fullText: "Products", 
      color: "bg-indigo-400", 
      initialPosition: { x: 300, y: -50 }, 
      targetPosition: { x: 320, y: 160 },
      expandedPosition: { x: 320, y: 160 }
    }
  ]);

  const [banners, setBanners] = useState<BannerData[]>([
    {
      id: 1,
      text: "Experience strategy & design",
      row: 1,
      active: false
    },
    {
      id: 2,
      text: "Operations",
      row: 2,
      active: false
    },
    {
      id: 3,
      text: "Cloud",
      row: 0,
      active: false
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
    setBanners(prev => prev.map(banner => 
      banner.id === 3 ? { ...banner, active: true } : banner
    ));
    
    // Move blocks for first banner
    setBlocks(prev => prev.map(block => {
      if (block.id === 4) { // Cloud block
        return { 
          ...block, 
          initialPosition: { 
            x: block.targetPosition.x + 100, 
            y: block.targetPosition.y
          } 
        };
      }
      return block;
    }));
    
    // Return blocks and hide banner after delay
    setTimeout(() => {
      setBanners(prev => prev.map(banner => 
        banner.id === 3 ? { ...banner, active: false } : banner
      ));
      
      setBlocks(prev => prev.map(block => {
        if (block.id === 4) { // Cloud block
          return { ...block, initialPosition: block.targetPosition };
        }
        return block;
      }));
      
      // Show second banner (Operations) after delay
      setTimeout(() => {
        setBanners(prev => prev.map(banner => 
          banner.id === 2 ? { ...banner, active: true } : banner
        ));
        
        // Move blocks for second banner
        setBlocks(prev => prev.map(block => {
          if (block.id === 10) { // Operations block
            return { 
              ...block, 
              initialPosition: { 
                x: block.targetPosition.x + 140, 
                y: block.targetPosition.y
              } 
            };
          }
          return block;
        }));
        
        // Return blocks and hide banner after delay
        setTimeout(() => {
          setBanners(prev => prev.map(banner => 
            banner.id === 2 ? { ...banner, active: false } : banner
          ));
          
          setBlocks(prev => prev.map(block => {
            if (block.id === 10) { // Operations block
              return { ...block, initialPosition: block.targetPosition };
            }
            return block;
          }));
          
          // Show third banner (Experience) after delay
          setTimeout(() => {
            setBanners(prev => prev.map(banner => 
              banner.id === 1 ? { ...banner, active: true } : banner
            ));
            
            // Move blocks for third banner (Ex, Dp, Pd spread out)
            setBlocks(prev => prev.map(block => {
              if ([6, 7, 8].includes(block.id)) { // Ex, Dp, Pd blocks
                return { 
                  ...block, 
                  initialPosition: block.expandedPosition || block.targetPosition 
                };
              }
              return block;
            }));
            
            // Return blocks and hide banner after delay
            setTimeout(() => {
              setBanners(prev => prev.map(banner => 
                banner.id === 1 ? { ...banner, active: false } : banner
              ));
              
              setBlocks(prev => prev.map(block => {
                if ([6, 7, 8].includes(block.id)) {
                  return { ...block, initialPosition: block.targetPosition };
                }
                return block;
              }));
              
              // Restart the sequence after a longer pause
              setTimeout(() => startBannerSequence(), 3000);
              
            }, showDuration);
          }, returnDelay);
        }, showDuration);
      }, returnDelay);
    }, showDuration);
  };

  return (
    <section className="py-16 bg-tnorth-surface-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[320px]">
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`absolute w-[75px] h-[75px] ${block.color} text-black font-bold flex flex-col justify-center items-center rounded-none shadow-lg transition-all duration-500 ease-out`}
                style={{
                  transform: `translate(${block.initialPosition.x}px, ${block.initialPosition.y}px)`,
                  opacity: block.initialPosition.x === block.targetPosition.x ? 1 : 0.8,
                  zIndex: 10
                }}
              >
                <span className="text-lg font-bold">{block.label}</span>
                {animationComplete && (
                  <span className="text-[8px] text-center px-1 opacity-70">{block.fullText}</span>
                )}
              </div>
            ))}
            
            {/* Banners that appear when blocks slide */}
            {banners.map((banner) => (
              <div
                key={banner.id}
                className={`absolute h-[75px] bg-tnorth-surface-blue text-white flex items-center px-6 transition-all duration-500 rounded-none ${banner.active ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  transform: `translate(${banner.active ? '320px' : '0px'}, ${banner.row * 80}px)`,
                  width: '220px',
                  left: 0,
                  zIndex: 5
                }}
              >
                <span className="font-medium whitespace-nowrap">{banner.text}</span>
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
