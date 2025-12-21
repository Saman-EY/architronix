import menu_image_1 from "@/assets/images/menu-image-1.png";
export const menuList = [
  {
    id: 1,
    name: "Главная",
    path: "/",
    isMegaMenu: false,
    isDropdown: false,
  },
  {
    id: 2,
    name: "Проекты",
    path: "/project-archive",
    isMegaMenu: false,
    isDropdown: false,
  },
  {
    id: 3,
    name: "Услуги",
    path: "/services",
    isMegaMenu: false,
    isDropdown: false,
  },
  {
    id: 4,
    name: "Страницы",
    path: "#",
    isMegaMenu: false,
    isDropdown: [
      {
        id: 1,
        name: "О нас",
        path: "/about-us",
      },
      {
        id: 2,
        name: "Услуги",
        path: "/services",
      },
      {
        id: 4,
        name: "Проект Оман",
        path: "/project-single",
      },
      {
        id: 5,
        name: "Все проекты",
        path: "/project-archive",
      },
      {
        id: 8,
        name: "Инвестиции",
        path: "/career",
      },
    ],
  },

  {
    id: 6,
    name: "Контакты",
    path: "/contact",
    isMegaMenu: false,
    isDropdown: false,
  },
];
