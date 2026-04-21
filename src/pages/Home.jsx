import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { apiRequest } from '../utils/api';

// Constants
const IMAGES = {
  hero: 'https://images.ctfassets.net/o10es7wu5gm1/4lbSrfvF333XkPz7WycixQ/afbeefb68eab9405594b2e9bfbb9a152/Hero__4_.png?fm=avif&w=1800&h=1800&q=65',
  advancedTrade: 'https://images.ctfassets.net/o10es7wu5gm1/3FwiGvu5fYVsludi8jgOY7/14e7039558786f182123e658c6940151/Advanced.png?fm=avif&w=2014&h=1612&q=65',
  coinbaseOne: 'https://images.ctfassets.net/o10es7wu5gm1/4CyfFj8M0X8tKnzh8AgdxT/f0fa52750499d9b1691f62880906ff3e/zero_fees_us.png?fm=avif&w=1320&h=1320&q=65',
  baseApp: 'https://images.ctfassets.net/o10es7wu5gm1/5bELGzAuqD4Kh1UhKOOuut/c1f4c17cc78ce3505ec04b0eb0522895/CB_LOLP__1_.png?fm=avif&w=1200&h=960&q=65',
  finalCTA: 'https://images.ctfassets.net/o10es7wu5gm1/3Ib1lnukt8MvV4bDjH2jm7/00bd55a880ce264f3b77253b837760b2/image.png?fm=avif&h=3200&q=65',
};

const LEARN_CARDS = [
  {
    id: 'usdc',
    image: 'https://images.ctfassets.net/o10es7wu5gm1/2tI0D7cX30gXudggzQc3tr/b6181107533f98f9dcc64da96efacff8/0_4mVyVaU6yLa--GR_?fm=avif&w=1400&h=802&q=65',
    alt: 'USDC',
    title: 'USDC: The digital dollar for the global crypto economy',
  },
  {
    id: 'bank',
    image: 'https://images.ctfassets.net/o10es7wu5gm1/2hqtyQztrvrBKvIizPZxaJ/42ad48711067c7d0ea45476331c20798/Replace_Bank.png?fm=avif&w=1440&h=1440&q=65',
    alt: 'Crypto Bank',
    title: 'Can crypto really replace your bank account?',
  },
  {
    id: 'investment',
    image: 'https://images.ctfassets.net/o10es7wu5gm1/5mufjKMH84IDeb8A0EGrtH/0438eeae827ffef404b935407ae7d780/Learn_Illustration_Ultimate_Guide_Bitcoin.png?fm=avif&w=768&h=439&q=65',
    alt: 'Crypto Investment',
    title: 'When is the best time to invest in crypto?',
  },
];

const CRYPTO_TABS = [
  { id: 'tradable', label: 'Tradable', borderColor: 'border-[#3f4044]' },
  { id: 'gainers', label: 'Top gainers', borderColor: 'border-[#727376]' },
  { id: 'new', label: 'New on Coinbase', borderColor: 'border-[#696969]' },
];

const CRYPTO_COLOR_PALETTE = [
  'bg-orange-500',
  'bg-purple-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-yellow-500',
  'bg-indigo-500',
  'bg-pink-500',
  'bg-cyan-500',
];

// Helper functions
const getChangeClassName = (change) => 
  change >= 0 ? 'text-green-600' : 'text-red-600';

const formatPriceChange = (change) => 
  `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;

const getColorFromSymbol = (symbol = '') => {
  const sum = symbol
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return CRYPTO_COLOR_PALETTE[sum % CRYPTO_COLOR_PALETTE.length];
};

// Component helpers
const EmailSignupForm = ({ buttonText = 'Sign up' }) => (
  <div className="flex flex-col sm:flex-row gap-3">
    <input
      type="email"
      placeholder="Email address"
      className="flex-1 px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052FF] focus:border-transparent"
    />
    <Link to="/signup">
      <button className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-white bg-[#0052FF] hover:bg-[#0041CC] rounded-3xl transition-colors whitespace-nowrap">
        {buttonText}
      </button>
    </Link>
  </div>
);

const CryptoListItem = ({ crypto }) => {
  const change = Number(crypto.change24h ?? crypto.change ?? 0);
  const isPositive = change >= 0;
  
  return (
    <Link
      to={`/asset/${crypto._id}`}
      className="flex items-center justify-between px-6 py-5 hover:bg-gray-700 transition-colors"
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className={`w-12 h-12 rounded-full ${getColorFromSymbol(crypto.symbol)} flex items-center justify-center shrink-0`}>
          <span className="text-white font-bold text-lg">
            {crypto.symbol.charAt(0)}
          </span>
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-[#ffffff] text-lg">{crypto.name}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-semibold text-[#ffffff] text-lg mb-0.5">
          ${Number(crypto.price).toLocaleString()}
        </div>
        <div className={`text-base font-medium ${getChangeClassName(change)}`}>
          {formatPriceChange(change)}
        </div>
      </div>
    </Link>
  );
};

const LearnCard = ({ card }) => (
  <Link to="/learn" className="group">
    <div className="overflow-hidden rounded-[40px] mb-4">
      <img 
        src={card.image}
        alt={card.alt}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h3 className="text-xl font-bold text-[#0D0D0D] mb-2 group-hover:text-[#0052FF] transition-colors">
      {card.title}
    </h3>
  </Link>
);

const Home = () => {
  const [activeTab, setActiveTab] = useState('tradable');
  const [cryptos, setCryptos] = useState([]);
  const [isLoadingCryptos, setIsLoadingCryptos] = useState(true);
  const [cryptoError, setCryptoError] = useState('');
  
  const topCryptos = useMemo(() => cryptos.slice(0, 6), [cryptos]);

  useEffect(() => {
    const fetchHomeCryptos = async () => {
      try {
        setIsLoadingCryptos(true);
        setCryptoError('');

        const endpointMap = {
          tradable: '/crypto',
          gainers: '/crypto/gainers',
          new: '/crypto/new',
        };

        const response = await apiRequest(endpointMap[activeTab] || '/crypto');
        setCryptos(response.data || []);
      } catch (error) {
        setCryptos([]);
        setCryptoError(error.message);
      } finally {
        setIsLoadingCryptos(false);
      }
    };

    fetchHomeCryptos();
  }, [activeTab]);
  
  const getTabClassName = (tabId, borderColor) => {
    const isActive = activeTab === tabId;
    return `pb-3 px-1 font-medium text-base transition-colors ${
      isActive 
        ? `text-[#ffffff] border-b-2 ${borderColor}` 
        : 'text-[#5B616E] hover:text-[#5c5c5c]'
    }`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <img 
                src={IMAGES.hero}
                alt="Coinbase" 
                className="w-full rounded-[56px]"
              />
            </div>
            <div className="order-1 md:order-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D0D0D] mb-6 leading-[1.1]">
                The future of finance is here.
              </h1>
              <p className="text-xl md:text-2xl text-[#5B616E] mb-8 leading-relaxed">
                Trade crypto and more on a platform you can trust.
              </p>
              <EmailSignupForm />
              <p className="text-sm text-[#8A919E] mt-4">
                Stocks and prediction markets not available in your jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Crypto Section */}
      <section className="bg-white py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0D0D0D] mb-4">
                Explore crypto like Bitcoin, Ethereum, and Dogecoin.
              </h2>
              <p className="text-lg text-[#5B616E] mb-6">
                Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
              </p>
              <Link to="/explore">
                <button className="flex items-center px-8 py-4 text-sm font-medium bg-black text-[#ffffff] border hover:bg-gray-800 rounded-full transition-colors">
                  See more assets
                </button>
              </Link>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden">
              <div className="flex gap-6 px-6 pt-6">
                {CRYPTO_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={getTabClassName(tab.id, tab.borderColor)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="divide-y divide-black">
                {isLoadingCryptos && (
                  <div className="px-6 py-8 text-sm text-gray-300">Loading assets...</div>
                )}

                {!isLoadingCryptos && cryptoError && (
                  <div className="px-6 py-8 text-sm text-red-300">{cryptoError}</div>
                )}

                {!isLoadingCryptos && !cryptoError && topCryptos.map((crypto) => (
                  <CryptoListItem key={crypto._id} crypto={crypto} />
                ))}

                {!isLoadingCryptos && !cryptoError && topCryptos.length === 0 && (
                  <div className="px-6 py-8 text-sm text-gray-300">No assets available.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Trade Section */}
      <section className="bg-[#ffffff] py-16 md:py-24">
        <div className="max-w-full max-h-full mx-auto px-10 sm:px-6 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-[50%_45%] lg:grid-cols-[50%_45%] gap-8 md:gap-12 items-center">
            <div className="flex justify-center md:justify-end order-2 md:order-1">
              <img 
                src={IMAGES.advancedTrade}
                alt="Advanced Trade" 
                className="w-full rounded-[56px] shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-6 leading-tight">
                Powerful tools, designed for the advanced trader.
              </h2>
              <p className="text-lg text-[#5B616E] mb-8 leading-relaxed">
                Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. 
                Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
              </p>
              <button className="px-6 py-3 text-base font-medium text-white bg-[#000000] hover:bg-[#2f3033] rounded-3xl transition-colors">
                Start trading
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coinbase One Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="text-sm font-bold inline-block rounded-lg border border-gray-200 text-[#000000] mb-3 tracking-wide px-4 py-2">COINBASE ONE</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-6 leading-tight">
                Zero trading fees, more rewards.
              </h2>
              <p className="text-lg text-[#5B616E] mb-8 leading-relaxed">
                Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
              </p>
              <button className="px-5 py-3 text-base font-medium text-white bg-[#000000] hover:bg-[#4a4c53] rounded-3xl transition-colors">
                Claim free trial
              </button>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="bg-[#F7F8FA] p-8 rounded-[56px] w-full">
                <img 
                  src={IMAGES.coinbaseOne}
                  alt="Coinbase One" 
                  className="w-full max-h-[400px] object-contain rounded-[56px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Base App Section */}
      <section className="bg-[#F7F8FA] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img 
                src={IMAGES.baseApp}
                alt="Base App" 
                className="w-full rounded-[56px]"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-sm font-bold text-[#0052FF] mb-3 tracking-wide">BASE APP</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-6 leading-tight">
                Countless ways to earn crypto with the Base App.
              </h2>
              <p className="text-lg text-[#5B616E] mb-8 leading-relaxed">
                An everything app to trade, create, discover, and chat, all in one place.
              </p>
              <button className="px-6 py-3 text-base font-medium text-white bg-[#000000] hover:bg-[#45474b] rounded-3xl transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4 leading-tight">
              New to crypto? Learn some crypto basics
            </h2>
            <p className="text-lg text-[#5B616E] leading-relaxed">
              Beginner guides, practical tips, and market updates for first-timers, experienced investors,
            </p>
            <Link to="/learn">
              <button className="px-6 py-3 text-base font-medium text-[#ffffff] bg-black border border-gray-300 hover:bg-gray-800 rounded-2xl transition-colors">
                Read More
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {LEARN_CARDS.map((card) => (
              <LearnCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#F7F8FA] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-6 leading-tight">
                Take control of your money
              </h2>
              <p className="text-xl text-[#5B616E] mb-8">
                Start your portfolio today and discover crypto
              </p>
              <EmailSignupForm />
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img 
                src={IMAGES.finalCTA}
                alt="Take control" 
                className="w-full rounded-[56px]"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
