
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ContentCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  readTime?: string;
  link: string;
  type: 'article' | 'case-study';
}

const ContentCard: React.FC<ContentCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  category, 
  readTime, 
  link, 
  type 
}) => (
  <Card className="overflow-hidden border-0 shadow-lg h-full flex flex-col">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute top-4 left-4 bg-tnorth text-white text-xs font-semibold py-1 px-2 uppercase rounded">
        {type === 'article' ? 'Article' : 'Case Study'}
      </div>
    </div>
    <CardHeader className="pb-2">
      <div className="text-sm text-tnorth uppercase font-medium mb-1">{category}</div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription className="text-base text-gray-600">
        {description}
      </CardDescription>
    </CardContent>
    <CardFooter className="flex justify-between items-center border-t pt-4">
      <Link 
        to={link}
        className="text-tnorth hover:text-tnorth-light font-medium inline-flex items-center"
      >
        Read more
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
      {readTime && (
        <span className="text-sm text-gray-500">{readTime} min read</span>
      )}
    </CardFooter>
  </Card>
);

const featuredContent = [
  {
    title: "Cloud Security in Healthcare: Best Practices for 2023",
    description: "Discover essential cloud security practices for healthcare organizations to protect patient data and ensure compliance with evolving regulations.",
    imageUrl: "/lovable-uploads/94ddb473-c6e9-4b17-8148-019e545e1860.png",
    category: "Healthcare IT",
    readTime: "5",
    link: "/insights/cloud-security-healthcare",
    type: 'article' as const
  },
  {
    title: "Regional Health Network Achieves 35% Cost Reduction with Hybrid Cloud",
    description: "How we helped a growing healthcare provider migrate to a secure hybrid cloud environment while reducing operational costs and improving performance.",
    imageUrl: "/lovable-uploads/df6ca71a-07b2-493c-9f17-b8e935a84b70.png",
    category: "Case Study",
    readTime: "4",
    link: "/case-studies/regional-health-cloud-migration",
    type: 'case-study' as const
  },
  {
    title: "Implementing Zero Trust Security for Healthcare Organizations",
    description: "A comprehensive guide to adopting zero trust security principles in healthcare IT environments to protect sensitive patient data.",
    imageUrl: "/lovable-uploads/63f80472-0c9c-450e-962a-b29e16c96fb1.png",
    category: "Security",
    readTime: "7",
    link: "/insights/zero-trust-healthcare",
    type: 'article' as const
  }
];

const FeaturedContent: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Insights & Case Studies</h2>
            <p className="text-lg text-gray-600">
              Latest thinking and client success stories from our team of experts
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="inline-flex space-x-3">
              <Link 
                to="/insights" 
                className="text-tnorth hover:text-tnorth-light font-medium"
              >
                All insights
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                to="/case-studies" 
                className="text-tnorth hover:text-tnorth-light font-medium"
              >
                Case studies
              </Link>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <ContentCard
              key={index}
              title={content.title}
              description={content.description}
              imageUrl={content.imageUrl}
              category={content.category}
              readTime={content.readTime}
              link={content.link}
              type={content.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
