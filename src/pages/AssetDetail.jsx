import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import PriceChart from '../components/crypto/PriceChart';
import { apiRequest } from '../utils/api';

const AssetDetail = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        setIsLoading(true);
        setError('');
        const response = await apiRequest(`/crypto/${id}`);
        setCrypto(response.data);
      } catch (requestError) {
        setError(requestError.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCrypto();
  }, [id]);

  const chartData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 1);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-gray-600">Loading asset...</div>
        <Footer />
      </div>
    );
  }

  if (error || !crypto) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Cryptocurrency not found</h1>
          <p className="text-gray-600 mb-4">{error || 'The requested asset does not exist.'}</p>
          <Link to="/explore">
            <Button>Back to Explore</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const isPositive = Number(crypto.change24h) >= 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/explore" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
          Back to Explore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <img src={crypto.image} alt={crypto.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{crypto.name}</h1>
                <p className="text-gray-500">{crypto.symbol}</p>
              </div>
            </div>

            <Card>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div>
                  <p className="text-gray-600 mb-1">Price</p>
                  <h2 className="text-4xl font-bold text-gray-900">${Number(crypto.price).toLocaleString()}</h2>
                  <p className={`text-lg font-medium mt-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {isPositive ? '+' : ''}{Number(crypto.change24h).toFixed(2)}% today
                  </p>
                </div>
              </div>
              <PriceChart data={chartData} isPositive={isPositive} />
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">About {crypto.name}</h3>
              <p className="text-gray-600 leading-relaxed">{crypto.description || 'No description provided.'}</p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Market Cap</span>
                  <span className="font-semibold">${((crypto.marketCap || 0) / 1e9).toFixed(2)}B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Volume (24h)</span>
                  <span className="font-semibold">${((crypto.volume || 0) / 1e9).toFixed(2)}B</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Buy {crypto.symbol}</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {amount && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">You'll get</span>
                      <span className="font-semibold">{(parseFloat(amount) / Number(crypto.price)).toFixed(8)} {crypto.symbol}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Price</span>
                      <span>${Number(crypto.price).toLocaleString()}</span>
                    </div>
                  </div>
                )}
              </div>

              <Button className="w-full mb-3">Buy {crypto.symbol}</Button>
              <Button variant="outline" className="w-full">Sell {crypto.symbol}</Button>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AssetDetail;
