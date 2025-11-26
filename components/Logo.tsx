import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
        {/* Abstract representation of the leaf/diamond logo from the box */}
      <img
          src="./logo_gutera.png"
          alt="Gutera Logo"
          className="h-10 w-auto"
          >
        </img>
      <span className="font-bold text-3xl tracking-tight text-gutera-blue">
        Gutera
      </span>
    </div>
  );
};

export default Logo;