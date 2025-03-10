import React, { createContext, useEffect, useState } from 'react'
import featureImage1 from "./../../assets/FreshCart.png";
import featureImage2 from "./../../assets/Games.png";
import featureImage3 from "./../../assets/Weather-App.png";
import featureImage4 from "./../../assets/CRUD-App.png";
import Image5 from "./../../assets/React-App.png";
import Image6 from "./../../assets/Login-App.png";
import Image7 from "./../../assets/Bookmark.png";
import Image8 from "./../../assets/Quotes-App.png";
import Image9 from "./../../assets/Template-Three-Nour.png";
import Image10 from "./../../assets/Template-Two-Kasper.png";
import Image11 from "./../../assets/Template-One-Leon.png";

export const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
  const projects = {
    featureProjects: [
      {
        title: "Fresh Cart",
        image: featureImage1,
        description:
          "Fully-featured e-commerce application designed to provide a seamless shopping experience for customers.",
        repo: "https://github.com/NourMo1/FreshCart",
        demo: "https://nourmo1.github.io/FreshCart/#/login",
        features: [
          "React",
          "TanStack Query",
          "State Managment",
          "API",
          "TailwindCSS",
          "Flowbite",
          "Formik",
          "Yup",
          "Font Awesome",
        ],
      },
      {
        title: "Games Reviews",
        image: featureImage2,
        description:
          "Games Reviews focus on free games and can help you access more informations about you favorite game and visit its website to play.",
        repo: "https://github.com/NourMo1/Games-Reviews",
        demo: "https://nourmo1.github.io/Games-Reviews/",
        features: [
          "HTML",
          "CSS",
          "Javascript",
          "Font Awesome",
          "API",
          "OOP",
          "Bootstrap",
        ],
      },
      {
        title: "Weather",
        image: featureImage3,
        description:
          "Weather website that shows you city weather by search using Weather Api and Javascript.",
        repo: "https://github.com/NourMo1/Weather-App",
        demo: "https://nourmo1.github.io/Weather-App/",
        features: [
          "HTML",
          "CSS",
          "Javascript",
          "Font Awesome",
          "API",
          "Bootstrap",
        ],
      },
      {
        title: "CRUD",
        image: featureImage4,
        description: "An app that aim to apply CRUD operations in Javascript.",
        repo: "https://github.com/NourMo1/CRUD-App",
        demo: "https://nourmo1.github.io/CRUD-App/",
        features: [
          "HTML",
          "CSS",
          "Javascript",
          "Font Awesome",
          "CRUD",
          "Bootstrap",
        ],
      },
    ],
    allProjects: [
      {
        title: "Fresh Cart",
        image: featureImage1,
        description:
          "Fully-featured e-commerce application designed to provide a seamless shopping experience for customers.",
        repo: "https://github.com/NourMo1/FreshCart",
        demo: "https://nourmo1.github.io/FreshCart/#/login",
        features: [
          "React",
          "TanStack Query",
          "State Managment",
          "API",
          "TailwindCSS",
          "Flowbite",
          "Formik",
          "Yup",
          "Font Awesome",
        ],
      },
      {
        title: "Games Reviews",
        image: featureImage2,
        description:
          "Games Reviews focus on free games and can help you access more informations about you favorite game and visit its website to play.",
        repo: "https://github.com/NourMo1/Games-Reviews",
        demo: "https://nourmo1.github.io/Games-Reviews/",
        features: [
          "HTML",
          "CSS",
          "Javascript",
          "Font Awesome",
          "API",
          "OOP",
          "Bootstrap",
        ],
      },
      {
        title: "Weather",
        image: featureImage3,
        description:
          "Weather website that shows you city weather by search using Weather Api and Javascript.",
        repo: "https://github.com/NourMo1/Weather-App",
        demo: "https://nourmo1.github.io/Weather-App/",
        features: [
          "HTML",
          "CSS",
          "Javascript",
          "Font Awesome",
          "API",
          "Bootstrap",
        ],
      },
      {
        title: "CRUD",
        image: featureImage4,
        description: "An app that aim to apply CRUD operations in Javascript.",
        repo: "https://github.com/NourMo1/CRUD-App",
        demo: "https://nourmo1.github.io/CRUD-App/",
        features: [
          "HTML",
          "CSS",
          "Javascript",
          "Font Awesome",
          "CRUD",
          "Bootstrap",
        ],
      },
      {
        title: "React",
        image: Image5,
        description:
          "First React app i worked on focus on routing concept using React Router.",
        repo: "https://github.com/NourMo1/React-Assignment1",
        demo: "https://nourmo1.github.io/React-Assignment1/",
        features: ["React", "Font Awesome", "Bootstrap", "React Routing"],
      },
      {
        title: "Smart Login",
        image: Image6,
        description:
          "Simple login and signup form with validation and modern design.",
        repo: "https://github.com/NourMo1/Login-App",
        demo: "https://github.com/NourMo1/Login-App",
        features: ["HTML", "CSS", "Javascript", "Font Awesome", "Bootstrap"],
      },
      {
        title: "Bookmark",
        image: Image7,
        description:
          "Bookmark App for bookmark your favorite websites all in one place. Visit your favorite website whenever you want.",
        repo: "https://github.com/NourMo1/Bookmark-App",
        demo: "https://nourmo1.github.io/Bookmark-App/",
        features: ["HTML", "CSS", "Javascript", "Font Awesome", "Bootstrap"],
      },
      {
        title: "Quotes",
        image: Image8,
        description:
          "Simple Quotes App that's display a random quote once New Quote button is clicked.",
        repo: "https://github.com/NourMo1/Quotes-App",
        demo: "https://nourmo1.github.io/Quotes-App/",
        features: ["HTML", "CSS", "Javascript", "Font Awesome", "Bootstrap"],
      },
      {
        title: "Template Three (Nour)",
        image: Image9,
        description:
          "Here I'am gonna share everything about my life. Books I'am Reading, Games I'am Playing, Stories and Events.",
        repo: "https://github.com/NourMo1/Template_Three",
        demo: "https://nourmo1.github.io/Template_Three/",
        features: ["HTML", "CSS"],
      },
      {
        title: "Template Two (Kasper)",
        image: Image10,
        description: "Free template website to apply on HTMl and CSS.",
        repo: "https://github.com/NourMo1/Template_Two",
        demo: "https://nourmo1.github.io/Template_Two/",
        features: ["HTML", "CSS"],
      },
      {
        title: "Template One (Leon)",
        image: Image11,
        description: "Free template website to apply on HTMl and CSS.",
        repo: "https://github.com/NourMo1/Template_One",
        demo: "https://nourmo1.github.io/Template_One/",
        features: ["HTML", "CSS"],
      },
    ],
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsContextProvider