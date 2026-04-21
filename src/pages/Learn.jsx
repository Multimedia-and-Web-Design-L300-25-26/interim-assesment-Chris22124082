import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Card from '../components/common/Card';

const Learn = () => {
  const articles = [
    {
      id: 1,
      title: 'What is Bitcoin?',
      category: 'Crypto Basics',
      description: 'Learn about the first and most popular cryptocurrency, how it works, and why it matters.',
      gradient: 'from-orange-400 to-red-500',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'What is Ethereum?',
      category: 'Crypto Basics',
      description: 'Discover the blockchain platform that enables smart contracts and decentralized applications.',
      gradient: 'from-purple-400 to-pink-500',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'What are NFTs?',
      category: 'Crypto Basics',
      description: 'Explore non-fungible tokens and how they\'re changing digital ownership.',
      gradient: 'from-blue-400 to-cyan-500',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'How to store crypto safely',
      category: 'Tips & Tutorials',
      description: 'Best practices for keeping your cryptocurrency secure.',
      gradient: 'from-green-400 to-emerald-500',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Understanding blockchain',
      category: 'Crypto Basics',
      description: 'The technology behind cryptocurrency explained simply.',
      gradient: 'from-indigo-400 to-purple-500',
      readTime: '8 min read',
    },
    {
      id: 6,
      title: 'Dollar cost averaging explained',
      category: 'Tips & Tutorials',
      description: 'A smart investment strategy for cryptocurrency.',
      gradient: 'from-yellow-400 to-orange-500',
      readTime: '5 min read',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-linear-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn about crypto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with crypto basics and discover advanced trading strategies. 
            From Bitcoin to DeFi, we\'ve got you covered.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 mb-12">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">
            All
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">
            Crypto Basics
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">
            Tips & Tutorials
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">
            Market Updates
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} to="#" className="block">
              <Card hover className="h-full">
                <div className={`h-48 rounded-lg bg-linear-to-br ${article.gradient} mb-4`}></div>
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {article.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.description}
                </p>
                <div className="text-sm text-gray-500">
                  {article.readTime}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start learning?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Earn crypto while you learn about blockchain technology
          </p>
          <Link to="/signup" className="inline-block">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get started
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Learn;
