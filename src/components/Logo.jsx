import React from 'react';

export const B2VibeLogo = ({ className, style, height = 40 }) => (
    <img
        src="https://b2vibe.com/wp-content/uploads/2025/09/B2VIBE_Principale_2000px.png"
        alt="B2Vibe - E-commerce Service Provider Logo"
        height={height}
        width={height * 5}
        fetchpriority="high"
        className={className}
        style={{
            display: 'block',
            objectFit: 'contain',
            aspectRatio: '5/1',
            ...style
        }}
    />
);
