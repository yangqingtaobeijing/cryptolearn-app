import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto py-10 px-6 md:px-12 bg-cbg relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold text-white tracking-wide">Crypto</span>
          <span className="text-xl font-bold text-gradient tracking-wide">Learn</span>
        </div>
        
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} CryptoLearn Academy. Engineered for the future of finance.
        </div>
        
        <div className="flex gap-6 text-sm">
          <Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
          <Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
          <Link to="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          <Link to="#" className="text-cpurple font-medium hover:text-white transition-colors">Newsletter</Link>
        </div>
      </div>
    </footer>
  );
}
