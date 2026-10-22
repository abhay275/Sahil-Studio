import React from 'react';

const ImageReveal = ({ src, alt, className = "", style = {} }) => {
  return (
    <div className={`img-wrapper ${className}`} style={style}>
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div className="placeholder-img">{alt || 'Image'}</div>
      )}
    </div>
  );
};

export default ImageReveal;
