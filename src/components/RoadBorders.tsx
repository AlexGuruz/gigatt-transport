import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TruckIcon({ flip = false, style }: { flip?: boolean; style?: React.CSSProperties }) {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: flip ? 'scaleX(-1)' : undefined,
        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
        ...style,
      }}
    >
      {/* trailer */}
      <rect x="0" y="4" width="14" height="6" rx="0.5" fill="#2d3748" stroke="#1a202c" strokeWidth="0.4" />
      <rect x="1" y="5" width="12" height="4" fill="#374151" opacity="0.6" />
      {/* cab */}
      <path d="M14 3.5 L20 3.5 L21 6 L21 10 L14 10 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="0.4" />
      <path d="M15 4.5 L19.5 4.5 L20 6 L20 9 L15 9 Z" fill="#334155" opacity="0.8" />
      {/* windshield */}
      <path d="M16 5 L18.5 5 L19 6.5 L19 8.5 L16 8.5 Z" fill="#64748b" opacity="0.9" />
      {/* wheels - rear */}
      <circle cx="3" cy="10.5" r="1.4" fill="#171717" stroke="#0a0a0a" strokeWidth="0.3" />
      <circle cx="3" cy="10.5" r="0.7" fill="#404040" />
      <circle cx="7" cy="10.5" r="1.4" fill="#171717" stroke="#0a0a0a" strokeWidth="0.3" />
      <circle cx="7" cy="10.5" r="0.7" fill="#404040" />
      {/* wheels - front */}
      <circle cx="18" cy="10.5" r="1.4" fill="#171717" stroke="#0a0a0a" strokeWidth="0.3" />
      <circle cx="18" cy="10.5" r="0.7" fill="#404040" />
      {/* marker light */}
      <circle cx="20.5" cy="5" r="0.35" fill="#f4a715" />
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
  const truckTravel = docHeight > 0 ? (scrollY / docHeight) * (winH - 120) : scrollY * 0.35;
  const truckTop = Math.min(winH - 40, Math.max(60, 80 + truckTravel));

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
