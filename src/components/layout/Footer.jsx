import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F7F8FA]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16">
        {/* Logo */}
        <div className="mb-12">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseLogoNavigation-4.svg" 
              alt="Coinbase Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold text-[#0D0D0D]">Coinbase</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-[#0D0D0D] font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Learn more about the company
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Work at Coinbase
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Earn money becoming an affiliate
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  The Coinbase Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  In the news
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Vendors
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Our privacy and legal policies
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Our cookie policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Digital Asset Disclosures
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-[#0D0D0D] font-semibold mb-4 text-sm">Learn</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/explore" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Market statistics
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Coinbase Bytes newsletter
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Crypto basics
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Tips & tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Individuals */}
          <div>
            <h3 className="text-[#0D0D0D] font-semibold mb-4 text-sm">Individuals</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/signup" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Buy and sell crypto
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Wallet
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Card
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Derivatives
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Index
                </Link>
              </li>
            </ul>
          </div>

          {/* Businesses */}
          <div>
            <h3 className="text-[#0D0D0D] font-semibold mb-4 text-sm">Businesses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Commerce
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Prime
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Asset Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-[#0D0D0D] font-semibold mb-4 text-sm">Developers</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Coinbase Cloud
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Commerce
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Wallet SDK
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Base
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[#0D0D0D] font-semibold mb-4 text-sm">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Help center
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Create account
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  ID verification
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Account information
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Payment methods
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-[#5B616E] hover:text-[#0D0D0D] transition-colors">
                  Account access
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="mb-5 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-xs sm:text-sm text-amber-900">
            Demo project disclaimer: This is a student demonstration app. Do not enter real personal information, payment data, or your real passwords.
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#5B616E]">
              <span>© 2026 Coinbase</span>
              <span>•</span>
              <Link to="#" className="hover:text-[#0D0D0D] transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link to="#" className="hover:text-[#0D0D0D] transition-colors">
                Terms & Conditions
              </Link>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-[#5B616E]">
              <button className="hover:text-[#0D0D0D] transition-colors">
                Global
              </button>
              <span>•</span>
              <button className="hover:text-[#0D0D0D] transition-colors">
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
