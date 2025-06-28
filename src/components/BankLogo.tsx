
import React from 'react';

interface BankLogoProps {
  className?: string;
  showText?: boolean;
}

const BankLogo: React.FC<BankLogoProps> = ({ className = "w-8 h-8", showText = true }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className={`${className} bg-gradient-to-br from-bank-blue-500 to-bank-blue-700 rounded-lg flex items-center justify-center shadow-lg`}>
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-white"
          fill="currentColor"
        >
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
          <path d="M9 11h6v2H9v-2z" fill="white" opacity="0.8"/>
          <path d="M9 8h6v2H9V8z" fill="white" opacity="0.8"/>
          <path d="M9 14h4v2H9v-2z" fill="white" opacity="0.8"/>
        </svg>
      </div>
      {showText && (
        <span className="text-xl font-bold text-gray-900">Swiss Bank</span>
      )}
    </div>
  );
};

export default BankLogo;
