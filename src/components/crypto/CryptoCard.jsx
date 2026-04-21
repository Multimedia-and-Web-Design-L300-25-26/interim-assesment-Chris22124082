import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';

const CryptoCard = ({ crypto }) => {
  const isPositive = crypto.change >= 0;

  return (
    <Link to={`/asset/${crypto.id}`}>
      <Card hover className="cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${crypto.color}`}>
              <span className="text-white font-bold text-lg">{crypto.symbol.charAt(0)}</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{crypto.name}</h3>
              <p className="text-sm text-gray-500">{crypto.symbol}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-lg text-gray-900">${crypto.price.toLocaleString()}</p>
            <p className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '+' : ''}{crypto.change.toFixed(2)}%
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CryptoCard;
