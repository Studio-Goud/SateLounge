import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageProps> = ({ src, alt, className }) => {
  const [error, setError] = React.useState(false);
  
  if (error) {
    return (
      <div className={`bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center ${className}`}>
        <span className="text-green-800 font-medium text-sm px-4 text-center">{alt}</span>
      </div>
    );
  }
  
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} loading="lazy" />;
};
