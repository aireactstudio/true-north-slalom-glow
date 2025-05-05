import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Shield, Cloud, HardDrive, Zap, Workflow } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
  category: string;
  keywords: string[];
}

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
  category: string;
  isOpen: boolean;
  onClick: () => void;
  searchTerm: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ 
  question, 
  answer, 
  icon, 
  category,
  isOpen, 
  onClick,
  searchTerm
}) => {
  const answerRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  
  const highlightText = (text: string) => {
    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === searchTerm.toLowerCase() 
            ? <span key={i} className="bg-blue-500/30 text-white rounded px-1">{part}</span> 
            : part
        )}
      </>
    );
  };
  
  // Get border color based on category
  const getBorderColor = (category: string, isOpen: boolean) => {
    if (isOpen) {
      switch (category) {
        case 'EHR': return 'border-blue-500 shadow-blue-500/10';
        case 'Security': return 'border-red-500 shadow-red-500/10';
        case 'Cloud': return 'border-green-500 shadow-green-500/10';
        case 'Integration': return 'border-purple-500 shadow-purple-500/10';
        default: return 'border-blue-500 shadow-blue-500/10';
      }
    } else {
      switch (category) {
        case 'EHR': return 'border-blue-800/40 hover:border-blue-600/70';
        case 'Security': return 'border-red-800/40 hover:border-red-600/70';
        case 'Cloud': return 'border-green-800/40 hover:border-green-600/70';
        case 'Integration': return 'border-purple-800/40 hover:border-purple-600/70';
        default: return 'border-blue-800/40 hover:border-blue-600/70';
      }
    }
  };
  
  // Get icon color based on category
  const getIconColor = (category: string) => {
    switch (category) {
      case 'EHR': return 'text-blue-400';
      case 'Security': return 'text-red-400';
      case 'Cloud': return 'text-green-400';
      case 'Integration': return 'text-purple-400';
      default: return 'text-blue-400';
    }
  };
  
  return (
    <div 
      className={`mb-4 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
        isOpen 
          ? `${getBorderColor(category, true)} bg-blue-900/40 shadow-lg` 
          : `${getBorderColor(category, false)} bg-blue-950/30 hover:bg-blue-900/20`
      }`}
    >
      <div 
        ref={questionRef}
        className="flex items-start p-5 cursor-pointer select-none"
        onClick={onClick}
      >
        <div className={`flex-shrink-0 rounded-full p-3 mr-4 transition-colors duration-300 ${
          isOpen ? 'bg-blue-900/40' : 'bg-blue-950/50 group-hover:bg-blue-900/70'
        }`}>
          <div className={`${getIconColor(category)}`}>{icon}</div>
        </div>
        
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <span className={`text-xs font-medium uppercase tracking-wider mb-1 block ${getIconColor(category)}`}>
                {category}
              </span>
              <h3 className={`font-semibold transition-colors duration-300 pr-8 ${
                isOpen ? 'text-white' : 'text-white/90'
              }`}>
                {highlightText(question)}
              </h3>
            </div>
            <ChevronDown className={`flex-shrink-0 text-blue-400 mt-1 transition-transform duration-300 ${
              isOpen ? 'transform rotate-180' : ''
            }`} size={18} />
          </div>
        </div>
      </div>
      
      <div 
        ref={answerRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ 
          maxHeight: isOpen ? answerRef.current?.scrollHeight + 'px' || '1000px' : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="p-5 pt-0 pl-16 text-white/70 leading-relaxed">
          {typeof answer === 'string' ? highlightText(answer) : answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [fadeIn, setFadeIn] = useState(false);

  // Add CSS animation to the document
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
      @keyframes borderFlow {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
    `;
    document.head.appendChild(style);
    
    // Trigger fade-in animation after component mounts
    setTimeout(() => setFadeIn(true), 100);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const categories = ['EHR', 'Security', 'Cloud', 'Integration', 'All'];
  
  const faqs: FAQItem[] = [
    {
      question: 'What are the most important IT solutions for healthcare providers to consider?',
      answer: (
        <div>
          <p className="mb-3">The most crucial IT solutions for modern healthcare providers include:</p>
          <ul className="space-y-2 list-inside list-disc mb-3">
            <li><span className="font-semibold text-blue-300">Electronic Health Records (EHRs)</span> - Digital storage and management of patient information</li>
            <li><span className="font-semibold text-blue-300">Telemedicine</span> - Remote patient evaluation and treatment</li>
            <li><span className="font-semibold text-blue-300">Clinical Decision Support Systems</span> - Evidence-based guidelines and analysis tools</li>
            <li><span className="font-semibold text-blue-300">Internet of Medical Things (IoMT)</span> - Connected medical devices and wearables</li>
            <li><span className="font-semibold text-blue-300">Artificial Intelligence</span> - Predictive analytics and pattern recognition</li>
          </ul>
          <p>These solutions collectively enhance patient care quality while optimizing operational efficiency across your healthcare organization.</p>
        </div>
      ),
      icon: <HardDrive size={20} />,
      category: 'EHR',
      keywords: ['ehr', 'telemedicine', 'cdss', 'iomt', 'ai', 'solutions', 'providers']
    },
    {
      question: 'How can healthcare providers ensure their IT solutions are secure and HIPAA compliant?',
      answer: (
        <div>
          <p className="mb-3">Ensuring security and compliance requires a comprehensive approach:</p>
          <div className="bg-blue-900/30 rounded-lg p-4 mb-4 border border-blue-800/50">
            <h4 className="text-blue-300 font-medium mb-2">Multi-layered Security Framework</h4>
            <ul className="space-y-1 list-inside list-disc">
              <li>End-to-end encryption for all data at rest and in transit</li>
              <li>Multi-factor authentication for all system access points</li>
              <li>Role-based access control with principle of least privilege</li>
              <li>Advanced intrusion detection and prevention systems</li>
            </ul>
          </div>
          <p className="mb-3">Regular security audits and vulnerability assessments are essential to identify and address potential threats proactively.</p>
          <p>Employee training on security awareness and HIPAA compliance must be consistent and comprehensive, as human error remains a significant security vulnerability.</p>
        </div>
      ),
      icon: <Shield size={20} />,
      category: 'Security',
      keywords: ['hipaa', 'security', 'compliance', 'encryption', 'audit', 'risk', 'assessment']
    },
    {
      question: 'What are the benefits of cloud computing for healthcare IT solutions?',
      answer: (
        <div>
          <p className="mb-3">Cloud computing offers transformative advantages for healthcare organizations:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
              <h4 className="text-blue-300 font-medium mb-2">Scalability</h4>
              <p>Dynamically adjust storage and computing resources to match fluctuating demands without costly hardware investments.</p>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
              <h4 className="text-blue-300 font-medium mb-2">Cost Efficiency</h4>
              <p>Convert capital expenditures to operational expenses with a pay-as-you-go model, optimizing your IT budget allocation.</p>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
              <h4 className="text-blue-300 font-medium mb-2">Reliability</h4>
              <p>Leverage redundant infrastructure and geographic distribution to ensure high availability and disaster recovery capabilities.</p>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
              <h4 className="text-blue-300 font-medium mb-2">Collaboration</h4>
              <p>Enable seamless information sharing among healthcare professionals regardless of location, enhancing care coordination.</p>
            </div>
          </div>
          <p>Before migrating to the cloud, conduct a thorough assessment of your infrastructure, security requirements, and regulatory compliance obligations to determine the optimal implementation strategy.</p>
        </div>
      ),
      icon: <Cloud size={20} />,
      category: 'Cloud',
      keywords: ['cloud', 'computing', 'scalability', 'cost', 'collaboration']
    },
    {
      question: 'How can healthcare providers integrate new IT solutions with existing systems?',
      answer: (
        <div>
          <p className="mb-4">Integration of new IT solutions requires strategic planning and expert execution:</p>
          <div className="relative mb-6 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 animate-pulse"></div>
            <div className="relative bg-blue-900/50 p-5 border border-blue-700/30 rounded-lg">
              <h4 className="text-white font-medium mb-3">Partnership with Healthcare MSP Specialists</h4>
              <p className="mb-3">Working with a Managed Service Provider (MSP) that specializes in healthcare IT provides:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Comprehensive visibility across all integration points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Expertise in healthcare-specific protocols and standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Continuous HIPAA compliance monitoring and management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Strategic planning for future scalability and interoperability</span>
                </li>
              </ul>
            </div>
          </div>
          <p>A methodical approach to integration, including thorough testing in isolated environments before full deployment, minimizes disruption to critical healthcare operations.</p>
        </div>
      ),
      icon: <Workflow size={20} />,
      category: 'Integration',
      keywords: ['integration', 'systems', 'process', 'msp', 'managed service provider']
    }
  ];

  const filteredFAQs = faqs.filter((faq: FAQItem) => {
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchTerm.toLowerCase())) ||
      faq.keywords.some((keyword: string) => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === null || activeCategory === 'All' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 bg-tnorth-surface-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/20 to-transparent"></div>
        
        {/* Animated background elements */}
        <div 
          className="absolute top-20 right-40 w-80 h-80 rounded-full" 
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0) 70%)',
            animation: 'pulse 15s infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-96 h-96 rounded-full" 
          style={{
            background: 'radial-gradient(circle, rgba(79,70,229,0.1) 0%, rgba(99,102,241,0.05) 40%, rgba(99,102,241,0) 70%)',
            animation: 'pulse 20s infinite'
          }}
        ></div>
        
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0,50 L 100,50 M 50,0 L 50,100" stroke="#3B82F6" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="2" fill="#3B82F6" />
              <circle cx="0" cy="50" r="2" fill="#3B82F6" />
              <circle cx="100" cy="50" r="2" fill="#3B82F6" />
              <circle cx="50" cy="0" r="2" fill="#3B82F6" />
              <circle cx="50" cy="100" r="2" fill="#3B82F6" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>
      
      <div 
        className="container mx-auto px-4 relative z-10"
        style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
        }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Healthcare IT FAQ
          </h2>
          <div 
            className="w-32 h-1 mx-auto mb-6"
            style={{
              background: 'linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,1) 50%, rgba(59,130,246,0) 100%)',
              backgroundSize: '200% 100%',
              animation: 'borderFlow 2s infinite linear'
            }}
          ></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg mb-10">
            Expert answers to the most critical questions about healthcare information technology
          </p>
          
          {/* Search bar */}
          <div className="max-w-2xl mx-auto relative mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-blue-900/20 border border-blue-800/50 text-white rounded-full py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" size={18} />
            </div>
            
            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category === 'All' ? null : category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    (category === 'All' && activeCategory === null) || category === activeCategory
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-900/30 text-blue-300 hover:bg-blue-800/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
                category={faq.category}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                searchTerm={searchTerm}
              />
            ))
          ) : (
            <div className="text-center py-10 bg-blue-900/20 rounded-xl border border-blue-800/30">
              <Zap className="mx-auto text-blue-400 mb-3" size={30} />
              <p className="text-white/80 text-lg">No results found for "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-blue-400 hover:text-blue-300 underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/60 max-w-2xl mx-auto mb-6">
            Still have questions about implementing IT solutions for your healthcare organization?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
          >
            Speak With Our Healthcare IT Specialists
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
