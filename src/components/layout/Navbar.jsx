import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ProjectWarningBanner from '../common/ProjectWarningBanner';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div className="sticky top-0 z-50">
      <ProjectWarningBanner />
      <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto ">
        <div className="flex items-left items-center h-16 gap-6">
          {/* Logo */}
          <Link to="/" className="px-">
            <img 
              src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseLogoNavigation-4.svg" 
              alt="Coinbase Logo" 
              className="w-12 h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link to="/explore" className="text-base font-medium text-[#0D0D0D] hover:text-[#0052FF] transition-colors">
              Cryptocurrencies
            </Link>
            <Link to="#" className="text-base font-medium text-[#0D0D0D] hover:text-[#0052FF] transition-colors">
              Individuals
            </Link>
            <Link to="#" className="text-base font-medium text-[#0D0D0D] hover:text-[#0052FF] transition-colors">
              Businesses
            </Link>
            <Link to="#" className="text-base font-medium text-[#0D0D0D] hover:text-[#0052FF] transition-colors">
              Institution
            </Link>
            <Link to="#" className="text-base font-medium text-[#0D0D0D] hover:text-[#0052FF] transition-colors">
              Developers
            </Link>
            <Link to="#" className="text-base font-medium text-[#0D0D0D] hover:text-[#0052FF] transition-colors">
              Company
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-2 ml-auto">
            {/* Search Icon */}
            <button className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-[#0D0D0D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Globe Icon */}
            <button className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-[#0D0D0D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            {isAuthenticated ? (
              <>
                <Link to="/profile">
                  <button className="px-4 py-2 text-base font-medium text-[#0D0D0D] bg-gray-100 hover:bg-gray-200 rounded-3xl transition-colors">
                    {user?.name?.split(' ')[0] || 'Profile'}
                  </button>
                </Link>
                <button
                  onClick={logout}
                  className="px-5 py-2 text-base font-medium text-white bg-[#0052FF] hover:bg-[#0041CC] rounded-3xl transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <button className="px-4 py-2 text-base font-medium text-[#0D0D0D] bg-gray-100 hover:bg-gray-200 rounded-3xl transition-colors">
                    Sign in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="px-5 py-2 text-base font-medium text-white bg-[#0052FF] hover:bg-[#0041CC] rounded-3xl transition-colors">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-gray-200">
            <Link
              to="/explore"
              className="block py-2 text-[#0D0D0D] hover:text-[#0052FF] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Cryptocurrencies
            </Link>
            <Link
              to="#"
              className="block py-2 text-[#0D0D0D] hover:text-[#0052FF] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Individuals
            </Link>
            <Link
              to="#"
              className="block py-2 text-[#0D0D0D] hover:text-[#0052FF] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Businesses
            </Link>
            <Link
              to="#"
              className="block py-2 text-[#0D0D0D] hover:text-[#0052FF] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Institution
            </Link>
            <Link
              to="#"
              className="block py-2 text-[#0D0D0D] hover:text-[#0052FF] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Developers
            </Link>
            <Link
              to="#"
              className="block py-2 text-[#0D0D0D] hover:text-[#0052FF] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Company
            </Link>
            <div className="pt-4 space-y-3">
              {isAuthenticated ? (
                <>
                  <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full px-4 py-2 text-sm font-medium text-[#0D0D0D] bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                      My profile
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-5 py-2 text-sm font-medium text-white bg-[#0052FF] hover:bg-[#0041CC] rounded-lg transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full px-4 py-2 text-sm font-medium text-[#0D0D0D] bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                      Sign in
                    </button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full px-5 py-2 text-sm font-medium text-white bg-[#0052FF] hover:bg-[#0041CC] rounded-lg transition-colors">
                      Sign up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
