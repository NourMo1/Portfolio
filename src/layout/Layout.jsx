import Navbar from './../components/Navbar'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export default Layout