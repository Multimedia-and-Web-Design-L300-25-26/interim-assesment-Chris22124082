// Mock cryptocurrency data
export const cryptoData = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 43250.5,
    change: 2.34,
    marketCap: 845000000000,
    volume: 28000000000,
    color: "bg-orange-500",
    description:
      "Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network.",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 2890.75,
    change: 3.12,
    marketCap: 347000000000,
    volume: 15000000000,
    color: "bg-purple-500",
    description:
      "Ethereum is a decentralized platform that runs smart contracts and decentralized applications.",
  },
  {
    id: "tether",
    name: "Tether",
    symbol: "USDT",
    price: 1.0,
    change: 0.01,
    marketCap: 95000000000,
    volume: 45000000000,
    color: "bg-green-500",
    description:
      "Tether is a stablecoin cryptocurrency that is pegged to the US dollar.",
  },
  {
    id: "binance-coin",
    name: "BNB",
    symbol: "BNB",
    price: 315.8,
    change: -1.45,
    marketCap: 48000000000,
    volume: 1200000000,
    color: "bg-yellow-500",
    description:
      "BNB is the cryptocurrency coin that powers the BNB Chain ecosystem.",
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 98.25,
    change: 5.67,
    marketCap: 42000000000,
    volume: 2100000000,
    color: "bg-indigo-500",
    description:
      "Solana is a high-performance blockchain supporting builders around the world creating crypto apps.",
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 0.58,
    change: 1.23,
    marketCap: 20000000000,
    volume: 450000000,
    color: "bg-blue-500",
    description:
      "Cardano is a blockchain platform for changemakers, innovators, and visionaries.",
  },
  {
    id: "ripple",
    name: "XRP",
    symbol: "XRP",
    price: 0.52,
    change: -2.15,
    marketCap: 28000000000,
    volume: 1100000000,
    color: "bg-gray-600",
    description:
      "XRP is a digital asset built for payments, offering fast and low-cost international transactions.",
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.085,
    change: 4.32,
    marketCap: 12000000000,
    volume: 680000000,
    color: "bg-yellow-600",
    description:
      "Dogecoin is a cryptocurrency created as a fun alternative to traditional cryptocurrencies.",
  },
];

export const getCryptoById = (id) => {
  return cryptoData.find((crypto) => crypto.id === id);
};

export const generateChartData = () => {
  return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 1);
};
