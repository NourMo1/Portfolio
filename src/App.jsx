import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import ProjectsContextProvider from './components/Context/ProjectsContext';
import { Toaster } from 'react-hot-toast';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/projects", element: <Projects /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return (
    <ProjectsContextProvider>
      <Toaster />
      <RouterProvider router={router} />
    </ProjectsContextProvider>
  );
}

export default App
