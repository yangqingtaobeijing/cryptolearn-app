import { Link, useLocation } from 'react-router-dom';
import { Search, User } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'History', path: '/history' },
    { name: 'Coins', path: '/coins' },
    { name: 'Resources', path: '/' },
    { name: 'Whitepapers', path: '/whitepapers' },
  ];

  return (
    <nav className="border-b border-white/10 px-6 py-4 md:px-12 fixed top-0 w-full z-50 bg-cbg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold text-white tracking-wide">Crypto</span>
          <span className="text-2xl font-bold text-gradient tracking-wide">Learn</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wide transition-colors ${
                  isActive ? 'text-white font-semibold border-b-2 border-white pb-1' : 'text-gray-400 font-medium hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-ccyan hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-ccard border border-white/20 flex items-center justify-center overflow-hidden">
            <User className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </nav>
  );
}
