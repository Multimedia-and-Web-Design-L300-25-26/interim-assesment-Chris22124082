import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';
import { apiRequest } from '../utils/api';
import { useAuth } from '../hooks/useAuth';

const colorPalette = [
  'bg-orange-500',
  'bg-purple-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-yellow-500',
  'bg-indigo-500',
  'bg-pink-500',
  'bg-cyan-500',
];

const getColorFromSymbol = (symbol = '') => {
  const sum = symbol.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colorPalette[sum % colorPalette.length];
};

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [cryptos, setCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newCrypto, setNewCrypto] = useState({
    name: '',
    symbol: '',
    price: '',
    image: '',
    change24h: '',
  });
  const { isAuthenticated } = useAuth();

  const fetchCryptos = async () => {
    try {
      setIsLoading(true);
      setError('');

      const endpointMap = {
        all: '/crypto',
        gainers: '/crypto/gainers',
        new: '/crypto/new',
      };

      const response = await apiRequest(endpointMap[filter] || '/crypto');
      setCryptos(response.data || []);
    } catch (requestError) {
      setError(requestError.message);
      setCryptos([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptos();
  }, [filter]);

  const filteredCryptos = useMemo(() => {
    return cryptos.filter((crypto) => {
      const value = searchQuery.toLowerCase();
      return (
        crypto.name.toLowerCase().includes(value) ||
        crypto.symbol.toLowerCase().includes(value)
      );
    });
  }, [cryptos, searchQuery]);

  const handleCreateCrypto = async (event) => {
    event.preventDefault();

    try {
      setSubmitError('');
      setSubmitSuccess('');
      setIsSubmitting(true);

      await apiRequest('/crypto', {
        method: 'POST',
        body: JSON.stringify({
          ...newCrypto,
          symbol: newCrypto.symbol.toUpperCase(),
          price: Number(newCrypto.price),
          change24h: Number(newCrypto.change24h),
        }),
      });

      setSubmitSuccess('New cryptocurrency created successfully.');
      setNewCrypto({ name: '', symbol: '', price: '', image: '', change24h: '' });
      fetchCryptos();
    } catch (requestError) {
      setSubmitError(requestError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Explore crypto</h1>
          <p className="text-gray-600">Real-time listings from your backend API.</p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Crypto market prices</h2>
              <p className="text-sm text-gray-600">{filteredCryptos.length} assets</p>
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All tradable (/crypto)</option>
              <option value="gainers">Top gainers (/crypto/gainers)</option>
              <option value="new">New listings (/crypto/new)</option>
            </select>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search cryptocurrencies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && (
            <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {isLoading ? (
            <div className="py-10 text-center text-gray-600">Loading cryptocurrencies...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Asset</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Price</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Change (24h)</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCryptos.map((crypto) => {
                    const isPositive = Number(crypto.change24h) >= 0;
                    return (
                      <tr key={crypto._id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <Link to={`/asset/${crypto._id}`} className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full ${getColorFromSymbol(crypto.symbol)} flex items-center justify-center shrink-0`}>
                              <span className="text-white font-bold">{crypto.symbol.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{crypto.name}</div>
                              <div className="text-sm text-gray-500">{crypto.symbol}</div>
                            </div>
                          </Link>
                        </td>
                        <td className="py-4 px-4 text-right font-semibold text-gray-900">
                          ${Number(crypto.price).toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className={`font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                            {isPositive ? '+' : ''}{Number(crypto.change24h).toFixed(2)}%
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <Link to={`/asset/${crypto._id}`}>
                            <Button size="sm" variant="outline" className="rounded-md">
                              Trade
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Add New Cryptocurrency (POST /crypto)</h3>
          <p className="text-sm text-gray-600 mb-6">
            This action is protected by JWT. Sign in first to create a new listing.
          </p>

          {submitError && (
            <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {submitError}
            </div>
          )}
          {submitSuccess && (
            <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
              {submitSuccess}
            </div>
          )}

          <form onSubmit={handleCreateCrypto} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name (e.g. Avalanche)"
              value={newCrypto.name}
              onChange={(e) => setNewCrypto({ ...newCrypto, name: e.target.value })}
              className="px-4 py-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Symbol (e.g. AVAX)"
              value={newCrypto.symbol}
              onChange={(e) => setNewCrypto({ ...newCrypto, symbol: e.target.value })}
              className="px-4 py-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="number"
              step="0.0001"
              placeholder="Price"
              value={newCrypto.price}
              onChange={(e) => setNewCrypto({ ...newCrypto, price: e.target.value })}
              className="px-4 py-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="number"
              step="0.01"
              placeholder="24h Change (%)"
              value={newCrypto.change24h}
              onChange={(e) => setNewCrypto({ ...newCrypto, change24h: e.target.value })}
              className="px-4 py-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="url"
              placeholder="Image URL"
              value={newCrypto.image}
              onChange={(e) => setNewCrypto({ ...newCrypto, image: e.target.value })}
              className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-lg"
              required
            />

            <div className="md:col-span-2 flex justify-end">
              <Button type="submit" disabled={!isAuthenticated || isSubmitting}>
                {isSubmitting ? 'Creating...' : 'Create Crypto'}
              </Button>
            </div>
          </form>

          {!isAuthenticated && (
            <p className="text-xs text-red-600 mt-3">Please sign in to submit this form.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Explore;
