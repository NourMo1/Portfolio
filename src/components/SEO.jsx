import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://nourmo.vercel.app";

const pageMetadata = {
  "/": {
    title: "Nour Aldin Mohamed | Frontend Developer Portfolio",
    description:
      "Explore Nour Aldin Mohamed's frontend developer portfolio, featuring responsive React websites and accessible digital experiences.",
  },
  "/home": {
    title: "Nour Aldin Mohamed | Frontend Developer Portfolio",
    description:
      "Explore Nour Aldin Mohamed's frontend developer portfolio, featuring responsive React websites and accessible digital experiences.",
  },
  "/projects": {
    title: "Frontend Development Projects | Nour Aldin Mohamed",
    description:
      "Browse React, JavaScript, and responsive web development projects built by frontend developer Nour Aldin Mohamed.",
  },
  "/contact": {
    title: "Contact a Frontend Developer | Nour Aldin Mohamed",
    description:
      "Contact Nour Aldin Mohamed about building a responsive, accessible, and high-performance website with React and modern frontend tools.",
  },
};

const setMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", content);
};

const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || {
      title: "Page Not Found | Nour Aldin Mohamed",
      description: "The requested page could not be found.",
    };
    const canonicalPath = pathname === "/home" ? "/" : pathname;
    const canonicalUrl = `${siteUrl}${canonicalPath === "/" ? "/" : canonicalPath}`;

    document.title = metadata.title;
    setMetaContent('meta[name="description"]', metadata.description);
    setMetaContent('meta[property="og:title"]', metadata.title);
    setMetaContent('meta[property="og:description"]', metadata.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', metadata.title);
    setMetaContent('meta[name="twitter:description"]', metadata.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
};

export default SEO;
