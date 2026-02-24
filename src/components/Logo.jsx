import React from 'react';

export const B2VibeLogo = ({ className, style, height = 40 }) => (
    <div
        className={className}
        style={{
            display: 'flex',
            alignItems: 'center',
            height: height,
            ...style
        }}
    >
        <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: `${height}px`,
            fontWeight: 800,
            background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            letterSpacing: '-1px'
        }}>
            B2Vibe
        </span>
    </div>
);
