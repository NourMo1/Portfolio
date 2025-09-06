import Navbar from './../components/Navbar'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './../components/Footer'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  );
}

export default Layout