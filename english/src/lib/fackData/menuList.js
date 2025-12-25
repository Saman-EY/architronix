export const menuList = [
  {
    id: 1,
    name: "Home",
    path: "/",
    isMegaMenu: false,
    isDropdown: false,
  },
  {
    id: 2,
    name: "Projects",
    path: "/project-archive",
    isMegaMenu: false,
    isDropdown: false,
  },
  {
    id: 3,
    name: "services",
    path: "/services",
    isMegaMenu: false,
    isDropdown: false,
  },
  {
    id: 4,
    name: "Pages",
    path: "#",
    isMegaMenu: false,
    isDropdown: [
      {
        id: 1,
        name: "About Us",
        path: "/about-us",
      },
      {
        id: 2,
        name: "services",
        path: "/services",
      },
      {
        id: 4,
        name: "Project Single",
        path: "/project-single",
      },
      {
        id: 5,
        name: "Project Archive",
        path: "/project-archive",
      },
      {
        id: 8,
        name: "Career",
        path: "/career",
      },
    ],
  },

  {
    id: 6,
    name: "Contact",
    path: "/contact",
    isMegaMenu: false,
    isDropdown: false,
  },
];
