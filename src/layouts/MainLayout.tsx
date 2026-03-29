import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MobileBottomNav from '../components/MobileBottomNav/MobileBottomNav';

export default function MainLayout() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
