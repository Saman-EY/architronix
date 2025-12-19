import menu_image_1 from "@/assets/images/menu-image-1.png";
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
    name: "Services",
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
        name: "Services",
        path: "/services",
      },
      {
        id: 4,
        name: "Project Single",
        path: "/project-single",
      },
      {
        id: 5,
        name: "Product Archive",
        path: "/product-archive",
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
