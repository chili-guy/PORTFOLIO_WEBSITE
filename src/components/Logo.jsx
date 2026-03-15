import React from 'react';

const Logo = ({ className }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Hexagon Border */}
            <path
                d="M50 5L89 27.5V72.5L50 95L11 72.5V27.5L50 5Z"
                className="stroke-primary"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* The 'R' */}
            <path
                d="M35 35V65M35 35H48C52 35 55 38 55 42C55 46 52 49 48 49H35M48 49L55 65"
                className="stroke-white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* The 'S' */}
            <path
                d="M65 35H58C54 35 54 39 58 39H62C66 39 66 43 62 43H55"
                className="stroke-primary"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-5, 10)"
            />
            {/* Decorative Node */}
            <rect x="48" y="48" width="4" height="4" className="fill-primary animate-pulse" />
        </svg>
    );
};

export default Logo;
