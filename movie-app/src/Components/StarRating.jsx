import Star from './Star';
import { useState } from 'react';

export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(1);
  const [tempRating, setTempRating] = useState(0);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  };

  const starContainerStyle = {
    display: 'flex',
    gap: '4px',
  };

  const textStyle = {
    lineHeight: '1',
    margin: '0',
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            key={index + 1}
            onRate={() => setRating(index + 1)}
            full={tempRating ? tempRating >= index + 1 : rating >= index + 1}
            onHoverIn={() => setTempRating(index + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || ''}</p>
    </div>
  );
}
