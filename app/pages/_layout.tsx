import { Outlet } from 'react-router';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';
import '../common/styles/app.css';

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
