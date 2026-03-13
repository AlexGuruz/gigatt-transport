import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TruckIcon({ flip = false, style }: { flip?: boolean; style?: React.CSSProperties }) {
  return (
    <svg
      width="18"
      height="44"
      viewBox="0 0 14 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: flip ? 'scaleX(-1)' : undefined,
        filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.9)) drop-shadow(0 0 2px rgba(244,167,21,0.6))',
        ...style,
      }}
    >
      {/* 18-wheeler drawn vertically: cab at top (front), trailer below — drives up/down the road */}
      {/* trailer (long) */}
      <rect x="1" y="18" width="12" height="16" rx="0.8" fill="#4a5568" stroke="#f4a715" strokeWidth="0.6" />
      <rect x="2" y="19" width="10" height="14" fill="#5a6578" opacity="0.9" />
      {/* trailer wheels */}
      <circle cx="4" cy="32" r="1.6" fill="#171717" stroke="#374151" strokeWidth="0.4" />
      <circle cx="4" cy="32" r="0.8" fill="#525252" />
      <circle cx="10" cy="32" r="1.6" fill="#171717" stroke="#374151" strokeWidth="0.4" />
      <circle cx="10" cy="32" r="0.8" fill="#525252" />
      <circle cx="4" cy="22" r="1.6" fill="#171717" stroke="#374151" strokeWidth="0.4" />
      <circle cx="10" cy="22" r="1.6" fill="#171717" stroke="#374151" strokeWidth="0.4" />
      {/* cab (front of truck when driving down) */}
      <path d="M1 4 L13 4 L13 16 L1 16 Z" fill="#3d4a5c" stroke="#f4a715" strokeWidth="0.6" />
      <path d="M2 5 L12 5 L12 15 L2 15 Z" fill="#4a5568" opacity="0.95" />
      {/* windshield */}
      <path d="M3 6 L11 6 L11 10 L3 10 Z" fill="#94a3b8" opacity="0.95" />
      {/* cab wheels */}
      <circle cx="4" cy="14" r="1.6" fill="#171717" stroke="#374151" strokeWidth="0.4" />
      <circle cx="4" cy="14" r="0.8" fill="#525252" />
      <circle cx="10" cy="14" r="1.6" fill="#171717" stroke="#374151" strokeWidth="0.4" />
      <circle cx="10" cy="14" r="0.8" fill="#525252" />
      {/* marker light (top/front) */}
      <circle cx="7" cy="2" r="0.6" fill="#f4a715" />
    </svg>
  );
}

export const RoadBorders: React.FC = () => {
  const { pathname } = useLocation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isAdmin = pathname.startsWith('/admin');
  if (isAdmin) return null;

  const docHeight = typeof document !== 'undefined' ? Math.max(1, document.documentElement.scrollHeight - window.innerHeight) : 1;
  const winH = typeof window !== 'undefined' ? window.innerHeight : 800;
  const truckTravel = docHeight > 0 ? (scrollY / docHeight) * (winH - 140) : scrollY * 0.35;
  const truckTop = Math.min(winH - 50, Math.max(100, 100 + truckTravel));

  return (
    <>
      {/* Left road */}
      <div className="road-border road-border--left" aria-hidden>
        <div className="road-border__texture" />
        <div className="road-border__dashed" />
        <div className="road-border__edge road-border__edge--right" />
        <div className="road-border__truck" style={{ top: truckTop }}>
          <TruckIcon />
        </div>
      </div>
      {/* Right road */}
      <div className="road-border road-border--right" aria-hidden>
        <div className="road-border__texture" />
        <div className="road-border__dashed" />
        <div className="road-border__edge road-border__edge--left" />
        <div className="road-border__truck" style={{ top: truckTop }}>
          <TruckIcon flip />
        </div>
      </div>
    </>
  );
};
