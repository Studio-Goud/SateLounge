import { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback = ({ src, alt, className }: ImageProps) => {
  const [error, setError] = useState(false);
  
  if (error) {
    return (
      <div className={`bg-gradient-to-br from-green/20 to-gold/20 flex items-center justify-center ${className}`}>
        <span className="text-brown-dark font-medium text-sm px-4 text-center">{alt}</span>
      </div>
    );
  }
  
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} loading="lazy" />;
};
