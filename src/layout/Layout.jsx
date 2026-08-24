import Navbar from './../components/Navbar'
import SEO from './../components/SEO'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <SEO />
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export default Layout