import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col pt-[72px] bg-cbg text-white font-sans">
      <Navbar />
      <main className="flex-grow flex flex-col relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
