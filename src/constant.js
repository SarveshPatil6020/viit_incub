import "./constant.css"
export const routes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/about",
      subRoutes: [
        {
          name: "Who are we",
          link: "/service/web-development",
        },
        {
          name: "Board Of Directors",
          link: "/service/mobile-development",
        },
        {
          name: "partners",
          link: "/service/ui-ux-design",
        },
        {
          name: "Mentors",
          link: "/service/ui-ux-design",
        },
        {
          name: "Photo Gallery",
          link: "/service/ui-ux-design",
        },

      ],
    },
    {
      name: "Events",
      link: "/event",
    },
    {
      name: "Services",
      link: "/services",
  
      subRoutes: [
        {
          name: "Incubation",
          link: "/service/web-development",
        },
        {
          name: "Thrust Areas",
          link: "/service/mobile-development",
        },
        {
          name: "Facilities",
          link: "/service/ui-ux-design",
        },
      ],
    },
    {
      name: "Programs",
      link: "/products",
    },

    {
      name: "Contact Us",
      link: "/contact",
    },
  ];